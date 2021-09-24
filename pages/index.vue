<template>

  <div id="cropper" style="min-height:calc(100vh - 60px) !important;z-index: 3">
    <show-message-counter :text-list="news"/>
    <v-img id="main_img" src="banerandlogo/banner.png"
           style="width: 100%;z-index: 3">
    </v-img>

    <p class="ma-2" :style="style_main_subtitle+'margin-right: 25px'">
      <br/>
      مرکز تخصصی آموزش سازهای ایرانی و کلاسیک
      <br/>
      تار، سه تار، عود، سنتور، تنبور، دوتار، دف، تنبک، نی و ...
      <br/>
      گیتار، پیانو، ویلن، هارمونیکا، موسیقی کودک ( ارف)، سلفژ و ...
      <br/>
    </p>

    <v-slide-group
      class="pa-4"
      show-arrows
      style="margin-top: 15px"
    >
      <v-slide-item
        v-for="(professor, i) in professors"
        :key="i"
        style="margin: 20px"
      >
        <professor-card :img="professor.img" :style-color="i%4 == 1 ? 'G1' : i%4 == 2 ? 'G2' : i%4 == 3 ? 'G3' : 'G4'"
                        :title="professor.title" :subtitle="professor.subtitle"/>
      </v-slide-item>
    </v-slide-group>

    <div class="justify-center" style="margin: 20px">

      <p class="text-right justify-center" color="#CDDC39" :style="style_main_title" v-html="$t('main_title')">
      </p>
      <v-img src="banerandlogo/main_b.jpg"
             style="max-width: 250px;z-index: 3">
      </v-img>


      <p class="text-right justify-center" color="#CDDC39" :style="style_main_subtitle" v-html="$t('main_subtitle')">
      </p>
    </div>

  </div>

</template>

<script>


import ShowMessageCounter from "../components/ShowMessageCounter";

export default {
  components: {ShowMessageCounter},
  data() {
    return {
      model_slid: null,
      professors: this.$t('professors'),
      news: this.$t('news')
    }
  },
  mounted() {

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
