<template>

  <div id="cropper" style="height:calc(100vh - 60px) !important;">
    <v-img id="main_img" src="banerandlogo/banner1.jpg"
           style="width: 100%">
    </v-img>

    <div class="justify-center" style="margin: 20px">
      <p class="text-right justify-center" color="#CDDC39" :style="style_main_title" v-html="$t('main_title')">
      </p>

      <p class="text-right justify-center" color="#CDDC39" :style="style_main_subtitle" v-html="$t('main_subtitle')">
      </p>
    </div>

  </div>

</template>

<script>
export default {
  data() {
    return {}
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


<style>
#cropper * {
  direction: rtl !important;
}

</style>
