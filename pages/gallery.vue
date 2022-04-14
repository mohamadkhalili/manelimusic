<template>
  <v-app style="background-color: #00000000 !important;">
    <v-row no-gutters class="ma-2 ma-sm-5 ma-md-5 ma-lg-10 ma-xl-10" :style="style">
      <v-col
        class="mt-5"
        v-for="(gallery, index) in gallerys"
        :key="index"
        cols="12"
        xs="12"
        sm="12"
        md="6"
        lg="6"
        xl="6"
      >
        <card-style2 :data="gallery"/>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>

import CardStyle2 from "../components/CardStyle2";

export default {
  name: "gallery",
  components: {CardStyle2},
  data() {
    return {
      style: 'direction:' + this.$t('direction'),
      gallerys: this.$t('gallerys')
    }
  },
}
</script>

<style scoped>

</style>
