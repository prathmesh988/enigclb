import { HeroHighlight, Highlight } from "./components/hero-highlight";
import { motion } from "framer-motion";
export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className=" text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        {/* <svg
          width="1328"
          height="1254"
          viewBox="0 0 1328 1254"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M543.56 420.866H490.293C489.582 415.398 488.126 410.462 485.925 406.058C483.723 401.655 480.811 397.891 477.189 394.766C473.567 391.641 469.27 389.261 464.298 387.628C459.398 385.923 453.964 385.071 447.999 385.071C437.416 385.071 428.29 387.663 420.619 392.848C413.02 398.033 407.161 405.526 403.041 415.327C398.993 425.128 396.969 436.989 396.969 450.909C396.969 465.398 399.028 477.543 403.148 487.344C407.338 497.074 413.197 504.425 420.726 509.396C428.325 514.297 437.31 516.747 447.679 516.747C453.503 516.747 458.794 516.001 463.553 514.51C468.382 513.018 472.608 510.852 476.23 508.011C479.923 505.099 482.942 501.584 485.286 497.464C487.7 493.274 489.369 488.551 490.293 483.295L543.56 483.615C542.636 493.274 539.831 502.791 535.143 512.166C530.527 521.541 524.17 530.099 516.074 537.841C507.977 545.511 498.105 551.619 486.457 556.165C474.881 560.71 461.599 562.983 446.614 562.983C426.869 562.983 409.185 558.651 393.56 549.986C378.006 541.25 365.719 528.537 356.699 511.847C347.679 495.156 343.169 474.844 343.169 450.909C343.169 426.903 347.75 406.555 356.912 389.865C366.074 373.175 378.467 360.497 394.092 351.832C409.717 343.168 427.224 338.835 446.614 338.835C459.824 338.835 472.04 340.682 483.261 344.375C494.483 347.997 504.355 353.324 512.878 360.355C521.401 367.315 528.325 375.874 533.652 386.03C538.979 396.186 542.281 407.798 543.56 420.866ZM558.735 560V341.818H611.47V517.173H702.237V560H558.735ZM846.532 341.818H899.16V482.55C899.16 498.814 895.289 512.983 887.548 525.057C879.806 537.06 869.011 546.364 855.161 552.969C841.312 559.503 825.225 562.77 806.901 562.77C788.364 562.77 772.171 559.503 758.322 552.969C744.472 546.364 733.712 537.06 726.042 525.057C718.371 512.983 714.536 498.814 714.536 482.55V341.818H767.271V477.969C767.271 485.497 768.904 492.209 772.171 498.104C775.509 503.999 780.161 508.615 786.127 511.953C792.093 515.291 799.018 516.96 806.901 516.96C814.785 516.96 821.674 515.291 827.569 511.953C833.535 508.615 838.187 503.999 841.525 498.104C844.863 492.209 846.532 485.497 846.532 477.969V341.818ZM917.212 560V341.818H1008.19C1024.53 341.818 1038.2 344.126 1049.21 348.743C1060.29 353.359 1068.6 359.822 1074.14 368.132C1079.75 376.442 1082.55 386.065 1082.55 397.003C1082.55 405.312 1080.81 412.734 1077.33 419.268C1073.85 425.732 1069.06 431.094 1062.95 435.355C1056.84 439.616 1049.78 442.599 1041.75 444.304V446.435C1050.56 446.861 1058.69 449.24 1066.15 453.572C1073.68 457.905 1079.71 463.942 1084.26 471.683C1088.8 479.354 1091.08 488.445 1091.08 498.956C1091.08 510.675 1088.09 521.151 1082.13 530.384C1076.16 539.545 1067.53 546.79 1056.24 552.116C1044.95 557.372 1031.24 560 1015.12 560H917.212ZM969.946 517.493H1002.55C1013.98 517.493 1022.4 515.327 1027.79 510.994C1033.26 506.662 1036 500.625 1036 492.884C1036 487.273 1034.68 482.443 1032.06 478.395C1029.43 474.276 1025.7 471.115 1020.87 468.913C1016.04 466.641 1010.25 465.504 1003.5 465.504H969.946V517.493ZM969.946 431.52H999.137C1004.89 431.52 1010 430.561 1014.48 428.643C1018.95 426.726 1022.43 423.956 1024.92 420.334C1027.47 416.712 1028.75 412.344 1028.75 407.23C1028.75 399.915 1026.16 394.162 1020.98 389.972C1015.79 385.781 1008.8 383.686 999.989 383.686H969.946V431.52Z"
            fill="white"
          />
          <path
            d="M597.7 704.818V923H544.966V704.818H597.7ZM767.988 776.089C766.78 771.615 765.005 767.673 762.661 764.264C760.317 760.784 757.441 757.837 754.032 755.422C750.623 753.007 746.716 751.196 742.313 749.989C737.909 748.71 733.08 748.071 727.824 748.071C717.242 748.071 708.08 750.628 700.338 755.741C692.668 760.855 686.738 768.312 682.547 778.114C678.357 787.844 676.262 799.669 676.262 813.589C676.262 827.581 678.286 839.513 682.334 849.385C686.382 859.257 692.242 866.786 699.912 871.97C707.583 877.155 716.887 879.747 727.824 879.747C737.483 879.747 745.651 878.185 752.327 875.06C759.074 871.864 764.188 867.354 767.668 861.53C771.148 855.706 772.888 848.852 772.888 840.969L782.689 842.141H729.635V803.682H823.705V832.553C823.705 852.084 819.55 868.81 811.24 882.73C803.002 896.651 791.638 907.339 777.15 914.797C762.732 922.254 746.148 925.983 727.398 925.983C706.588 925.983 688.3 921.473 672.533 912.453C656.766 903.433 644.479 890.578 635.672 873.888C626.865 857.126 622.462 837.24 622.462 814.229C622.462 796.331 625.125 780.457 630.452 766.608C635.779 752.687 643.201 740.898 652.718 731.239C662.306 721.58 673.385 714.264 685.956 709.293C698.598 704.321 712.199 701.835 726.759 701.835C739.401 701.835 751.155 703.646 762.022 707.268C772.959 710.891 782.618 716.004 790.999 722.609C799.451 729.214 806.304 737.062 811.56 746.153C816.816 755.244 820.083 765.223 821.361 776.089H767.988ZM848.786 704.818H914.092L969.489 839.903H972.046L1027.44 704.818H1092.75V923H1041.4V788.98H1039.59L987.174 921.615H954.362L901.947 788.234H900.136V923H848.786V704.818ZM1166.84 923H1110.16L1183.78 704.818H1253.98L1327.6 923H1270.92L1219.68 759.79H1217.97L1166.84 923ZM1159.27 837.134H1277.74V877.19H1159.27V837.134Z"
            fill="white"
          />
          <path
            d="M143.513 923V704.818H295.643V747.645H196.247V792.389H287.866V835.322H196.247V880.173H295.643V923H143.513ZM508.358 704.818V923H463.614L376.788 797.077H375.403V923H322.669V704.818H368.053L453.919 830.528H455.73V704.818H508.358Z"
            fill="white"
          />
          <path
            d="M534.247 1032.82V1251H481.513V1032.82H534.247ZM614.087 1032.82V1251H561.353V1032.82H614.087ZM759.126 1098.23C758.415 1090.42 755.255 1084.35 749.644 1080.01C744.104 1075.61 736.185 1073.41 725.887 1073.41C719.069 1073.41 713.387 1074.3 708.842 1076.07C704.296 1077.85 700.887 1080.3 698.614 1083.42C696.342 1086.48 695.17 1089.99 695.099 1093.97C694.957 1097.24 695.596 1100.11 697.016 1102.6C698.508 1105.08 700.638 1107.29 703.408 1109.2C706.249 1111.05 709.658 1112.68 713.636 1114.1C717.613 1115.52 722.087 1116.77 727.059 1117.83L745.809 1122.09C756.604 1124.44 766.121 1127.56 774.36 1131.47C782.67 1135.38 789.63 1140.03 795.241 1145.42C800.923 1150.82 805.219 1157.04 808.131 1164.07C811.043 1171.1 812.535 1178.98 812.606 1187.72C812.535 1201.5 809.055 1213.32 802.165 1223.19C795.276 1233.07 785.369 1240.63 772.442 1245.89C759.587 1251.14 744.069 1253.77 725.887 1253.77C707.634 1253.77 691.725 1251.04 678.16 1245.57C664.594 1240.1 654.048 1231.79 646.519 1220.64C638.991 1209.49 635.12 1195.39 634.907 1178.34H685.404C685.83 1185.38 687.712 1191.23 691.05 1195.92C694.388 1200.61 698.969 1204.16 704.793 1206.58C710.688 1208.99 717.506 1210.2 725.248 1210.2C732.35 1210.2 738.387 1209.24 743.359 1207.32C748.401 1205.4 752.272 1202.74 754.971 1199.33C757.67 1195.92 759.055 1192.02 759.126 1187.61C759.055 1183.49 757.776 1179.98 755.29 1177.07C752.805 1174.08 748.969 1171.53 743.785 1169.39C738.671 1167.19 732.137 1165.17 724.183 1163.32L701.384 1158C682.492 1153.66 667.613 1146.67 656.746 1137.01C645.88 1127.28 640.482 1114.14 640.553 1097.59C640.482 1084.1 644.104 1072.27 651.42 1062.12C658.735 1051.96 668.856 1044.04 681.782 1038.36C694.708 1032.68 709.445 1029.84 725.994 1029.84C742.897 1029.84 757.563 1032.71 769.992 1038.46C782.492 1044.15 792.187 1052.14 799.076 1062.43C805.965 1072.73 809.481 1084.66 809.623 1098.23H759.126ZM826.102 1075.64V1032.82H1010.51V1075.64H944.354V1251H892.366V1075.64H826.102Z"
            fill="#2704FF"
          />
          <g clip-path="url(#clip0_0_1)">
            <path
              d="M479.712 284.584C474.304 285.484 468.665 286.542 462.867 287.721L477.257 277.721L426.155 281.932L396.888 239.907L401.057 290.949L369.075 313.183C359.278 316.395 349.348 319.802 339.347 323.396C287.755 341.931 240.525 363.027 206.375 382.785C169.677 404.022 153.161 420.614 157.29 432.109C161.42 443.603 184.72 445.892 226.542 438.919C234.212 437.642 242.328 436.067 250.777 434.233L273.251 432.382L293.228 461.065L290.385 426.227L294.63 423.276C317.64 416.839 342.064 409.032 366.907 400.107C418.498 381.572 465.729 360.476 499.879 340.718C536.576 319.481 553.093 302.889 548.964 291.394C544.834 279.9 521.534 277.611 479.712 284.584ZM364.449 393.267C346.475 399.725 329.421 405.362 313.384 410.241L319.112 406.258L284.222 409.133L264.242 380.441L267.088 415.289L250.517 426.806C198.708 438.036 167.07 437.861 164.122 429.655C159.393 416.493 224.698 372.319 341.798 330.249C353.243 326.137 364.3 322.367 374.976 318.904L410.052 316.014L439.318 358.04L435.149 306.998L447.201 298.615C504.045 285.479 539.006 285.206 542.114 293.855C546.842 307.017 481.54 351.2 364.449 393.267Z"
              fill="#C75959"
            />
            <path
              d="M525.93 32.2855L521.199 13.6937C520.436 10.7017 516.191 10.7017 515.429 13.6937L510.698 32.2855C510.431 33.3255 509.631 34.1415 508.597 34.4241L488.016 40.0507C485.034 40.8667 485.12 45.1227 488.128 45.8213L507.082 50.2213C508.154 50.4719 509.007 51.2933 509.285 52.3599L515.429 75.6343C516.207 78.5889 520.404 78.5889 521.183 75.6343L527.327 52.3599C527.61 51.2933 528.458 50.4719 529.53 50.2213L548.484 45.8213C551.492 45.1227 551.577 40.8667 548.596 40.0507L528.015 34.4241C526.996 34.1361 526.196 33.3201 525.93 32.2855Z"
              fill="#C75959"
            />
            <path
              d="M547.204 12.1257L545.311 4.68578C545.007 3.49113 543.306 3.49113 543.002 4.68578L541.108 12.1257C541.002 12.5417 540.682 12.867 540.271 12.979L532.036 15.2297C530.842 15.555 530.879 17.2563 532.079 17.539L539.663 19.2989C540.095 19.4003 540.431 19.7256 540.543 20.1576L543.002 29.4695C543.316 30.6535 544.991 30.6535 545.306 29.4695L547.764 20.1576C547.876 19.731 548.217 19.4003 548.644 19.2989L556.228 17.539C557.433 17.2616 557.465 15.555 556.271 15.2297L548.036 12.979C547.631 12.867 547.311 12.5417 547.204 12.1257Z"
              fill="#C75959"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_1">
              <rect
                width="544.539"
                height="544.539"
                fill="white"
                transform="translate(0 184.113) rotate(-19.7617)"
              />
            </clipPath>
          </defs>
        </svg> */}

        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="relative left-[-50px] w-full h-full">
          <svg className="mx-auto my-auto w-[82vw] h-[17vh] md:h-[30vh] lg:h-[25vh] lg:w-[27vw]" viewBox="0 0 1320 697" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M451.247 381.818V600H398.513V381.818H451.247ZM522.087 381.818V600H469.353V381.818H522.087ZM658.126 447.23C657.415 439.418 654.255 433.345 648.644 429.013C643.104 424.609 635.185 422.408 624.887 422.408C618.069 422.408 612.387 423.295 607.842 425.071C603.296 426.847 599.887 429.297 597.614 432.422C595.342 435.476 594.17 438.991 594.099 442.969C593.957 446.236 594.596 449.112 596.016 451.598C597.508 454.084 599.638 456.286 602.408 458.203C605.249 460.05 608.658 461.683 612.636 463.104C616.613 464.524 621.087 465.767 626.059 466.832L644.809 471.094C655.604 473.438 665.121 476.562 673.36 480.469C681.67 484.375 688.63 489.027 694.241 494.425C699.923 499.822 704.219 506.037 707.131 513.068C710.043 520.099 711.535 527.983 711.606 536.719C711.535 550.497 708.055 562.322 701.165 572.195C694.276 582.067 684.369 589.631 671.442 594.886C658.587 600.142 643.069 602.77 624.887 602.77C606.634 602.77 590.725 600.036 577.16 594.567C563.594 589.098 553.048 580.788 545.519 569.638C537.991 558.487 534.12 544.389 533.907 527.344H584.404C584.83 534.375 586.712 540.234 590.05 544.922C593.388 549.609 597.969 553.161 603.793 555.575C609.688 557.99 616.506 559.197 624.248 559.197C631.35 559.197 637.387 558.239 642.359 556.321C647.401 554.403 651.272 551.74 653.971 548.331C656.67 544.922 658.055 541.016 658.126 536.612C658.055 532.493 656.776 528.977 654.29 526.065C651.805 523.082 647.969 520.526 642.785 518.395C637.671 516.193 631.137 514.169 623.183 512.322L600.384 506.996C581.492 502.663 566.613 495.668 555.746 486.009C544.88 476.278 539.482 463.139 539.553 446.591C539.482 433.097 543.104 421.271 550.42 411.115C557.735 400.959 567.856 393.04 580.782 387.358C593.708 381.676 608.445 378.835 624.994 378.835C641.897 378.835 656.563 381.712 668.992 387.464C681.492 393.146 691.187 401.136 698.076 411.435C704.965 421.733 708.481 433.665 708.623 447.23H658.126ZM716.102 424.645V381.818H900.512V424.645H834.354V600H782.366V424.645H716.102ZM954.626 381.818V406.108C954.626 412.855 953.277 419.673 950.578 426.562C947.95 433.381 944.505 439.773 940.244 445.739C935.983 451.705 931.473 456.747 926.714 460.866L904.555 448.722C907.822 443.324 910.734 437.251 913.291 430.504C915.848 423.686 917.126 415.589 917.126 406.214V381.818H954.626ZM968.497 600V562.074L1048.08 492.401C1054.04 487.003 1059.12 482.067 1063.31 477.592C1067.5 473.047 1070.7 468.501 1072.9 463.956C1075.1 459.339 1076.2 454.332 1076.2 448.935C1076.2 442.898 1074.89 437.749 1072.26 433.487C1069.63 429.155 1066.01 425.817 1061.39 423.473C1056.78 421.129 1051.49 419.957 1045.52 419.957C1039.48 419.957 1034.19 421.2 1029.65 423.686C1025.1 426.101 1021.55 429.616 1018.99 434.233C1016.51 438.849 1015.27 444.46 1015.27 451.065H965.301C965.301 436.222 968.639 423.402 975.315 412.607C981.991 401.811 991.366 393.501 1003.44 387.678C1015.58 381.783 1029.68 378.835 1045.73 378.835C1062.28 378.835 1076.66 381.605 1088.88 387.145C1101.1 392.685 1110.54 400.426 1117.22 410.369C1123.97 420.241 1127.34 431.712 1127.34 444.78C1127.34 453.089 1125.67 461.328 1122.33 469.496C1118.99 477.663 1112.99 486.683 1104.33 496.555C1095.73 506.428 1083.52 518.253 1067.68 532.031L1041.58 556.108V557.493H1130V600H968.497ZM1137.45 563.778V522.656L1226.84 381.818H1263.38V437.642H1242.18L1189.87 520.526V522.23H1319.31V563.778H1137.45ZM1242.82 600V551.207L1243.88 533.203V381.818H1293.21V600H1242.82Z" fill="white"/>
