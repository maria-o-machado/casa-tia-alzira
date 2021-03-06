import React from 'react'

function LeftArrow({color}) {
    return (
        <div>
             <svg
        width="61"
        height="40"
        viewBox="0 0 61 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_502_984)">
          <path
            d="M12.2929 15.2929C11.9024 15.6834 11.9024 16.3166 12.2929 16.7071L18.6569 23.0711C19.0474 23.4616 19.6805 23.4616 20.0711 23.0711C20.4616 22.6805 20.4616 22.0474 20.0711 21.6569L14.4142 16L20.0711 10.3431C20.4616 9.95262 20.4616 9.31946 20.0711 8.92893C19.6805 8.53841 19.0474 8.53841 18.6569 8.92893L12.2929 15.2929ZM13 17H49V15H13V17Z"
            fill={color}
          />
        </g>
        <defs>
          <filter
            id="filter0_d_502_984"
            x="0"
            y="0.635742"
            width="61"
            height="38.7285"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
              result="effect1_dropShadow_502_984"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_502_984"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
        </div>
    )
}

export default LeftArrow
