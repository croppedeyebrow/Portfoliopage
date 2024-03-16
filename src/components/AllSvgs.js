//svg파일을 react component props로 변환

//{...props}는 JavaScript의 스프레드 연산자를 사용한 구문입니다. 이 구문은 객체의 모든 속성을 새로운 객체로 복사하는 데 사용됩니다.

//React에서 이 구문은 부모 컴포넌트로부터 받은 props를 자식 컴포넌트에게 그대로 전달하는 데 주로 사용됩니다. 이렇게 하면 자식 컴포넌트는 부모 컴포넌트로부터 받은 모든 props를 사용

export const PowerBtn = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="power-off"
      className="prefix__svg-inline--fa prefix__fa-power-off prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z"
      />
    </svg>
  );
};

export const Github = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fab"
      data-icon="github"
      className="prefix__svg-inline--fa prefix__fa-github prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 520 522"
      {...props}
    >
      <path
        fill={props.fill}
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      />
    </svg>
  );
};

export const Blog = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fab"
      data-icon="Tistory"
      className="prefix__svg-inline--fa prefix__fa-facebook prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 540 540"
      {...props}
    >
      <path
        fill={props.fill}
        d="M229.5,0C102.75,0,0,102.75,0,229.5S102.75,459,229.5,459,459,356.25,459,229.5,356.25,0,229.5,0ZM130.21,191.45a39.57,39.57,0,1,1,39.56-39.57A39.58,39.58,0,0,1,130.21,191.45ZM229.5,390a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,390Zm0-99.29a39.56,39.56,0,1,1,39.56-39.56A39.56,39.56,0,0,1,229.5,290.74Zm0-99.29a39.57,39.57,0,1,1,39.56-39.57A39.57,39.57,0,0,1,229.5,191.45Zm99.29,0a39.57,39.57,0,1,1,39.57-39.57A39.57,39.57,0,0,1,328.79,191.45Z"
      />
    </svg>
  );
};

