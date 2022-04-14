<template>
  <div class="pa-2" style="width: 100%;max-width: 100%;padding: 15px;" v-if="professor">
    <div class="" style="max-width: 400px;margin: auto">
      <v-img class="align-center text-center" :src="professor.img" :alt="professor.title"
             style="max-width: 400px;text-align: center;margin: 0;display: block"></v-img>
      <p :style="'text-align: center;font-size: '+font_size*2+'px;'">{{ professor.title }}</p>
      <p :style="'text-align: center;font-size: '+font_size*1.2+'px;'">{{ professor.subtitle }}</p>
    </div>
    <div class="DMasterTitle" style="direction: rtl;
    color: rgb(18, 14, 47);
    position: relative;
    text-align: right;
    padding-right: 25px;
    font-size: 14px;
    font-weight: 600;
    line-height: 30px;
    margin: 30px 0px 10px;"
    >روزهای حضور
    </div>
    <p :style="'font-weight: 500;font-size: '+font_size*1.2+'px;'">{{ professor.time }}</p>
    <div v-if="professor.details" class="DMasterTitle" style="direction: rtl;
    color: rgb(18, 14, 47);
    position: relative;
    text-align: right;
    padding-right: 25px;
    font-size: 14px;
    font-weight: 600;
    line-height: 30px;
    margin: 30px 0px 10px;"
    >پیشینه
    </div>
    <p :style="'font-weight: 500;font-size: '+font_size*1.2+'px;'" v-html="professor.details"></p>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      slug: this.$route.params.slug,
      professors: this.$t('professors'),
      professor: null
    }
  },
  head() {
    return {
      title: this?.professor?.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this?.professor?.subtitle
        }
      ]
    }
  },
  mounted() {
    this.professors.forEach(professor => {
      if (professor.title == this.slug) {
        this.professor = professor
      }
    })
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
.DMasterTitle::before {
  position: absolute;
  content: "";
  width: 16px;
  height: 16px;
  right: 0px;
  top: 7px;
  line-height: 30px;
  background: linear-gradient(90deg, rgb(50, 107, 246), rgb(78, 205, 237));
  border-radius: 50%;
}
</style>
