import ArrowLink from "../ArrowLink/ArrowLink";
import "./ActivityCard.css";
import example from "./example.png";

function ActivityCard({ title, text, order }) {
  return (
      <div>
    {order? (
        <div className="card">

      <img className="activity-image" src={example} />
      <div className="activity-content">
        <h3>{title}</h3>
        <h4 className="text-content">{text}</h4>
        <ArrowLink text="Saber mais" color="#9F6F63" />
      </div>
        </div>): (
    <div className="card" style={{marginLeft: "180px"}}>

            <div className="activity-content">
              <h3>{title}</h3>
              <h4 className="text-content">{text}</h4>
              <ArrowLink text="Saber mais" color="#9F6F63" />
            </div>
            <img className="activity-image" src={example} />
              </div>
        )
    }  
    </div>
  );
}

export default ActivityCard;
