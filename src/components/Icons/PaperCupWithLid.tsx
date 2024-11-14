import React from "react";
import styles from "./PaperCupWithLid.module.css"
interface LunchBox {
  width?: string | number; // Width can be a string (e.g., '100px') or a number (e.g., 100 for pixels)
}
const PaperCupWithLid: React.FC<LunchBox> = ({ width="100" }) => {
  return (
    <div>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 30 500 500"
        width={width}
      >
        <g>
          <path
            className={styles.border}
            d="M261.9,442.3c-4,0-8.1,0-12.1,0c-12.1,0.1-24.3,0.2-36.4,0.2c-3,0-5.9-0.1-8.9-0.2c-5.9-0.2-11.7-0.5-17.6-0.7
 c-3.9-0.2-7.9-0.4-11.8-0.7c-3.2-0.2-6.4-0.3-9.5-0.8c-5.5-0.9-9.8-5.6-10.5-11.3c-1-7.5-1.9-14.9-2.9-22.4
 c-0.9-6.9-1.9-13.7-2.8-20.6c-1.1-8-2.1-16-3.1-23.9c-1-7.6-1.9-15.2-2.9-22.8c-0.8-6.4-1.7-12.8-2.6-19.2
 c-0.9-7.1-1.8-14.1-2.7-21.2c-0.9-6.9-1.9-13.8-2.8-20.7c-0.8-6.4-1.6-12.9-2.5-19.3c-0.8-6.3-1.7-12.5-2.6-18.8
 c-0.8-6.3-1.6-12.6-2.5-19c-0.8-6.3-1.7-12.6-2.6-18.9c-0.9-7-1.8-14-2.7-21c-0.3-2.2-0.3-2.2-2.4-2.2c-1.2,0-2.3,0-3.5,0
 c-1.5,0-2.5-1-2.5-2.5c0-1.4,1-2.3,2.5-2.4c0.4,0,0.9,0,1.3,0c75.5,0,151.1,0,226.6,0c0.5,0,1,0,1.4,0c1.5,0.1,2.4,1.1,2.3,2.5
 c0,1.4-0.9,2.3-2.3,2.4c-1.9,0.1-3.8,0-5.6,0c-0.8,0-1.1,0.3-1.2,1.1c-0.6,5.1-1.4,10.1-2.1,15.2c-0.7,5.1-1.3,10.3-2,15.4
 c-0.6,4.4-1.2,8.8-1.8,13.3c-0.6,4.5-1.2,9-1.8,13.5c-0.8,5.8-1.6,11.5-2.3,17.3c-0.7,5.1-1.3,10.3-2,15.4
 c-0.7,5.1-1.4,10.1-2,15.2c-0.6,4.6-1.2,9.2-1.8,13.9c-0.5,3.8-1,7.6-1.5,11.4c-0.5,4.1-1.1,8.2-1.6,12.3c-0.5,3.9-1,7.7-1.6,11.6
 c-0.6,4.6-1.2,9.2-1.8,13.7c-0.6,4.5-1.2,9-1.8,13.5c-0.5,4.1-1,8.1-1.6,12.2c-0.5,3.9-1,7.7-1.6,11.6c-0.5,4-1,8.1-1.6,12.1
 c-0.5,3.9-1,7.9-1.5,11.8c-0.6,4.7-1.2,9.4-1.8,14.1c-0.5,3.2-0.4,6.6-1.9,9.6c-2.6,4.9-6.7,7.3-12.1,7.6
 c-4.7,0.3-9.3,0.6-13.9,0.9c-1.5,0.1-3,0.2-4.5,0.3c-4.2,0.2-8.4,0.3-12.5,0.5C261.9,442.1,261.9,442.2,261.9,442.3z M230.8,178.7
 c-33.8,0-67.7,0-101.5,0c-0.4,0-0.8,0-1.2,0c-0.9-0.1-1.1,0.3-1,1.1c0.7,5.3,1.4,10.5,2.1,15.8c1.2,9.4,2.5,18.8,3.8,28.1
 c1.4,10.5,2.8,21.1,4.2,31.6c1.2,9.3,2.5,18.6,3.7,27.9c1.7,13.1,3.4,26.3,5.1,39.4c1.8,13.4,3.5,26.8,5.3,40.3
 c1.4,10.5,2.8,21,4.2,31.6c1.5,11.2,2.9,22.4,4.4,33.6c0.5,3.7,3.6,7.1,7.1,7.3c5.9,0.5,11.8,0.9,17.7,1.2
 c5.3,0.3,10.5,0.5,15.8,0.7c6.5,0.2,13,0.5,19.5,0.5c12.3,0,24.7-0.2,37-0.4c4.1-0.1,8.2-0.2,12.3-0.5c8.2-0.4,16.4-1,24.6-1.4
 c4-0.2,7.3-3.3,7.9-7.3c0.5-3.8,1-7.5,1.4-11.3c1.2-9.5,2.4-19.1,3.7-28.6c1.3-10.1,2.7-20.2,4-30.3c1.1-8.7,2.3-17.5,3.4-26.2
 c1.2-9.5,2.5-18.9,3.8-28.4c0.9-7.2,1.9-14.3,2.8-21.5c0.9-6.6,1.8-13.3,2.7-19.9c1-7.6,2-15.3,3-22.9c0.9-6.8,1.9-13.7,2.8-20.5
 c1-7.6,2-15.1,3-22.7c0.7-5.4,1.4-10.8,2.2-16.1c0.1-0.8-0.1-1-0.9-1c-0.4,0-0.8,0-1.2,0C298.5,178.7,264.6,178.7,230.8,178.7z"
          />
          <path
            className={styles.bg}
            d="M230.8,178.7c33.8,0,67.7,0,101.5,0c0.4,0,0.8,0,1.2,0c0.7,0,1,0.2,0.9,1c-0.8,5.4-1.5,10.8-2.2,16.1
 c-1,7.6-2,15.1-3,22.7c-0.9,6.8-1.9,13.7-2.8,20.5c-1,7.6-2,15.3-3,22.9c-0.9,6.6-1.8,13.3-2.7,19.9c-1,7.2-1.9,14.3-2.8,21.5
 c-1.3,9.5-2.5,18.9-3.8,28.4c-1.2,8.7-2.3,17.5-3.4,26.2c-1.3,10.1-2.7,20.2-4,30.3c-1.2,9.5-2.5,19.1-3.7,28.6
 c-0.5,3.8-0.9,7.5-1.4,11.3c-0.5,4-3.9,7-7.9,7.3c-8.2,0.5-16.4,1-24.6,1.4c-4.1,0.2-8.2,0.4-12.3,0.5c-12.3,0.2-24.7,0.4-37,0.4
 c-6.5,0-13-0.3-19.5-0.5c-5.3-0.2-10.5-0.4-15.8-0.7c-5.9-0.3-11.8-0.7-17.7-1.2c-3.4-0.3-6.6-3.7-7.1-7.3
 c-1.5-11.2-2.9-22.4-4.4-33.6c-1.4-10.5-2.8-21-4.2-31.6c-1.8-13.4-3.5-26.8-5.3-40.3c-1.7-13.1-3.4-26.3-5.1-39.4
 c-1.2-9.3-2.5-18.6-3.7-27.9c-1.4-10.5-2.8-21.1-4.2-31.6c-1.2-9.4-2.5-18.8-3.8-28.1c-0.7-5.3-1.4-10.5-2.1-15.8
 c-0.1-0.9,0.1-1.2,1-1.1c0.4,0,0.8,0,1.2,0C163.1,178.7,196.9,178.7,230.8,178.7z"
          />
        </g>
        <g className={styles.lid}>
          <path
            className={styles.border}
            d="M228.2,151.4c-40.4,0-80.8-0.1-121.2,0.1c-5.2,0-6.6-4.1-5.6-7.6c1.3-4.4,2.8-8.8,4.6-13
 c1.9-4.6,5.5-7.4,10.4-8.6c0.7-0.2,1.1-0.4,1.2-1.2c0.3-2.6,0.6-5.1,0.9-7.7c0.5-4.2,0.9-8.4,1.7-12.5c1-4.7,6.3-8.6,11.1-8.8
 c0.4,0,0.8,0,1.2,0c63.9,0,127.8,0,191.7,0c6.5,0,12.2,5,12.9,11.1c0.5,4.2,0.9,8.5,1.4,12.7c0.2,1.7,0.5,3.5,0.6,5.2
 c0.1,0.7,0.4,1,1.1,1.2c5.9,1.5,9.6,5.3,11.4,11c1.1,3.2,2.3,6.4,3.4,9.6c0.8,2.5,0.8,4.9-0.9,7.1c-0.8,1.1-2.1,1.5-3.5,1.5
 c-6.8,0-13.7,0-20.5,0C296.2,151.3,262.2,151.3,228.2,151.4C228.2,151.3,228.2,151.4,228.2,151.4z M228.4,96.7
 c-31.4,0-62.7,0-94.1,0c-0.5,0-1,0-1.4,0c-4.6,0.1-8,2.9-8.6,7c-0.7,5.3-1.2,10.6-1.8,15.9c-0.2,1.7-0.1,1.7,1.5,1.7
 c9.2-0.1,18.4-0.2,27.6-0.2c48.8,0,97.7,0,146.5,0c11.5,0,23.1,0,34.6,0c1.1,0,1.4-0.2,1.3-1.4c-0.6-4.6-1-9.3-1.5-13.9
 c-0.2-2.2-0.6-4.4-2.2-6.2c-2-2.3-4.6-2.9-7.4-2.9C291.4,96.7,259.9,96.7,228.4,96.7z M228.3,146.7c40,0,80,0,120,0
 c0.5,0,1,0,1.4,0c0.8,0,1.1-0.4,1-1.1c-0.1-0.5-0.2-0.9-0.3-1.4c-1.2-3.4-2.3-6.7-3.5-10.1c-1.4-3.6-3.7-6.4-7.6-7.2
 c-1.9-0.4-3.8-0.5-5.7-0.5c-71.4,0.1-142.9,0.1-214.3,0.2c-3.9,0-7.7,2.6-9.1,6.3c-1.4,3.7-2.7,7.4-3.9,11.1
 c-0.9,2.4-0.6,2.7,1.9,2.7C148.2,146.7,188.2,146.7,228.3,146.7z"
            fill="currentColor"
          />
          <path
            // className="bg"
            d="M228.4,96.7c31.5,0,63,0,94.5,0c2.9,0,5.5,0.6,7.4,2.9c1.6,1.8,2,4,2.2,6.2c0.5,4.6,1,9.3,1.5,13.9
c0.2,1.2-0.2,1.4-1.3,1.4c-11.5,0-23.1,0-34.6,0c-48.8,0-97.7,0-146.5,0c-9.2,0-18.4,0.1-27.6,0.2c-1.7,0-1.7,0-1.5-1.7
c0.6-5.3,1.1-10.6,1.8-15.9c0.5-4.1,4-6.9,8.6-7c0.5,0,1,0,1.4,0C165.7,96.7,197.1,96.7,228.4,96.7z M348.3,146.7c0.5,0,1,0,1.4,0
c0.8,0,1.1-0.4,1-1.1c-0.1-0.5-0.2-0.9-0.3-1.4c-1.2-3.4-2.3-6.7-3.5-10.1c-1.4-3.6-3.7-6.4-7.6-7.2c-1.9-0.4-3.8-0.5-5.7-0.5
c-71.4,0.1-142.9,0.1-214.3,0.2c-3.9,0-7.7,2.6-9.1,6.3c-1.4,3.7-2.7,7.4-3.9,11.1c-0.9,2.4-0.6,2.7,1.9,2.7c40.1,0,80.2,0,120.2,0
C268.3,146.7,308.3,146.7,348.3,146.7z"
            fill="white"
          />
        </g>
      </svg>
    </div>
  );
};

export default PaperCupWithLid;