export const Notion = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fab"
      data-icon="Notion"
      className="prefix__svg-inline--fa prefix__fa-Notion prefix__fa-w-18"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 90 90"
      {...props}
    >
      <path
        fill={props.fill}
        d="M 51.517578 5.6289062 C 50.700219 5.6264788 49.775238 5.6849839 48.666016 5.7792969 L 48.654297 5.7792969 L 12.824219 8.4082031 A 1.0001 1.0001 0 0 0 12.8125 8.4082031 C 11.16263 8.5503055 9.8728197 9.2128209 9.078125 10.226562 C 8.2834303 11.240305 8 12.509018 8 13.783203 L 8 52.830078 C 8 54.822771 8.7647473 56.601312 10.337891 58.689453 A 1.0001 1.0001 0 0 0 10.345703 58.699219 L 18.771484 69.587891 A 1.0001 1.0001 0 0 0 18.777344 69.595703 C 19.539187 70.560118 20.37526 71.252223 21.390625 71.621094 C 22.40599 71.989965 23.518416 72.041646 24.894531 71.976562 A 1.0001 1.0001 0 0 0 24.90625 71.976562 L 66.53125 69.472656 A 1.0001 1.0001 0 0 0 66.542969 69.470703 C 68.449751 69.335858 69.88568 68.798816 70.804688 67.759766 C 71.723664 66.720741 72 65.342178 72 63.84375 L 72 19.916016 C 72 19.025609 71.73565 18.199195 71.205078 17.587891 C 70.674506 16.976586 70.008281 16.538641 69.072266 15.855469 A 1.0001 1.0001 0 0 0 69.054688 15.84375 L 57.626953 7.84375 L 57.613281 7.8339844 C 56.201054 6.8134326 55.076899 6.1531937 53.722656 5.8476562 C 53.044676 5.6946937 52.334937 5.6313337 51.517578 5.6289062 z M 51.494141 7.6308594 C 52.212153 7.6326849 52.783755 7.6861449 53.283203 7.7988281 C 54.2821 8.0241942 55.106526 8.4887242 56.453125 9.4628906 A 1.0001 1.0001 0 0 0 56.466797 9.4726562 L 67.908203 17.482422 C 68.846052 18.167025 69.43911 18.605502 69.693359 18.898438 C 69.949789 19.193878 70 19.305422 70 19.916016 L 70 63.84375 C 70 65.098322 69.771384 65.910097 69.306641 66.435547 C 68.841897 66.960997 68.016561 67.362408 66.402344 67.476562 L 24.787109 69.980469 L 24.798828 69.978516 C 23.531943 70.038436 22.694603 69.965616 22.074219 69.740234 C 21.453834 69.514855 20.969813 69.143054 20.347656 68.355469 L 11.935547 57.486328 C 10.49069 55.568469 10 54.345386 10 52.830078 L 10 13.783203 C 10 12.807388 10.220788 12.011445 10.652344 11.460938 C 11.083022 10.911547 11.742267 10.51022 12.978516 10.402344 C 12.981016 10.402124 12.981775 10.400691 12.984375 10.400391 L 48.8125 7.7734375 A 1.0001 1.0001 0 0 0 48.824219 7.7714844 C 49.911706 7.6788429 50.776129 7.6290338 51.494141 7.6308594 z M 49.601562 10.039062 A 1.0001 1.0001 0 0 0 49.53125 10.042969 L 15.169922 12.662109 A 1.0001 1.0001 0 0 0 15.142578 12.666016 A 1.0001 1.0001 0 0 0 14.853516 12.736328 C 14.192794 12.845003 13.603746 13.062347 13.242188 13.628906 C 13.03377 13.955492 12.956546 14.387793 13.029297 14.755859 C 13.062537 14.924052 13.178096 15.028226 13.251953 15.167969 A 1.0001 1.0001 0 0 0 13.515625 15.658203 A 1.0001 1.0001 0 0 0 13.5625 15.705078 A 1.0001 1.0001 0 0 0 13.664062 15.791016 A 1.0001 1.0001 0 0 0 13.667969 15.792969 L 18.470703 19.785156 A 1.000455 1.000455 0 0 0 18.484375 19.796875 L 18.492188 19.802734 C 18.498914 19.808443 18.505003 19.81268 18.511719 19.818359 A 1.0001 1.0001 0 0 0 18.576172 19.869141 C 19.595717 20.721179 20.497526 21.239694 21.572266 21.414062 C 22.650711 21.589035 23.82293 21.47058 25.613281 21.34375 A 1.0001 1.0001 0 0 0 25.710938 21.341797 A 1.0001 1.0001 0 0 0 25.714844 21.341797 L 25.732422 21.339844 L 61.203125 19.113281 A 1.0001 1.0001 0 0 0 61.148438 17.115234 A 1.0001 1.0001 0 0 0 61.078125 17.117188 L 25.595703 19.345703 L 25.589844 19.345703 A 1.0001 1.0001 0 0 0 25.583984 19.345703 C 23.694675 19.477679 22.603193 19.554746 21.892578 19.439453 C 21.181963 19.32416 20.724696 19.074885 19.779297 18.271484 A 1.000455 1.000455 0 0 0 19.771484 18.265625 L 15.419922 14.648438 L 49.683594 12.039062 A 1.0008408 1.0008408 0 0 0 49.601562 10.039062 z M 54.027344 10.882812 C 53.642031 10.834531 53.241563 11.016641 53.039062 11.369141 C 52.759062 11.849141 52.920391 12.460234 53.400391 12.740234 C 53.560391 12.830234 53.730391 12.880859 53.900391 12.880859 C 54.240391 12.880859 54.579766 12.700859 54.759766 12.380859 C 55.039766 11.900859 54.880391 11.289766 54.400391 11.009766 C 54.282891 10.939766 54.155781 10.898906 54.027344 10.882812 z M 57.332031 13.53125 C 57.079531 13.5675 56.839922 13.699922 56.669922 13.919922 C 56.339922 14.359922 56.429141 14.990312 56.869141 15.320312 C 57.049141 15.450312 57.260703 15.519531 57.470703 15.519531 C 57.770703 15.519531 58.069531 15.379141 58.269531 15.119141 C 58.599531 14.679141 58.520313 14.060703 58.070312 13.720703 C 57.850313 13.555703 57.584531 13.495 57.332031 13.53125 z M 64.039062 21.011719 A 1.0001 1.0001 0 0 0 63.96875 21.013672 L 23.914062 23.347656 A 1.0001 1.0001 0 0 0 23.890625 23.347656 C 22.995671 23.422086 22.158002 23.739894 21.640625 24.410156 C 21.123249 25.080372 21 25.901124 21 26.802734 L 21 63.40625 C 21 64.556256 21.33015 65.615332 22.148438 66.263672 C 22.966725 66.912012 24.030062 67.053276 25.257812 66.986328 A 1.0001 1.0001 0 0 0 25.261719 66.986328 L 63.521484 64.777344 C 63.524186 64.77737 63.526595 64.779297 63.529297 64.779297 C 63.550364 64.779297 63.570043 64.774976 63.589844 64.773438 A 1.0001 1.0001 0 0 0 63.712891 64.761719 C 63.718876 64.76085 63.724344 64.760641 63.730469 64.759766 C 63.734195 64.758524 63.738389 64.757101 63.742188 64.755859 A 1.0001 1.0001 0 0 0 63.474609 62.777344 L 25.150391 64.990234 C 24.159149 65.044286 23.619587 64.876723 23.390625 64.695312 C 23.161663 64.513903 23 64.222244 23 63.40625 L 23 26.802734 C 23 26.107344 23.123284 25.761551 23.222656 25.632812 C 23.321826 25.504344 23.473671 25.390537 24.054688 25.341797 L 24.056641 25.341797 L 64.085938 23.009766 A 1.0001 1.0001 0 0 0 64.722656 22.724609 C 64.724712 22.722592 64.728433 22.722738 64.730469 22.720703 C 64.740629 22.710543 64.746441 22.699614 64.755859 22.689453 A 1.0001 1.0001 0 0 0 64.802734 22.636719 C 64.821216 22.614687 64.841749 22.592345 64.859375 22.570312 C 64.871505 22.546052 64.883067 22.522308 64.896484 22.498047 A 1.0001 1.0001 0 0 0 64.982422 22.292969 C 64.991141 22.265607 65.005205 22.238299 65.009766 22.210938 C 65.019766 22.140937 65.029297 22.079766 65.029297 22.009766 C 65.029297 21.994962 65.020239 21.981586 65.019531 21.966797 A 1.0001 1.0001 0 0 0 64.955078 21.652344 C 64.950241 21.640281 64.946715 21.629053 64.941406 21.617188 A 1.0001 1.0001 0 0 0 64.039062 21.011719 z M 66 23.830078 C 65.45 23.830078 65 24.280078 65 24.830078 C 65 25.380078 65.45 25.830078 66 25.830078 C 66.55 25.830078 67 25.380078 67 24.830078 C 67 24.280078 66.55 23.830078 66 23.830078 z M 66 27.869141 C 65.45 27.869141 65 28.319141 65 28.869141 C 65 29.419141 65.45 29.869141 66 29.869141 C 66.55 29.869141 67 29.419141 67 28.869141 C 67 28.319141 66.55 27.869141 66 27.869141 z M 60.777344 28 L 52.748047 28.572266 C 50.865047 28.796266 49.880859 29.714422 49.880859 30.857422 L 53.320312 31.429688 L 53.320312 48.572266 L 40.130859 29.142578 L 31.183594 29.929688 C 29.418594 30.148687 28.802688 31.667156 29.054688 32.785156 L 32.099609 33.142578 L 32.099609 57.142578 L 30.953125 57.714844 C 28.658125 58.286844 29.232422 59.429 29.232422 60 L 38.408203 59.429688 C 41.276203 58.857687 41.277344 57.142578 41.277344 57.142578 L 36.689453 56 L 36.689453 37.714844 L 49.230469 57.109375 C 50.733469 58.970375 51.314312 60 53.320312 60 C 55.041313 60 56.762203 59.428156 57.908203 58.285156 L 57.908203 30.857422 L 59.507812 30.550781 C 60.777813 30.285781 61.351344 29.143 60.777344 28 z M 66 31.910156 C 65.45 31.910156 65 32.360156 65 32.910156 C 65 33.460156 65.45 33.910156 66 33.910156 C 66.55 33.910156 67 33.460156 67 32.910156 C 67 32.360156 66.55 31.910156 66 31.910156 z M 66 35.949219 C 65.45 35.949219 65 36.399219 65 36.949219 C 65 37.499219 65.45 37.949219 66 37.949219 C 66.55 37.949219 67 37.499219 67 36.949219 C 67 36.399219 66.55 35.949219 66 35.949219 z M 66 39.990234 C 65.45 39.990234 65 40.440234 65 40.990234 C 65 41.540234 65.45 41.990234 66 41.990234 C 66.55 41.990234 67 41.540234 67 40.990234 C 67 40.440234 66.55 39.990234 66 39.990234 z M 66 44.029297 C 65.45 44.029297 65 44.479297 65 45.029297 C 65 45.579297 65.45 46.029297 66 46.029297 C 66.55 46.029297 67 45.579297 67 45.029297 C 67 44.479297 66.55 44.029297 66 44.029297 z M 66 48.070312 C 65.45 48.070312 65 48.520313 65 49.070312 C 65 49.630313 65.45 50.070312 66 50.070312 C 66.55 50.070312 67 49.630313 67 49.070312 C 67 48.520313 66.55 48.070312 66 48.070312 z M 66 52.109375 C 65.45 52.109375 65 52.559375 65 53.109375 C 65 53.659375 65.45 54.109375 66 54.109375 C 66.55 54.109375 67 53.659375 67 53.109375 C 67 52.559375 66.55 52.109375 66 52.109375 z M 66 56.150391 C 65.45 56.150391 65 56.600391 65 57.150391 C 65 57.710391 65.45 58.150391 66 58.150391 C 66.55 58.150391 67 57.710391 67 57.150391 C 67 56.600391 66.55 56.150391 66 56.150391 z M 66.029297 60.199219 C 65.479297 60.169219 65.020234 60.600391 64.990234 61.150391 C 64.960234 61.700391 65.389453 62.169453 65.939453 62.189453 L 65.990234 62.189453 C 66.520234 62.189453 66.960234 61.780234 66.990234 61.240234 C 67.010234 60.690234 66.589297 60.219219 66.029297 60.199219 z"
      />
    </svg>
  );
};

