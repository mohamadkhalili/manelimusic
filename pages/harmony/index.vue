<template>
  <v-app style="background-color: #00000000 !important;">
    <v-row no-gutters class="ma-2 ma-sm-5 ma-md-5 ma-lg-10 ma-xl-10" :style="style">
      <v-col
        class="mt-5"
        v-for="(harmony, index) in harmonys"
        :key="index"
        cols="12"
        xs="12"
        sm="12"
        md="6"
        lg="4"
        xl="4"
      >
        <card-style3 :data="harmony"/>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>


import CardStyle3 from "../../components/CardStyle3";

export default {
  components: {CardStyle3},
  data() {
    return {
      style: 'direction:' + this.$t('direction'),
      harmonys: this.$t('harmonys')
    }
  },
}
</script>

<style scoped>

</style>
