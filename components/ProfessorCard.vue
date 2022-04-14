<template>
  <div style="margin-left: auto;margin-right: auto;padding-bottom: 10px; padding-top: 5px;" class="professor_card"><a
    rel="noopener" :href="'/professors/'+title" tabindex="0"></a><span
    :style="'font-size: '+font_size*1.2+'px;'">{{ title }}<br><span
    :style="'font-size: '+font_size+'px;'">{{ subtitle }}</span></span>
    <svg version="1.1" class="IMBG" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
         viewBox="0 0 400 400" xml:space="preserve"> <defs> <linearGradient id="G1"> <stop offset="0%"
                                                                                           stop-color="#cb6c1a"></stop>
      <stop offset="100%" stop-color="#efb860"></stop> </linearGradient>
      <linearGradient id="G2"> <stop offset="0%" stop-color="#2867f4"></stop>
        <stop offset="100%" stop-color="#47d1e9"></stop> </linearGradient>
      <linearGradient id="G3"> <stop offset="0%" stop-color="#7909b5"></stop>
        <stop offset="100%" stop-color="#df15ba"></stop> </linearGradient>
      <linearGradient id="G4"> <stop offset="0%" stop-color="#0b9279"></stop>
        <stop offset="100%" stop-color="#42df9a"></stop> </linearGradient> </defs>
      <clipPath id="CP3"> <path
        d="M54.937,283.471c19.079,24.47,40.865,46.371,64.68,66.245c16.238,13.519,33.558,25.552,52.773,34.609c14.208,6.624,28.957,11.356,44.789,12.573c19.079,1.487,36.941-2.569,53.585-11.897c16.238-9.058,29.228-21.631,40.73-36.097c13.667-17.034,24.492-35.826,33.829-55.429c18.809-39.747,32.881-81.116,42.489-124.107c4.33-19.197,6.901-38.53,7.172-58.674c-0.135-11.491-1.083-23.388-4.195-35.015c-3.248-12.303-8.525-23.524-17.185-32.987c-10.69-11.762-24.221-18.521-39.377-22.172c-16.508-4.056-33.152-4.326-49.931-2.974c-14.479,1.082-28.822,3.38-42.895,6.624c-37.076,8.247-72.935,20.144-107.711,35.15c-22.733,9.599-44.519,21.09-64.41,35.691c-14.749,10.815-28.01,23.118-38.294,38.395c-11.231,16.629-17.185,35.015-16.779,55.159c0.271,14.195,3.518,27.579,8.66,40.693C30.581,249.132,41.947,266.842,54.937,283.471z"></path> </clipPath>
      <image :xlink:href="img"
             :alt="title"
             clip-path="url(#CP3)"></image>
      <path id="PBorder" :style="'fill: url(#'+styleColor+');'"
            d="M0,173.529c0.268-2.674,0.669-5.348,0.937-8.021c2.141-15.909,8.029-30.214,16.994-43.315c10.839-16.043,25.022-29.011,40.544-40.374c20.205-14.706,42.15-26.337,65.032-36.23c35.727-15.508,72.525-27.807,110.527-36.765c14.853-3.476,29.973-6.15,45.228-7.62c4.416-0.401,8.831-0.535,13.381-0.936c0.268,0,0.669-0.134,0.937-0.267c4.951,0,9.902,0,14.719,0c2.81,0.267,5.62,0.401,8.296,0.668c13.515,1.203,26.762,4.011,39.073,10.16c19.402,9.626,31.713,25.267,38.403,45.588c3.345,10.294,4.951,20.989,5.62,31.818c1.204,21.39-1.204,42.513-5.486,63.503c-9.768,48.262-25.424,94.519-46.432,139.171c-9.233,19.786-20.205,38.503-33.586,55.749c-11.106,14.305-23.551,27.005-38.939,36.898c-12.846,8.289-26.762,13.636-41.883,15.642c-2.409,0.267-4.817,0.535-7.092,0.802c-3.479,0-7.092,0-10.571,0c-2.81-0.267-5.486-0.668-8.296-0.936c-12.846-1.604-24.889-5.348-36.664-10.561c-20.205-8.824-38.27-20.856-55.264-34.626c-28.368-23.262-53.925-49.064-76.138-78.209c-12.578-16.711-23.417-34.358-30.91-54.011c-4.148-10.829-6.824-21.925-8.029-33.422c-0.134-1.471-0.268-2.941-0.401-4.412C0,180.348,0,176.872,0,173.529z M392.866,111.898c-0.134-11.364-1.07-23.128-4.148-34.626c-3.211-12.166-8.43-23.262-16.994-32.62c-10.571-11.631-23.952-18.316-38.939-21.925c-16.325-4.011-32.783-4.278-49.376-2.941c-14.318,1.07-28.502,3.342-42.418,6.551c-36.664,8.155-72.124,19.92-106.513,34.759c-22.48,9.358-44.023,20.722-63.694,35.16c-14.585,10.695-27.699,22.861-37.868,37.968c-11.106,16.444-16.994,34.626-16.592,54.545c0.268,14.037,3.479,27.273,8.564,40.241c7.627,19.519,18.867,37.032,31.713,53.61c18.867,24.198,40.411,45.856,63.961,65.508c16.057,13.369,33.185,25.267,52.186,34.225c14.05,6.551,28.635,11.23,44.291,12.433c18.867,1.471,36.53-2.54,52.989-11.765c16.057-8.957,28.903-21.39,40.277-35.695c13.515-16.845,24.22-35.428,33.452-54.813c18.6-39.305,32.516-80.214,42.016-122.727C390.056,151.07,392.598,131.952,392.866,111.898z"></path> </svg>
  </div>
</template>

<script>
export default {
  name: "ProfessorCard",
  data() {
    return {}
  },
  computed: {
    font_size() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 8
        case 'sm':
          return 10
        case 'md':
          return 12
        case 'lg':
          return 13
        case 'xl':
          return 17
      }
    },
  },
  props: ['styleColor', 'img', 'title', 'subtitle']
}
</script>

<style scoped>
.professor_card > svg {
  width: 100%;
}

.professor_card #PBorder {
  fill: url(#G1);
}

.professor_card > span {
  display: none;
  position: absolute;
  z-index: 11;
  text-align: center;
  left: 0;
  right: 0;
  font-size: 16px;
  top: 40%;
  transform: translateY(-50%);
  color: #000;
  transition: all 10s;
  line-height: 30px;
}

.professor_card:hover > span {
  display: initial;
}

.professor_card:hover image {
  opacity: 0;
}

.professor_card {
  font-size: 16px;
  line-height: 32px;
  color: #120e2f;
  padding-bottom: 50px;
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 100%;
}

.MainDiv {
  margin: 0 auto;
  text-align: center;
}

svg:not(:root) {
  overflow: hidden;
}

.professor_card image {
  transition: all 0.3s;
  opacity: 1;
  width: 100%;
  height: 100%;
  background-color: #ffffff !important;
}

.professor_card {
  position: relative;
  color: #fff;
  font-size: 13px;
  overflow: hidden;
  max-height: 400px;
  max-width: 400px;
  padding: 10px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

@media (max-width: 900px) {
  .professor_card {
    max-width: 200px;
  }
}

@media (max-width: 500px) {
  .professor_card {
    max-width: 100px;
  }
}

.professor_card a {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all .3s;
  z-index: 12;
}
</style>