<g clip-path="url(#clip0_0_1)">
<path d="M479.712 284.584C474.304 285.484 468.665 286.542 462.867 287.721L477.257 277.721L426.155 281.932L396.888 239.907L401.057 290.949L369.075 313.183C359.278 316.395 349.348 319.802 339.347 323.396C287.755 341.931 240.525 363.027 206.375 382.785C169.677 404.022 153.161 420.614 157.29 432.109C161.42 443.603 184.72 445.892 226.542 438.919C234.212 437.642 242.328 436.067 250.777 434.233L273.251 432.382L293.228 461.065L290.385 426.227L294.63 423.276C317.64 416.839 342.064 409.032 366.907 400.107C418.498 381.572 465.729 360.476 499.879 340.718C536.576 319.481 553.093 302.889 548.964 291.394C544.834 279.9 521.534 277.611 479.712 284.584ZM364.449 393.267C346.475 399.725 329.421 405.362 313.384 410.241L319.112 406.258L284.222 409.133L264.242 380.441L267.088 415.289L250.517 426.806C198.708 438.036 167.07 437.861 164.122 429.655C159.393 416.493 224.698 372.319 341.798 330.249C353.243 326.137 364.3 322.367 374.976 318.904L410.052 316.014L439.318 358.04L435.149 306.998L447.201 298.615C504.045 285.479 539.006 285.206 542.114 293.855C546.842 307.017 481.54 351.2 364.449 393.267Z" fill="#C75959"/>
<path d="M525.93 32.2855L521.199 13.6937C520.437 10.7017 516.191 10.7017 515.429 13.6937L510.698 32.2855C510.431 33.3255 509.631 34.1415 508.597 34.4241L488.016 40.0507C485.034 40.8667 485.12 45.1227 488.128 45.8213L507.082 50.2213C508.154 50.4719 509.007 51.2933 509.285 52.3599L515.429 75.6343C516.207 78.5889 520.404 78.5889 521.183 75.6343L527.327 52.3599C527.61 51.2933 528.458 50.4719 529.53 50.2213L548.484 45.8213C551.492 45.1227 551.577 40.8667 548.596 40.0507L528.015 34.4241C526.996 34.1361 526.196 33.3201 525.93 32.2855Z" fill="#C75959"/>
<path d="M547.204 12.1257L545.311 4.68578C545.007 3.49113 543.306 3.49113 543.002 4.68578L541.108 12.1257C541.002 12.5417 540.682 12.867 540.271 12.979L532.036 15.2297C530.842 15.555 530.879 17.2563 532.079 17.539L539.663 19.2989C540.095 19.4003 540.431 19.7256 540.543 20.1576L543.002 29.4695C543.316 30.6535 544.991 30.6535 545.306 29.4695L547.764 20.1576C547.876 19.731 548.217 19.4003 548.644 19.2989L556.228 17.539C557.433 17.2616 557.465 15.555 556.271 15.2297L548.036 12.979C547.631 12.867 547.311 12.5417 547.204 12.1257Z" fill="#C75959"/>
</g>
<defs>
<clipPath id="clip0_0_1">
<rect width="544.539" height="544.539" fill="white" transform="translate(0 184.113) rotate(-19.7617)"/>
</clipPath>
</defs>
</svg>


          </div>

          <Highlight className="text-black dark:text-white w-[90vw] md:w-[40vw]  ">
          INTERNAL RESEARCH CONFRENCE
          </Highlight>
        </div>
      </motion.h1>
    </HeroHighlight>
  );
}
