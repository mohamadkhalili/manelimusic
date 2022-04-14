<template>
  <v-app style="background-color: #00000000 !important;">
    <v-row no-gutters class="ma-2 ma-sm-5 ma-md-5 ma-lg-10 ma-xl-10">
      <v-col
        class="mt-5"
        v-for="(Sheet, index) in Sheets"
        :key="index"
        cols="12"
        xs="12"
        sm="12"
        md="12"
        lg="12"
        xl="12"
      >
        <list-style1 :work="Sheet"/>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import ListStyle1 from "../components/ListStyle1";
export default {
  name: "sheets",
  components: {ListStyle1},
  data(){
    return {
      Sheets: [
        {
          text: this.$t('sheets.p1.text'),
          url: this.$t('sheets.p1.url'),
        },
        {
          text: this.$t('sheets.p2.text'),
          url: this.$t('sheets.p2.url'),
        },
        {
          text: this.$t('sheets.p3.text'),
          url: this.$t('sheets.p3.url'),
        },
        {
          text: this.$t('sheets.p4.text'),
          url: this.$t('sheets.p4.url'),
        },
        {
          text: this.$t('sheets.p5.text'),
          url: this.$t('sheets.p5.url'),
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
