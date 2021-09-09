<template>
  <v-container :style="'font-family: '+ $t('font')+' !important'">
    <v-row :style="'direction:' + this.$t('direction')">
      <v-col cols="8">
        <h2 class="ma-2" :style="style_title">{{ $t('Biography.p_public.title') }}</h2>
        <h3 class="ma-4" :style="style_subtitle">{{ $t('Biography.p_public.subtitle') }}</h3>
      </v-col>
      <v-col cols="4" style="max-height: 41vh">
        <a href="/bio.jpg">
          <v-img src="/bio.jpg" style="max-height: 37vh" contain/>
        </a>
      </v-col>
    </v-row>

    <p class="ma-4" :style="style_p">{{ $t('Biography.p_public.p1') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.p_public.p2') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.p_public.p3') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.p_public.p4') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.p_public.p5') }}</p>
    <h3 class="ma-4" :style="style_subtitle">{{ $t('Biography.music_live.subtitle') }}</h3>
    <p class="ma-4" :style="style_p">{{ $t('Biography.music_live.p1') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.music_live.p2') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.music_live.p3') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.music_live.p4') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.music_live.p5') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.music_live.p6') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.music_live.p7') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.music_live.p8') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.music_live.p9') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.music_live.p10') }}</p>
    <h3 class="ma-4" :style="style_subtitle">{{ $t('Biography.c_music.subtitle') }}</h3>
    <p class="ma-4" :style="style_p">{{ $t('Biography.c_music.p1') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.c_music.p2') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.c_music.p3') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.c_music.p4') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.c_music.p5') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.c_music.p6') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.c_music.p7') }}</p>
    <h3 class="ma-4" :style="style_subtitle">{{ $t('Biography.tech_music.subtitle') }}</h3>
    <p class="ma-4" :style="style_p">{{ $t('Biography.tech_music.p1') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.tech_music.p2') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.tech_music.p3') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.tech_music.p4') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.tech_music.p5') }}</p>
    <h3 class="ma-4" :style="style_subtitle">{{ $t('Biography.edit_music.subtitle') }}</h3>
    <p class="ma-4" :style="style_p">{{ $t('Biography.edit_music.p1') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.edit_music.p2') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.edit_music.p3') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.edit_music.p4') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.edit_music.p5') }}</p>
    <h3 class="ma-4" :style="style_subtitle">{{ $t('Biography.actives.subtitle') }}</h3>
    <p class="ma-4" :style="style_p">{{ $t('Biography.actives.p1') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.actives.p2') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.actives.p3') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.actives.p4') }}</p>
    <p class="ma-4" :style="style_p">{{ $t('Biography.actives.p5') }}</p>
  </v-container>
</template>

<script>
export default {
  name: "bio",
  data() {
    return {
      style_title: "direction:" + this.$t('direction') + ";line-height: 3; font-family: " + this.$t('font') + " !important",
      style_subtitle: "direction:" + this.$t('direction') + ";line-height: 2.3; font-family: " + this.$t('font') + " !important",
      style_p: "direction:" + this.$t('direction') + ";line-height: 2; font-family: " + this.$t('font') + " !important"
    }
  }
}
</script>

<style>

</style>
