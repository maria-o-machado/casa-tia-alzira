import arrow from "./arrow.svg";
import "./ArrowLink.css"

function ArrowLink({text, color}) {
  return (
    <a style={{color: color}} className="activity-link" href="">
      <p  >{text}</p>
      <svg width="25" height="9" viewBox="0 0 25 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.4367 4.98295C24.632 4.78769 24.632 4.4711 24.4367 4.27584L21.2548 1.09386C21.0595 0.898598 20.7429 0.898598 20.5477 1.09386C20.3524 1.28912 20.3524 1.60571 20.5477 1.80097L23.3761 4.62939L20.5477 7.45782C20.3524 7.65308 20.3524 7.96967 20.5477 8.16493C20.7429 8.36019 21.0595 8.36019 21.2548 8.16493L24.4367 4.98295ZM0 5.12939H24.0832V4.12939H0V5.12939Z" fill={color}/>
</svg>

    </a>
  );
}

export default ArrowLink;
