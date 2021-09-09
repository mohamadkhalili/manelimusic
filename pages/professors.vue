<template>
  <v-expansion-panels>
    <v-expansion-panel
      v-for="(professor,i) in professors"
      :key="i"
    >
      <v-expansion-panel-header>
        <v-row>
          <v-col cols="2">
            <v-img contain height="100px" width="100px" :src="professor.img"></v-img>
          </v-col>
          <v-col style="align-items: center; display: flex" cols="3">
            <p :style="'font-size: '+font_size+'px !important ;text-align: initial;'">{{ professor.title }}</p>
          </v-col>
          <v-col style="align-items: center; display: flex" cols="3">
            <p :style="'font-size: '+font_size+'px !important ;text-align: initial;'">{{ professor.subtitle }}</p>
          </v-col>
          <v-col style="align-items: center; display: flex" cols="3">
            <p :style="'font-size: '+font_size+'px !important ;text-align: initial;'">{{ professor.time }}</p>
          </v-col>
        </v-row>

      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <v-row>
          <v-col style="align-items: center; display: flex" cols="12">
            <v-img contain height="300px" width="100px" :src="professor.img"></v-img>
          </v-col>
        </v-row>
        <p :style="'font-size: '+font_size*1.2+'px !important ;text-align: initial;text-align: justify;'" v-html="professor.details ? professor.details : ''"></p>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
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
