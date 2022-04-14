<template>
  <v-app style="height: 100%!important;" elevation="0">
      <h1 class="text-center" v-if="error.statusCode === 404">
        {{ pageNotFound }}
      </h1>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <NuxtLink to="/" style="height: 100%!important;">
        <div class="align-center align-self-center justify-center"
             style="height: 100%;width: 50vw;margin: auto!important;">
          <img class="not-found-img" contain src="/404.svg"/>
          <img src="/record-404.svg" contain style="position: absolute;top: 8%;right: 20%;width: 20%!important;"/>
        </div>
      </NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: 'صفحه مورد نظر یافت نشد.',
      otherError: 'An error occurred'
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}

.not-found-img {
  -webkit-animation: rotateRecord 5s;
  animation: rotateRecord 5s;
  -webkit-transform: rotate(240deg);
  -ms-transform: rotate(240deg);
  transform: rotate(240deg);
  width: 100%;
}

@-webkit-keyframes rotateRecord {
  0% {
    border-radius: 0 0 0 0;
    -webkit-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    border-radius: 0 0 0 0;
    -webkit-transform: rotate(240deg);
    -ms-transform: rotate(240deg);
    transform: rotate(240deg);
  }
}
</style>