export const Instagram = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fab"
      data-icon="Instagram"
      className="prefix__svg-inline--fa prefix__fa-Instagram prefix__fa-w-18"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 58 58"
      {...props}
    >
      <path
        fill={props.fill}
        d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"
      />
    </svg>
  );
};

export const YinYang = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="yin-yang"
      className="prefix__svg-inline--fa prefix__fa-yin-yang prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"
      />
    </svg>
  );
};

export const Anchor = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="anchor"
      className="prefix__svg-inline--fa prefix__fa-anchor prefix__fa-w-18"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M12.971 352h32.394C67.172 454.735 181.944 512 288 512c106.229 0 220.853-57.38 242.635-160h32.394c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0l-67.029 67.029c-7.56 7.56-2.206 20.485 8.485 20.485h35.146c-20.29 54.317-84.963 86.588-144.117 94.015V256h52c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12h-52v-5.47c37.281-13.178 63.995-48.725 64-90.518C384.005 43.772 341.605.738 289.37.01 235.723-.739 192 42.525 192 96c0 41.798 26.716 77.35 64 90.53V192h-52c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h52v190.015c-58.936-7.399-123.82-39.679-144.117-94.015h35.146c10.691 0 16.045-12.926 8.485-20.485l-67.029-67.029c-4.686-4.686-12.284-4.686-16.971 0L4.485 331.515C-3.074 339.074 2.28 352 12.971 352zM288 64c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32z"
      />
    </svg>
  );
};

export const Link = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="link"
      className="prefix__svg-inline--fa prefix__fa-link prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 01-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0120.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0020.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 00-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"
      />
    </svg>
  );
};

export const Design = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="palette"
      className="prefix__svg-inline--fa prefix__fa-palette prefix__fa-w-16"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z"
      />
    </svg>
  );
};

export const Develope = (props) => {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fas"
      data-icon="laptop-code"
      className="prefix__svg-inline--fa prefix__fa-laptop-code prefix__fa-w-20"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 512"
      {...props}
    >
      <path
        fill={props.fill}
        d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z"
      />
    </svg>
  );
};

<svg
  xmlns="http://www.w3.org/2000/svg"
  x="0px"
  y="0px"
  width="500"
  height="500"
  viewBox="0 0 50 50"
>
  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
</svg>;
