import React from "react";
import ActivityCard from "../ActivityCard/ActivityCard";
import "./Activities.css";

function Activities() {
  return (
    <div className="activities-container">
      <h2>Que atividades posso realizar?</h2>
      <div className="activities">
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
  );
}

export default Activities;
