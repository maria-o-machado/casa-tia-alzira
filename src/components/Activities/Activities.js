import React, { useEffect, useState } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import "./Activities.css";
import ArrowLink from "../ArrowLink/ArrowLink";
import RightArrow from "../RightArrow/RightArrow";
import LeftArrow from "../LeftArrow/LeftArrow";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import $ from "jquery";

function Activities({ passColorNavbar, homePage }) {
  useEffect(() => {
    passColorNavbar("#9F6F63");
  });
  document.addEventListener("DOMContentLoaded", function (event) {
    const scrollContainer = document.querySelector(
      ".activities-grid-container"
    );

    document.addEventListener("wheel", (evt) => {
      event.preventDefault();
      if (scrollContainer != null) {
        scrollContainer.scrollLeft += evt.deltaY;
      }
    });
  });

  const [activities, setActivities] = useState([]);

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId,
  };

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  const getActivities = async (db) => {
    const activityCol = collection(db, "Atividade");
    const activitySnapshot = await getDocs(activityCol);
    const activityList = activitySnapshot.docs.map((doc) => doc.data());

    setActivities(activityList);
  };

  useEffect(() => {
    getActivities(db);
  }, [db]);

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  var storageRef = storage.ref();

  const [urls, setFiles] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      let result = await storageRef.child("atividades").listAll();
      let urlPromises = result.items.map((imageRef) =>
        imageRef.getDownloadURL()
      );

      return Promise.all(urlPromises);
    };

    const loadImages = async () => {
      const urls = await fetchImages();
      setFiles(urls);
    };
    loadImages();
  }, []);

  var $scroller = $(".activities-grid-container");
  // assign click handler
  $(".right-button").on("click", function () {
    // get the partial id of the div to scroll to
    var divIdx = 1;

    // retrieve the jquery ref to the div

    var scrollTo = $scroller.scrollLeft() + 800;
    // simply update the scroll of the scroller
    // $('.scroller').scrollLeft(scrollTo);
    // use an animation to scroll to the destination
    $scroller.animate({ scrollLeft: scrollTo }, 500);
  });
  $(".left-button").on("click", function () {
    // get the partial id of the div to scroll to
    var divIdx = 1;

    // retrieve the jquery ref to the div

    var scrollTo = $scroller.scrollLeft() - 800;
    // simply update the scroll of the scroller
    // $('.scroller').scrollLeft(scrollTo);
    // use an animation to scroll to the destination
    $scroller.animate({ scrollLeft: scrollTo }, 500);
  });

  return (
    <div>
      {homePage ? (
        <div className="activities-container home">
          <h2 className="activities-title home">
            Que atividades posso realizar?
          </h2>
          <div className="locals-content-home">
            <div className="activities home">
              {activities &&
                activities.map((item, i) => {
                  if (i < 2) {
                    return (
                      <ActivityCard
                        title={item.nome}
                        text={item.descricao}
                        order={i % 2}
                        image={urls[i]}
                        link={`/activity/${i}`}
                        key={i}
                      />
                    );
                  }
                })}
            </div>
            <div id="activities-know-more">
              <ArrowLink text="Ver mais" color="#9F6F63" link={"/activities"} />
            </div>
          </div>
        </div>
      ) : (
        <div className="activities-container">
          <h2 className="activities-title">Que atividades posso realizar?</h2>
          <div className="activities-grid-container" id="scroll-container">
            <div className="activities">
              {activities &&
                activities.map((item, i) => {
                  if (i < activities.length) {
                    return (
                      <ActivityCard
                        title={item.nome}
                        text={item.descricao}
                        order={i % 2}
                        image={urls[i]}
                        link={`/activity/${i}`}
                        key={i}
                      />
                    );
                  }
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Activities;
