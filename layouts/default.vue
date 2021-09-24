<template>
  <v-card
    v-resize="onResize"
    class="mx-auto overflow-hidden"
    width="100%"
  >
    <v-app-bar
      :color="color_p"
      v-if="windowSize.x <= 1032"
      height="60px"
      :style="'direction: ' + $t('direction')"
    >
      <nuxt-link v-if="windowSize.x > 1032" to="/#">
        <image height="50px" width="70px" class="ma-0" contain
               src="/banerandlogo/logo.jpg"></image>
      </nuxt-link>

      <v-app-bar-nav-icon v-if="windowSize.x <= 1032" :color="color_s"
                          @click.stop="drawer = !drawer"></v-app-bar-nav-icon>


      <template v-else>
        <v-bottom-navigation
          horizontal
          :background-color="color_p"
          style="box-shadow: none;"
        >
          <template v-for="(item, index) in items">
            <template v-if="!item.childs">
              <v-btn
                :key="index"
                :to="item.childs ? '' : item.url"
              >
                <span>{{ item.title }}</span>


              </v-btn>
            </template>
            <template v-else>
              <div data-app>
                <v-menu offset-y style="z-index: 2000">

                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      :key="index"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <span>{{ item.title }}</span>

                      <v-icon>mdi-menu-down</v-icon>

                    </v-btn>
                  </template>
                  <v-list style="z-index: 2000">
                    <v-list-item
                      v-for="(child, i) in childs"
                      :key="i"
                      :to="child.url"
                    >
                      <v-list-item-title>{{ child.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>

                </v-menu>
              </div>
            </template>
          </template>

        </v-bottom-navigation>
      </template>

      <v-spacer></v-spacer>

      <v-btn href="https://www.instagram.com/manelimusic/?hl=en" icon>
        <v-icon :color="color_s">mdi-instagram</v-icon>
      </v-btn>

      <v-btn href="http://t.me/manelimusicins" icon>
        <v-icon :color="color_s">mdi-send mdi-rotate-315</v-icon>
      </v-btn>

      <v-btn href="https://wa.me/+98-(921)2178078" icon>
        <v-icon :color="color_s">mdi-whatsapp</v-icon>
      </v-btn>

      <v-btn href="" icon>
        <v-icon :color="color_s">mdi-email</v-icon>
      </v-btn>

    </v-app-bar>
    <v-navigation-drawer
      v-if="windowSize.x <= 1032"
      class="deep-purple accent-4"
      v-model="drawer"
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
          <v-img width="120px" style="margin-left: auto;margin-right: auto;margin-top: auto"
                 src="/banerandlogo/logo.jpg"></v-img>
        </nuxt-link>
      </div>

    </v-navigation-drawer>
    <v-row v-else
           :color="color_p"
           height="60px"
           :style="'direction: ' + $t('direction')+';background-color: '+color_p"
    >

      <v-col>
        <nuxt-link to="/#">
          <v-img height="60px" width="70px" class="ma-0" contain
                 src="/banerandlogo/logo.jpg"></v-img>
        </nuxt-link>
      </v-col>


      <v-col>
        <template>
          <v-bottom-navigation
            horizontal
            :background-color="color_p"
            style="box-shadow: none;"
          >
            <template v-for="(item, index) in items">
              <template v-if="!item.childs">
                <v-btn
                  :key="index"
                  :to="item.childs ? '' : item.url"
                >
                  <span>{{ item.title }}</span>


                </v-btn>
              </template>
              <template v-else>
                <div data-app style="height: 100%">
                  <v-menu offset-y style="z-index: 2000">

                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        :key="index"
                        v-bind="attrs"
                        v-on="on"
                        class=""
                      >
                        <v-icon style="margin: 0">mdi-menu-down</v-icon>
                        <span>{{ item.title }}</span>


                      </v-btn>
                    </template>
                    <v-list :style="'background-color: '+color_p">
                      <v-list-item
                        v-for="(child, i) in childs"
                        :key="i"
                        :to="child.url"
                      >
                        <v-list-item-title>{{ child.title }}</v-list-item-title>
                      </v-list-item>
                    </v-list>

                  </v-menu>
                </div>
              </template>
            </template>

          </v-bottom-navigation>
        </template>
      </v-col>

      <v-spacer></v-spacer>

      <v-col style="max-width: 220px;min-width:220px;margin-top: 6px">
        <v-btn href="https://www.instagram.com/manelimusic/?hl=en" icon style="margin: 2px">
          <v-icon :color="color_s">mdi-instagram</v-icon>
        </v-btn>

        <v-btn href="http://t.me/manelimusicins" icon style="margin: 2px">
          <v-icon :color="color_s">mdi-send mdi-rotate-315</v-icon>
        </v-btn>

      <v-btn href="https://wa.me/+98-(921)2178078" icon style="margin: 2px">
        <v-icon :color="color_s">mdi-whatsapp</v-icon>
      </v-btn>

        <v-btn href="" icon style="margin: 2px">
          <v-icon :color="color_s">mdi-email</v-icon>
        </v-btn>


      </v-col>
    </v-row>
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
      windowSize: {
        x: 0,
        y: 0
      }

    }
  },
  mounted() {
    this.onResize()
    console.log('mobile: ', this.$device.isDesktop)
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
  },
  methods: {
    onResize() {
      this.windowSize = {x: window.innerWidth, y: window.innerHeight}
    }
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
