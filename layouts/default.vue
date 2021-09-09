<template>
  <v-card
    class="mx-auto overflow-hidden"
    width="100%"
  >
    <v-app-bar
      :color="color_p"
      prominent
      height="60px"
      :style="'direction: ' + $t('direction')"
    >
      <v-app-bar-nav-icon :color="color_s" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn href="https://www.instagram.com/manelimusic/?hl=en" icon>
        <v-icon :color="color_s">mdi-instagram</v-icon>
      </v-btn>

      <v-btn href="http://t.me/manelimusicins" icon>
        <v-icon :color="color_s">mdi-send mdi-rotate-315</v-icon>
      </v-btn>

      <v-btn href="" icon>
        <v-icon :color="color_s">mdi-youtube</v-icon>
      </v-btn>

      <v-btn href="" icon>
        <v-icon :color="color_s">mdi-email</v-icon>
      </v-btn>

      <v-btn href="" icon>
        <v-img :color="color_s" src="/aparat.svg" height="25px" width="25px" contain></v-img>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      class="deep-purple accent-4"
      :color="color_p"
      app
      fixed
      style="z-index: 100 !important;"
      temporary
      :right="this.$t('direction')=='rtl' ? true : false"
      height="100vh"
    >
      <v-list
        nav
        dense
      >

        <v-list-item
          v-model="group"
          v-for="(item,index) in items"
          :key="item.title"
          :to="item.childs ? '' : item.url"
        >
          <template v-if="item.childs">
            <v-list-group
              style="width: 100%"
              no-action
              sub-group
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title :style="'text-align: ' + ($t('direction')=='rtl' ? 'right' : 'left')"
                                     :color="color_s">
                    {{
                      item.title
                    }}
                  </v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="(child, i) in childs"
                :key="i"
                :to="child.url"
                link
              >
                <v-list-item-title :style="'text-align: ' + ($t('direction')=='rtl' ? 'right' : 'left')"
                                   :color="color_s">
                  {{
                    child.title
                  }}
                </v-list-item-title>

              </v-list-item>
            </v-list-group>
          </template>
          <template v-else>
            <v-list-item-content>
              <v-list-item-title :style="'text-align: ' + ($t('direction')=='rtl' ? 'right' : 'left')" :color="color_s">
                {{
                  item.title
                }}
              </v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-item>
      </v-list>
      <div style="width: 100% !important;height: 100px;position: absolute;bottom: 0;margin-bottom: 10px">
        <nuxt-link to="/#">
          <v-img width="120px" style="margin-left: auto;margin-right: auto;margin-top: auto" src="banerandlogo/Logo.jpg"></v-img>
        </nuxt-link>
      </div>

    </v-navigation-drawer>
    <v-main id="main">
      <Nuxt/>
    </v-main>
  </v-card>
</template>

<script>
import Header from "./Header";

export default {
  components: {Header},
  data() {
    return {
      offset: true,
      ffff: this.$t('right'),
      color_p: "#edefe5",
      color_s: "#006064",
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
      items: this.$t('items'),
      childs: [],

    }
  },
  watch: {
    items: {
      immediate: true,
      deep: true,
      handler(newV) {
        this.items.forEach(item => {
          if (item.childs) {
            this.childs = (item.childs)
          }
        })
        console.log('childs ', this.childs)
      }
    },
  }
}
</script>
<style>
.v-overlay {
  height: 100vh;
}

#main > .v-main__wrap {
  background: url('/background.jpg') no-repeat center center fixed !important;
  background-size: cover;
  position: static;
}

.v-overlay__scrim, .v-overlay {
  z-index: 90 !important;
}
</style>
