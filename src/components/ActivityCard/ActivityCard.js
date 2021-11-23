import ArrowLink from "../ArrowLink/ArrowLink";
import "./ActivityCard.css";
import example from "./example.png";

function ActivityCard({ title, text, order }) {
  return (
    <div data-scroll
    data-scroll-direction="horizontal"
    data-scroll-speed={Math.random()*1     } className="card-item" >
    {order ? (
          <div className="card-content">
            <div className="card-inner">
              <img className="activity-image" src={example} />
              <div className="activity-content">
                <h3>{title}</h3>
                <h4 className="text-content">{text}</h4>
                <ArrowLink text="Saber mais" color="#9F6F63" />
              </div>
            </div>
          </div>
      ) : (
        <div className="card-content">
        <div className="card-inner">
          <div className="activity-content">
            <h3>{title}</h3>
            <h4 className="text-content">{text}</h4>
            <ArrowLink text="Saber mais" color="#9F6F63" />
          </div>
          <img className="activity-image" src={example} />
        </div>
        </div>
        
      )}
    </div>
  );
}

export default ActivityCard;
