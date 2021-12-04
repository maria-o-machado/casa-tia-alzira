import React from "react";

function RightArrow({color}) {
  return (
    <div>
      <svg
                width="61"
                height="40"
                viewBox="0 0 61 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_502_983)">
                  <path
                    d="M48.7071 16.7071C49.0976 16.3166 49.0976 15.6834 48.7071 15.2929L42.3431 8.92893C41.9526 8.53841 41.3195 8.53841 40.9289 8.92893C40.5384 9.31946 40.5384 9.95262 40.9289 10.3431L46.5858 16L40.9289 21.6569C40.5384 22.0474 40.5384 22.6805 40.9289 23.0711C41.3195 23.4616 41.9526 23.4616 42.3431 23.0711L48.7071 16.7071ZM12 17H48V15H12V17Z"
                    fill={color}
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_502_983"
                    x="0"
                    y="0.635742"
                    width="61"
                    height="38.7285"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="6" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_502_983"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_502_983"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
     
    </div>
  );
}

export default RightArrow;
