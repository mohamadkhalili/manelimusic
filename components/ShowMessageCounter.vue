<template>
  <div class="main_message" style="width: 100vw;overflow: hidden">
    <div id="message_text"
         :style="'font-size: 16px;width: 100%;white-space: nowrap;position: relative;right: '+right+'px;'">
      <span id="my_news">
      برای ثبت نام یا مشاوره ( رایگان) با شماره تلفن های آموزشگاه تماس حاصل فرمایید. کلاس های آموزشی آموزشگاه موسیقی مانلی، همه روزه به غیر از روزهای تعطیل از ساعت ۱۳ برگزار می‌شود. برای آگاهی از شرایط کلاس های غیر حضوری ( آنلاین)، با شماره‌های تماس آموزشگاه موسیقی مانلی تماس حاصل فرمایید.
    </span>
    </div>
  </div>

</template>

<script>
export default {
  name: "ShowMessageCounter",
  data() {
    return {
      message: {title: null, id: null},
      right: 0,
      main_width: 0,
      news_width: 0
    }
  },
  mounted() {
    this.right = document.getElementById('message_text').offsetWidth
    setInterval(() => {
      this.main_width = document.getElementById('message_text').offsetWidth
      this.news_width = document.getElementById('my_news').offsetWidth
      if ((this.right * -1) > this.news_width) {
        this.right = this.main_width
      } else {
        this.right--
      }
    }, 10)
  },
  methods: {},
  props: ['textList']
}
</script>

<style scoped>

</style>
