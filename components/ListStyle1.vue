<template>
  <v-card color="#fff" :href="work.url" class="ma-5">
    <v-row>
      <v-col
        cols="12" class="pa-2"
      >
        <v-card-title class="black--text" :style="'margin: 5px;font-size: '+font+'px'">{{work.text}}</v-card-title>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "ListStyle1",
  props: {
    work: Object
  },

  computed: {
    font() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 10
        case 'sm':
          return 14
        case 'md':
          return 14
        case 'lg':
          return 20
        case 'xl':
          return 20
      }
    },
  }
}
</script>

<style scoped>

</style>
