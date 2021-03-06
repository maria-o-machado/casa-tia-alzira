import React, { useEffect, useState } from "react";
import "./Locals.css";
import ActivityCard from "../ActivityCard/ActivityCard";
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

function Locals({
  passColorNavbar,
  passBackgroundButton,
  passColorButton,
  homePage,
}) {
  const [cardType, setCardType] = useState(true);

  const [locals, setLocals] = useState([]);

  const [numberMax, setNumber] = useState(3);

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

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  var storageRef = storage.ref();

  const [urls, setFiles] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      let result = await storageRef.child("locais").listAll();
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

  const db = getFirestore(app);

  const getLocals = async (db) => {
    const localCol = collection(db, "Local");
    const localSnapshot = await getDocs(localCol);
    const localList = localSnapshot.docs.map((doc) => doc.data());

    setLocals(localList);
  };

  useEffect(() => {
    getLocals(db);
  }, [db]);

  useEffect(() => {
    passColorNavbar("#FCFCFC");
    passBackgroundButton("#E0D0C1");
    passColorButton("#9F6F63");
    if (window.innerWidth < 1355) {
      setCardType(false);
    } else {
      setCardType(true);
    }
  });

  document.addEventListener("DOMContentLoaded", function (event) {
    const scrollContainer = document.querySelector(".locals-grid-container");

    document.addEventListener("wheel", (evt) => {
      event.preventDefault();
      if (scrollContainer != null) {
        scrollContainer.scrollLeft += evt.deltaY;
      }
    });
  });

  useEffect(() => {
    window.addEventListener("resize", resizeThrottler, false);

    var resizeTimeout;
    function resizeThrottler() {
      // ignore resize events as long as an actualResizeHandler execution is in the queue
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          resizeTimeout = null;
          if (window.innerWidth < 1355) {
            setCardType(false);
          } else {
            setCardType(true);
          }

          // The actualResizeHandler will execute at a rate of 15fps
        }, 66);
      }
    }
  });

  var $scroller = $(".locals-grid-container");
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

  /*function getImage(i){
    var pathReference = storage.ref('images/stars.jpg');

    return pathReference;
  }*/

  return (
    <div>
      {homePage ? (
        <div className="locals-container home">
          <h2 className="title-locals home">
            Que locais posso visitar nas proximidades?
          </h2>
          <div className="locals-content-home">
            {cardType ? (
              <div className="locals home">
                {locals &&
                  locals.map((item, i) => {
                    if (i < numberMax) {
                      return (
                        <ActivityCard
                          title={item.nome}
                          text={item.descricao}
                          order={1}
                          image={urls[i]}
                          link={`/local/${i}`}
                          key={i}
                        />
                      );
                    }
                  })}
              </div>
            ) : (
              <div className="locals home">
                {locals &&
                  locals.map((item, i) => {
                    if (i < numberMax) {
                      return (
                        <ActivityCard
                          title={item.nome}
                          text={item.descricao}
                          order={1}
                          image={urls[i]}
                          link={`/local/${i}`}
                          key={i}
                        />
                      );
                    }
                  })}
              </div>
            )}
            <div id="locals-know-more">
              <ArrowLink text="Ver mais" color="#E0D0C1" link={"/locals"} />
            </div>
          </div>
        </div>
      ) : (
        <div className="locals-container">
          <h2 className="title-locals">
            Que locais posso visitar nas proximidades?
          </h2>
          <div className="locals-grid-container" id="scroll-container">
            <div className="locals">
              {locals &&
                locals.map((item, i) => {
                  return (
                    <ActivityCard
                      title={item.nome}
                      text={item.descricao}
                      order={1}
                      image={urls[i]}
                      link={`/local/${i}`}
                      key={i}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Locals;
