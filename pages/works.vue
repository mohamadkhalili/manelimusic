<template class="mt-5">
  <v-app style="background-color: #00000000 !important;">
    <v-row no-gutters class="ma-2 ma-sm-5 ma-md-5 ma-lg-10 ma-xl-10" :style="style">
      <v-col
        class="mt-5"
        v-for="(Work, index) in Works"
        :key="index"
        cols="12"
        xs="12"
        sm="12"
        md="6"
        lg="4"
        xl="4"
      >
        <card-style1 :data="Work"/>
      </v-col>
    </v-row>
  </v-app>
</template>

<script>
import WorkCard from "../components/CardStyle1";

export default {
  name: "works",
  components: {WorkCard},
  data() {
    return {
      style: 'direction:' + this.$t('direction'),
      Works: [
        {
          title: this.$t('Works.p1.title'),
          title2: this.$t('Works.p1.title2'),
          subtitle: this.$t('Works.p1.subtitle'),
          text: this.$t('Works.p1.text'),
          img: this.$t('Works.p1.img'),
          url: this.$t('Works.p1.url')
        },
        {
          title: this.$t('Works.p2.title'),
          title2: this.$t('Works.p2.title2'),
          subtitle: this.$t('Works.p2.subtitle'),
          text: this.$t('Works.p2.text'),
          img: this.$t('Works.p2.img'),
          url: this.$t('Works.p2.url')
        },
        {
          title: this.$t('Works.p3.title'),
          title2: this.$t('Works.p3.title2'),
          subtitle: this.$t('Works.p3.subtitle'),
          text: this.$t('Works.p3.text'),
          img: this.$t('Works.p3.img'),
          url: this.$t('Works.p3.url')
        },
        {
          title: this.$t('Works.p4.title'),
          title2: this.$t('Works.p4.title2'),
          subtitle: this.$t('Works.p4.subtitle'),
          text: this.$t('Works.p4.text'),
          img: this.$t('Works.p4.img'),
          url: this.$t('Works.p4.url')
        },
        {
          title: this.$t('Works.p5.title'),
          title2: this.$t('Works.p5.title2'),
          subtitle: this.$t('Works.p5.subtitle'),
          text: this.$t('Works.p5.text'),
          img: this.$t('Works.p5.img'),
          url: this.$t('Works.p5.url')
        },
        {
          title: this.$t('Works.p6.title'),
          title2: this.$t('Works.p6.title2'),
          subtitle: this.$t('Works.p6.subtitle'),
          text: this.$t('Works.p6.text'),
          img: this.$t('Works.p6.img'),
          url: this.$t('Works.p6.url')
        },
      ]
    }
  },
}
</script>

<style scoped>

</style>
