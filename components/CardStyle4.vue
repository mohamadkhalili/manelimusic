<template>
  <v-card :href="data.url" class="ma-1" :max-width="width*2+'px'" :height="height*2+'px'"
          :style="'background-color: #fff;direction:' + this.$t('direction')">
    <v-row class="ma-auto justify-center"
           :style="'direction:' + this.$t('direction')+';height: 100%;width: 100%;'" align="center"
           justify="center">
      <v-col
        cols="12" class="justify-center" style="height: 100% !important; display: flex" d-flex child-flex
      >
        <v-img class=" d-block justify-center mt-auto mb-auto" :src="data.url"
               style="margin-right: 5px;margin-left:5px;max-height: 100%"
               :alt="data.title"
        />
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "CardStyle4",
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
