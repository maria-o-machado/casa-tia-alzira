import React, { useEffect } from "react";
import "./Locals.css";
import LocalCard from "../LocalCard/LocalCard";
import ArrowLink from "../ArrowLink/ArrowLink";
import RightArrow from "../RightArrow/RightArrow";
import LeftArrow from "../LeftArrow/LeftArrow";
import $ from "jquery";

function Locals({
  passColorNavbar,
  passBackgroundButton,
  passColorButton,
  homePage,
}) {
  useEffect(() => {
    passColorNavbar("#FCFCFC");
    passBackgroundButton("#E0D0C1");
    passColorButton("#9F6F63");
  });

  document.addEventListener("DOMContentLoaded", function(event) {
    const scrollContainer = document.querySelector(".locals-grid-container");
  
    document.addEventListener("wheel", (evt) => {
      event.preventDefault();
      if (scrollContainer!=null){
        scrollContainer.scrollLeft += evt.deltaY;

      }
  });

  });  

  var $scroller = $('.locals-grid-container');
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
          <div className="locals-container home">
            <h2 className="title-locals">Que locais posso visitar nas proximidades?</h2>
            <div className="locals home">
              <LocalCard />
              <LocalCard />
              <LocalCard />
            </div>
            <div id="locals-know-more">
                  <ArrowLink text="Ver mais" color="#E0D0C1" link={"/locals"} />
                </div>
          </div>
        ) : (
          <div className="locals-container">
            <h2 className="title-locals">Que locais posso visitar nas proximidades?</h2>
            <div className="locals-grid-container" id="scroll-container">
              <div className="locals">
                <LocalCard />
                <LocalCard />
                <LocalCard />
                <LocalCard />
                <LocalCard />
                <LocalCard />
              </div>
            </div>
            <div className="arrows">
                <button className="left-button">
                    <LeftArrow color={"#E0D0C1"}/>
                  </button>
                  <button className="right-button"> 
                    <RightArrow color={"#E0D0C1"}/>
                </button>
              </div>
          </div>
        )}
    </div>
  );
}

export default Locals;
