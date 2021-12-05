import React, { useEffect, useState } from "react";
import "./Locals.css";
import ActivityCard from "../ActivityCard/ActivityCard";
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
  const [cardType, setCardType] = useState(true);

  useEffect(() => {
    passColorNavbar("#FCFCFC");
    passBackgroundButton("#E0D0C1");
    passColorButton("#9F6F63");
    if(window.innerWidth < 1355){
      setCardType(false);
    }
    else {
      setCardType(true);
    }
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

  useEffect(() => {
    window.addEventListener("resize", resizeThrottler, false);

    var resizeTimeout;
    function resizeThrottler() {
      // ignore resize events as long as an actualResizeHandler execution is in the queue
      if ( !resizeTimeout ) {
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          if(window.innerWidth < 1355){
            setCardType(false);
          }
          else {
            setCardType(true);
          }

        // The actualResizeHandler will execute at a rate of 15fps
        }, 66);
      }
    }
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
            {cardType ?
              <div className="locals home">
                  <ActivityCard
                title={"Nome do Local"}
                text={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximemollitia"}
                order={1}
              />
              <ActivityCard
                title={"Nome do Local"}
                text={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximemollitia"}
                order={1}
              />
              <ActivityCard
                title={"Nome do Local"}
                text={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximemollitia"}
                order={1}
              />
              </div>
              : 
              <div className="locals home">
                <ActivityCard
                title={"Nome do Local"}
                text={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximemollitia"}
                order={1}
              />
              <ActivityCard
                title={"Nome do Local"}
                text={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximemollitia"}
                order={1}
              />
              <ActivityCard
                title={"Nome do Local"}
                text={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximemollitia"}
                order={1}
              />
              </div>
              } 
            <div id="locals-know-more">
                  <ArrowLink text="Ver mais" color="#E0D0C1" link={"/locals"} />
                </div>
          </div>
        ) : (
          <div className="locals-container">
            <h2 className="title-locals">Que locais posso visitar nas proximidades?</h2>
            <div className="locals-grid-container" id="scroll-container">
              <div className="locals">
                <ActivityCard
                  title={"Nome do Local"}
                  text={
                    "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
                  }
                  order={1}
                />
                <ActivityCard
                  title={"Nome do Local"}
                  text={
                    "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
                  }
                  order={1}
                />
                <ActivityCard
                  title={"Nome do Local"}
                  text={
                    "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
                  }
                  order={1}
                />
                <ActivityCard
                  title={"Nome do Local"}
                  text={
                    "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
                  }
                  order={1}
                />
                <ActivityCard
                  title={"Nome do Local"}
                  text={
                    "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
                  }
                  order={1}
                />
                <ActivityCard
                  title={"Nome do Local"}
                  text={
                    "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
                  }
                  order={1}
                />
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
