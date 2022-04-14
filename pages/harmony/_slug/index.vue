<template>
  <div class="ma-4 pa-6" id="cropper" style="min-height:calc(100vh - 60px) !important;margin: 15px">
    <template v-if="harmony">
      <v-row>
        <v-col
          v-for="(img1,i) in harmony.img1s"
          :key="i"
          class="d-flex child-flex"
          cols="4"
        >
          <a :href="img1">
            <v-img
              :src="img1"
              :lazy-src="img1"
              aspect-ratio="1"
              :alt="harmony.title"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </a>
        </v-col>
      </v-row>
    </template>

    <template v-if="harmony">
      <div class="justify-center" style="margin-top: 20px;margin-bottom: 20px;">
        <p class="text-right justify-center" color="#CDDC39" :style="style_main_title" v-html="harmony.title">
        </p>

        <p class="text-right justify-center" color="#CDDC39" :style="style_main_subtitle" v-html="harmony.text1">
        </p>
      </div>
    </template>

    <template v-if="harmony">
      <v-row>
        <v-col
          v-for="(img2,i) in harmony.img2s"
          :key="i"
          class="d-flex child-flex"
          cols="4"
        >
          <a :href="img2">
            <v-img
              :src="img2"
              :lazy-src="img2"
              aspect-ratio="1"
              :alt="harmony.title"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </a>
        </v-col>
      </v-row>
    </template>

    <template v-if="harmony">
      <div class="justify-center" style="margin-top: 20px;margin-bottom: 20px;">

        <p class="text-right justify-center" color="#CDDC39" :style="style_main_subtitle" v-html="harmony.text2">
        </p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      harmony: null,
    }
  },
  head() {
    return {
      title: this?.harmony?.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this?.harmony?.text1
        }
      ]
    }
  },
  async mounted() {
    this.getHarmony(this.$t('harmonys'), this.$route.params.slug)
  },
  methods: {
    getHarmony(harmonys, slug) {
      if (harmonys) {
        harmonys.forEach((harmony) => {
          if (harmony.name == slug) {
            this.harmony = harmony
          }
        })
      }
    }
  },
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return 100
        case 'sm':
          return 100
        case 'md':
          return 100
        case 'lg':
          return 100
        case 'xl':
          return 100
      }
    },
    style_main_title() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return "text-align: right;color: #020202;font-size: 25px;line-height:1.8;font-family: vazir_o !important;text-align: justify;"
        case 'sm':
          return "text-align: right;color: #020202;font-size: 25px;line-height:1.8;font-family: vazir_o !important;text-align: justify;"
        case 'md':
          return "text-align: right;color: #020202;font-size: 25px;line-height:1.8;font-family: vazir_o !important;text-align: justify;"
        case 'lg':
          return "text-align: right;color: #020202;font-size: 35px;line-height:1.8;font-family: vazir_o !important;text-align: justify;"
        case 'xl':
          return "text-align: right;color: #020202;font-size: 40px;line-height:1.9;font-family: vazir_o !important;text-align: justify;"
      }
    },
    style_main_subtitle() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          return "text-align: right;color: #020202;font-size: 12px;line-height:1.8;font-family: vazir_o !important;text-align: justify;"
        case 'sm':
          return "text-align: right;color: #020202;font-size: 12px;line-height:1.8;font-family: vazir_o !important;text-align: justify;"
        case 'md':
          return "text-align: right;color: #020202;font-size: 12px;line-height:1.8;font-family: vazir_o !important;text-align: justify;"
        case 'lg':
          return "text-align: right;color: #020202;font-size: 17px;line-height:1.8;font-family: vazir_o !important;text-align: justify;"
        case 'xl':
          return "text-align: right;color: #020202;font-size: 20px;line-height:1.9;font-family: vazir_o !important;text-align: justify;"
      }
    },
  }

}
</script>

<style scoped>

</style>
