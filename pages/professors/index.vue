<template>
  <v-row
    style="margin-top: 12px;background-color: #fff;padding-bottom: 10px"
    no-gutters
    justify="center"

  >
    <v-col
      style="padding: 10px"
      v-for="(professor,i) in professors"
      :key="i"
      cols="6"
      sm="3"
    >
      <professor-card :img="professor.img" :style-color="i%4 == 1 ? 'G1' : i%4 == 2 ? 'G2' : i%4 == 3 ? 'G3' : 'G4'"
                      :title="professor.title" :subtitle="professor.subtitle"/>

    </v-col>
  </v-row>
</template>

<script>
import ProfessorCard from "../../components/ProfessorCard";

export default {
  components: {
    ProfessorCard
  },
  name: "professors",
  data() {
    return {
      professors: this.$t('professors')
    }
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
          return 15
      }
    },
  }
}
</script>

<style scoped>

</style>
