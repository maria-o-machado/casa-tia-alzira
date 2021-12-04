import React, { useEffect } from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import "./Activities.css";
//import LocomotiveScroll from "locomotive-scroll";
import $ from "jquery";
import ArrowLink from "../ArrowLink/ArrowLink";

function Activities({ passColorNavbar, homePage }) {
  $( document ).ready(function() {
 /*   let direction = "horizontal";
    const element = document.querySelector(".activities-container");
    if (homePage == false) {
      if ($(window).width() <= 1090 && direction !== "vertical") {
        direction = "vertical";
        $(".activities").attr("data-scroll-direction", "vertical");
        $(".activities").attr("data-scroll-section", "false");


      } else if ($(window).width() > 1090 && direction === "vertical") {
        //alert('More than 960')
        direction = "horizontal";
        $(".activities").attr("data-scroll-direction", "horizontal");
        $(".activities").attr("data-scroll-section", "true");



      }

      const scroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),

        direction: direction,
        smooth: true,
        lerp: 0.02,
        tablet: {
          direction: "vertical",
          lerp: 1,
          smooth: true,
        },
        smartphone: {
          direction: "vertical",
          lerp: 1,
          smooth: true,
        },
      });

      $(window).resize(function () {
        //resize just happened, pixels changed
        if ($(window).width() < 1090 && direction !== "vertical") {
          $(".activities").attr("data-scroll-direction", "vertical");

          $(".activities").attr("data-scroll-section", "false");
          direction = "vertical";
          scroll.destroy();
          
        } else if ($(window).width() > 1090 && direction === "vertical") {
          //alert('More than 960')
          direction = "horizontal";
          $(".activities").attr("data-scroll-direction", "horizontal");
          $(".activities").attr("data-scroll-section", "true");



          scroll.init();
        }
        scroll.update();
      });
    }*/
  });

  useEffect(() => {
    passColorNavbar("#9F6F63");
  });

  return (
    <div>
      {homePage ? (
        <div className="activities-container home">
          <h2>Que atividades posso realizar?</h2>

          <div className="activities home">
            <ActivityCard
              title={"Nome da atividade"}
              text={
                "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
              }
              order={1}
            />
            <ActivityCard
              title={"Nome da atividade"}
              text={
                "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
              }
              order={0}
            />
          </div>
          <div id="activities-know-more">
            <ArrowLink text="Ver mais" color="#9F6F63" link={"/activities"} />
          </div>
        </div>
      ) : (
        <div className="activities-container" >
          <h2>Que atividades posso realizar?</h2>
<div className ="activities-grid-container">
          <div
            className="activities"
            
          >
            <ActivityCard
              title={"Nome da atividade"}
              text={
                "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
              }
              order={1}
            />
            <ActivityCard
              title={"Nome da atividade"}
              text={
                "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
              }
              order={0}
            />

            <ActivityCard
              title={"Nome da atividade"}
              text={
                "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
              }
              order={1}
            />
            <ActivityCard
              title={"Nome da atividade"}
              text={
                "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
              }
              order={0}
            />

            <ActivityCard
              title={"Nome da atividade"}
              text={
                "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
              }
              order={1}
            />
            <ActivityCard
              title={"Nome da atividade"}
              text={
                "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
              }
              order={0}
            />
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default Activities;
