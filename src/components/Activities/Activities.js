import React, { useEffect } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import "./Activities.css";
import ArrowLink from "../ArrowLink/ArrowLink";
import RightArrow from "../RightArrow/RightArrow";
import LeftArrow from "../LeftArrow/LeftArrow";
import image from "./example.png";
import image1 from "./photo-1.jpeg";
import image2 from "./photo-2.jpeg";
import image3 from "./photo-3.jpeg";
import image4 from "./photo-4.webp";
import image5 from "./photo-5.jpeg";
import $ from "jquery";

function Activities({ passColorNavbar, homePage }) {
  useEffect(() => {
    passColorNavbar("#9F6F63");
  });
  document.addEventListener("DOMContentLoaded", function(event) {
    const scrollContainer = document.querySelector(".activities-grid-container");
  
    document.addEventListener("wheel", (evt) => {
      event.preventDefault();
      if (scrollContainer!=null){
        scrollContainer.scrollLeft += evt.deltaY;

      }
  });

  });  



  var $scroller = $('.activities-grid-container');
  // assign click handler
  $('.right-button').on('click', function () {     
      // get the partial id of the div to scroll to
      var divIdx = 1;         
      
      // retrieve the jquery ref to the div
      
      var scrollTo = $scroller.scrollLeft() + 800;                 
      console.log(scrollTo);
      // simply update the scroll of the scroller
      // $('.scroller').scrollLeft(scrollTo); 
      // use an animation to scroll to the destination
      $scroller
        .animate({'scrollLeft': scrollTo}, 500);    
  });
  $('.left-button').on('click', function () {       
    // get the partial id of the div to scroll to
    var divIdx = 1;         
    
    // retrieve the jquery ref to the div
    
    var scrollTo = $scroller.scrollLeft() - 800;                 
    console.log(scrollTo);
    // simply update the scroll of the scroller
    // $('.scroller').scrollLeft(scrollTo); 
    // use an animation to scroll to the destination
    $scroller
      .animate({'scrollLeft': scrollTo}, 500);    
});


  return (
    <div>
      {homePage ? (
        <div className="activities-container home">
          <h2 className="activities-title home">Que atividades posso realizar?</h2>
          <div className="locals-content-home">
              <div className="activities home">
                <ActivityCard
                  title={"Vindima"}
                  text={
                    "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
                  }
                  order={1}
                  image ={image}
                  link = {"/activity"}
                />
                <ActivityCard
                  title={"Passeio na vinha"}
                  text={
                    "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
                  }
                  order={0}
                  image ={image1}
                  link = {"/activity"}

                />
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
              <ActivityCard
                title={"Vindima"}
                text={
                  "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
                }
                order={1}
                image ={image}
                link = {"/activity"}

              />
              <ActivityCard
                title={"Passeio na vinha"}
                text={
                  "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
                }
                order={0}
                image ={image1}
                link = {"/activity"}

              />

              <ActivityCard
                title={"Correr pelo campo"}
                text={
                  "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
                }
                order={1}
                image ={image2}
                link = {"/activity"}

              />
              <ActivityCard
                title={"Visitar os girassóis"}
                text={
                  "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
                }
                order={0}
                image ={image3}
                link = {"/activity"}
              />

              <ActivityCard
                title={"Pisar da uva"}
                text={
                  "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
                }
                order={1}
                image ={image4}
                link = {"/activity"}

              />
              <ActivityCard
                title={"Observar a vista panorâmica"}
                text={
                  "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
                }
                order={0}
                image ={image5}
                link = {"/activity"}
              />
            </div>
          </div>

          <div className="activity-arrows">
          <button className="left-button">
              
              <LeftArrow color={"#9F6F63"}/>

            </button>
            <button className="right-button">
              
              <RightArrow color={"#9F6F63"}/>

            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Activities;
