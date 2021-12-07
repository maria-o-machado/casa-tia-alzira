import ArrowLink from "../ArrowLink/ArrowLink";
import css from "./ActivityCard.css";

import $ from "jquery";

function ActivityCard({ title, text, order, image, link }) {
  $(document).ready(function () {
    /*
    var card = document.getElementsByClassName("card-item");
    let size;
    if ($(window).width() <= 1090 ){
      $(".card-item").attr("data-scroll", false);
      $(".card-item").attr("data-scroll-direction", "vertical");
    } else 
    {
      $(".card-item").attr("data-scroll", true);
      $(".card-item").attr("data-scroll-direction", "horizontal");
      
    }
    
    
    
    $(window).resize(function () {
      //resize just happened, pixels changed
      if ($(window).width() <= 1090 ) {
        $(".card-item").attr("data-scroll", false);
        $(".card-item").attr("data-scroll-direction", "vertical");
      } else if ($(window).width() > 1090 ) {
        $(".card-item").attr("data-scroll", true);
        $(".card-item").attr("data-scroll-direction", "horizontal");
        
        
      }
      
    });
  */
  });

  return (
    <div className="card-item" theme={css}>
      {order ? (
        <div className="card-content">
          <div className="card-inner">
            <img className="activity-image" src={image} />
            <div className="activity-content">
              <h3>{title}</h3>
              <h4 className="text-content">{text}</h4>
              <ArrowLink text="Saber mais" color="#9F6F63" link={link} />
            </div>
          </div>
        </div>
      ) : (
        <div className="card-content">
          <div className="card-inner">
            <div className="activity-content">
              <h3>{title}</h3>
              <h4 className="text-content">{text}</h4>
              <ArrowLink text="Saber mais" color="#9F6F63" link={link} />
            </div>
            <img className="activity-image" src={image} />
          </div>
        </div>
      )}
    </div>
  );
}
export default ActivityCard;
