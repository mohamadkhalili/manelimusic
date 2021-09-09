<template>
  <v-app style="background-color: #00000000 !important;">
    <v-row no-gutters class="ma-2 ma-sm-5 ma-md-5 ma-lg-10 ma-xl-10" :style="style">
      <v-col
        class="mt-5"
        v-for="(archive, index) in archives"
        :key="index"
        cols="12"
        xs="12"
        sm="12"
        md="6"
        lg="4"
        xl="4"
      >
        <CardStyle4 :data="archive"/>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import CardStyle4 from "../components/CardStyle4";

export default {
  name: "archive",
    components: {CardStyle4},
  data() {
    return {
      style: 'direction:' + this.$t('direction'),
      archives: this.$t('archives')
    }
  },
}
</script>

<style scoped>

</style>
