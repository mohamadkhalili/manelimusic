<template>
  <v-list>
    <template v-for="(my_question, i) in my_questions">
      <v-list-item two-line>
        <v-list-item-content>
          <p :style="'font-size: '+font_size*1.4+'px !important;'">{{ my_question.question }}</p>
          <p :style="'font-size: '+font_size*1.2+'px !important;'">{{ my_question.answer }}</p>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
  name: "questions",
  data() {
    return {
      my_questions: this.$t('questions')
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
