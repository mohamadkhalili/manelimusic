<template>
  <v-card color="#fff" :href="work.url" class="ma-5">
    <v-row>
      <v-col
        cols="12" class="pa-2"
      >
        <v-card-title class="black--text" style="margin: 5px;">{{work.text}}</v-card-title>
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
  }
}
</script>

<style scoped>

</style>
