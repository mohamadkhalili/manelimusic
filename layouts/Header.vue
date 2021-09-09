<template>
  <v-card
    class="mx-auto overflow-hidden"
    height="400"
    width="100%"
  >

    <v-app-bar
      color="deep-purple accent-4"
      dark
      prominent
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      class="deep-purple accent-4"

      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item
          v-model="group"
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

    </v-navigation-drawer>
  </v-card>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      drawer: false,
      group: null,
      items: [
        {title: 'Dashboard', icon: 'mdi-view-dashboard'},
        {title: 'Account', icon: 'mdi-account-box'},
        {title: 'Admin', icon: 'mdi-gavel'},
      ],
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>

<style>

</style>
