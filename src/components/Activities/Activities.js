import React from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import "./Activities.css";
import LocomotiveScroll from "locomotive-scroll";

function Activities() {
    window.addEventListener('DOMContentLoaded', (event) => {

    const element = document.querySelector(".activities-container");
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
       
            direction: 'horizontal',
            smooth: true,
            lerp: 0.02,
            tablet: {
                smooth: true
            },
            smartphone: {
                smooth: true
            }
      });

   
    });

  return (
    <div className="activities-container" data-scroll-container  >
      <h2 >Que atividades posso realizar?</h2>

      <div className="activities"data-scroll-section      data-scroll-direction="horizontal"
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
        /><ActivityCard
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
      /><ActivityCard
      title={"Nome da atividade"}
      text={
        "blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique accusantium nemo autem. Veritatisobcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam"
      }
      order={0}
    />
              </div>

      </div>
  );
}

export default Activities;
