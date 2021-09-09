<template>
  <v-card :href="'/harmony/'+data.name" class="ma-1" :max-width="width*2+'px'" :height="height/2+'px'"
          :style="'background-color: #fff;direction:' + this.$t('direction')">
    <v-row class="mr-2 ml-2 mt-auto mb-auto justify-center"
           :style="'direction:' + this.$t('direction')+';height: 100%;width: 100%;'" align="center"
           justify="center">
      <v-col
        cols="4" class="pa-2 justify-center mt-auto mb-auto" style="height: 100% !important; display: flex" d-flex
        child-flex
      >
          <v-img class=" d-block justify-center mt-auto mb-auto" :src="data.img1s[0]"
                 style="margin-right: 5px;margin-left:5px;max-height: 100%"
                 :alt="data.name"
          />

      </v-col>
      <v-col
        cols="8"
        class="d-block justify-center mt-auto mb-auto"
      >
        <h4 class="mb-2 black--text">{{ data.title }}</h4>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CardStyle3",
  data() {
    return {
      work: null
    }
  },
  props: {
    data: Object
  },
  watch: {
    data: {
      immediate: true,
      deep: true,
      handler(newV) {
        this.work = newV
      }
    },
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 250
        case 'sm':
          return 200
        case 'md':
          return 200
        case 'lg':
          return 300
        case 'xl':
          return 300
      }
    },
    width() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 300
        case 'sm':
          return 200
        case 'md':
          return 200
        case 'lg':
          return 300
        case 'xl':
          return 300
      }
    },
  }
}
</script>

<style scoped>

</style>
