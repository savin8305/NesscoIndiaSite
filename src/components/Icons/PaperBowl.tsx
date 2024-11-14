import React from "react";
import styles from "./PaperBowl.module.css";
interface PaperBowl {
  width?: string | number; // Width can be a string (e.g., '100px') or a number (e.g., 100 for pixels)
}
const PaperBowl: React.FC<PaperBowl> = ({ width="100" }) => {
  return (
    <div>
      <svg
        width={width}
        viewBox="0 100 1113 1113"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className={styles.bowl}>
          <path
            className={styles.border}
            d="M592.561 1007.26C484.6 1004.82 398.009 997.916 313.643 973.652C251.761 955.844 198.782 921.787 155.152 874.373C133.337 850.555 126.882 819.613 120.649 789.117C111.745 746.6 103.509 703.861 95.0502 661.345C91.266 642.201 88.1496 622.835 83.475 603.691C81.9168 597.681 77.6874 591.226 72.7902 586.996C43.6296 562.288 27.825 530.456 25.8216 493.059C25.1538 477.7 29.8284 461.227 35.616 446.536C53.424 401.793 84.3654 367.735 123.543 339.91C180.974 298.952 245.528 276.469 313.421 262.445C362.838 252.206 412.923 242.857 463.231 237.737C536.021 230.168 609.034 229.946 681.824 241.298C752.833 252.206 823.397 264.449 891.068 288.935C942.043 307.411 987.676 334.79 1027.08 372.187C1052.01 396.005 1070.04 424.943 1080.95 457.443C1096.75 504.634 1079.83 544.702 1047.78 578.76C1035.54 591.671 1027.74 603.246 1026.41 621.722C1025.07 640.42 1017.95 658.451 1014.17 676.927C1007.04 711.43 1001.03 746.155 993.241 780.658C987.899 803.809 981.889 827.182 972.762 848.996C966.752 863.243 956.512 877.044 944.937 887.729C906.872 923.345 864.133 953.396 814.048 968.978C777.097 980.553 738.809 988.789 700.522 994.799C658.228 1001.7 615.044 1004.82 592.561 1007.26Z"
            fill="black"
          />
          <path
            d="M542.031 711.43C549.154 711.43 556.277 711.652 563.401 711.43C570.524 711.207 577.647 710.094 584.77 709.871C681.379 705.642 776.429 691.618 868.808 662.012C913.773 647.766 956.29 629.29 991.906 597.236C999.029 590.78 1007.71 586.106 1014.83 579.873C1025.07 570.969 1036.43 562.733 1043.99 552.048C1067.37 519.326 1073.38 484.823 1054.9 446.536C1034.42 404.242 1002.59 373.3 964.081 347.924C920.451 319.208 872.369 301.623 822.284 289.38C756.395 273.13 689.837 262 622.167 255.545C569.188 250.648 516.655 254.877 464.344 258.661C426.056 261.555 388.214 269.346 350.15 276.024C289.157 286.931 229.501 302.736 174.741 332.564C129.998 356.828 90.153 386.656 64.7766 432.957C34.0578 489.275 45.4104 544.034 96.1632 579.65C108.406 588.332 120.427 597.236 132.002 606.808C153.149 624.393 176.522 637.749 202.121 647.543C311.417 689.17 425.611 705.642 542.031 711.43Z"
            fill="#F2F2F2"
          />
          <path
            className={styles.border}
            d="M548.486 695.848C421.382 691.618 300.065 669.581 184.981 617.938C156.71 605.249 129.108 590.113 108.406 566.072C78.1325 530.456 60.7697 491.278 79.4681 444.087C95.2727 404.019 121.985 373.745 159.159 351.931C211.247 321.434 268.233 304.739 326.554 291.606C409.139 273.13 492.614 265.562 577.202 268.233C666.019 271.127 753.723 280.476 839.202 304.962C889.955 319.431 938.704 338.575 980.553 371.519C1007.26 392.444 1024.41 420.491 1035.31 451.878C1047.56 486.826 1036.65 518.658 1017.28 548.041C993.464 584.325 957.625 604.582 919.56 621.722C854.339 651.105 785.555 667.577 715.659 680.711C674.7 688.279 633.742 691.173 592.339 692.731C577.202 693.622 561.842 694.957 548.486 695.848Z"
            fill="black"
          />
          <path
            className={styles.bg}
            d="M1008.38 608.811C1007.27 608.366 1006.15 608.143 1005.04 607.698C980.998 628.845 954.954 646.876 925.348 658.896C861.685 684.94 795.35 702.526 727.457 712.32C678.485 719.443 629.068 723.005 579.65 727.012C558.281 728.792 536.911 729.683 515.542 728.347C488.162 726.566 461.005 722.337 433.847 719.221C354.379 710.317 277.137 692.731 202.121 665.129C170.734 653.554 142.019 637.304 116.642 615.044C113.526 612.373 110.187 609.924 106.848 607.253C105.958 607.698 105.067 607.921 104.177 608.366C105.735 616.157 106.848 623.948 108.851 631.739C116.642 665.129 125.324 698.296 132.447 731.686C137.789 756.84 140.906 782.439 146.026 807.37C151.591 833.637 163.166 857.455 183.868 875.486C232.394 917.557 285.818 950.725 349.927 961.855C398.231 970.313 447.203 976.324 495.953 981.666C566.962 989.234 637.749 987.676 707.868 972.317C742.371 964.748 777.319 958.738 810.709 948.053C853.671 934.252 890.177 907.985 924.68 879.27C945.382 861.907 959.406 840.092 964.971 813.826C970.759 787.114 974.32 759.734 980.108 733.022C987.231 699.632 995.912 666.464 1003.7 633.074C1005.48 625.283 1006.6 617.047 1008.38 608.811Z"
            fill="#F2F2F2"
          />
          <path
            d="M229.501 609.924C233.507 607.921 235.956 606.585 238.405 605.249C257.548 595.01 276.024 583.212 296.058 574.976C323.66 563.623 352.153 553.829 381.091 545.815C406.468 538.692 432.289 532.682 458.333 529.788C513.761 523.555 569.411 524.891 624.838 528.007C649.992 529.343 675.814 530.901 700.077 537.356C758.398 552.716 817.165 568.52 867.695 602.801C888.842 617.27 905.759 614.821 926.016 603.914C956.957 586.996 987.231 569.633 1006.6 538.915C1019.06 519.103 1029.08 497.956 1025.3 473.47C1019.29 434.96 999.919 403.796 969.2 380.423C922.009 344.585 866.804 326.332 810.041 311.863C718.998 288.49 626.174 283.592 532.904 282.479C465.457 281.589 399.122 291.161 333.455 304.962C283.815 315.424 235.066 329.225 189.433 351.931C183.2 355.047 178.525 358.386 179.861 366.4C182.532 382.204 184.758 398.009 187.874 413.813C191.213 430.508 195.443 447.203 198.782 463.898C209.021 511.98 219.038 560.062 229.501 609.924ZM234.398 621.054C234.62 622.167 235.066 623.28 235.288 624.17C449.429 699.854 663.348 699.187 877.712 621.722C856.565 608.366 835.64 595.678 813.38 586.106C789.785 575.866 765.299 567.63 740.813 560.062C718.998 553.384 696.961 546.038 674.478 544.034C627.955 539.805 581.209 538.247 534.685 537.134C509.086 536.466 483.265 538.469 457.666 540.695C411.142 544.48 368.403 561.842 324.773 576.534C296.058 586.328 270.014 600.352 243.747 614.821C240.408 616.602 237.514 618.828 234.398 621.054ZM167.173 366.622C165.169 366.845 164.056 366.622 163.166 367.067C161.608 367.735 159.827 368.403 158.269 369.516C123.988 390.218 101.06 420.269 89.7078 458.111C78.3552 495.953 93.9372 527.562 117.978 555.387C143.354 584.325 177.19 600.797 212.138 614.821C213.919 615.489 215.922 615.044 218.816 615.266C201.676 531.791 184.535 449.207 167.173 366.622Z"
            fill="#F2F2F2"
          />
        </g>
      </svg>
    </div>
  );
};

export default PaperBowl;
