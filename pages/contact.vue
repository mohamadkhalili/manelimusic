<template>
  <v-app style="background-color: #00000000 !important;">
    <v-row no-gutters class="ma-2 ma-sm-5 ma-md-5 ma-lg-10 ma-xl-10">
      <v-container :style="'direction:' + this.$t('direction')">
        <v-col
          class="mt-5"
          cols="12"
          xs="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"
        >
          <iframe src="https://maps.google.com/maps?q=35.69772096146442, 51.34819898660145&z=15&output=embed" width="100%" height="500px" frameborder="0" style="border:0"></iframe>
        </v-col>
        <v-col
          class="mt-5"
          cols="12"
          xs="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"
        >
          <h3 style="text-align: center;color: #000">{{ Contacts[0].p1 }} : {{ Contacts[0].p2 }}</h3>
        </v-col>
        <v-col
          class="mt-5"
          cols="12"
          xs="12"
          sm="12"
          md="12"
          lg="12"
          xl="12"
        >
          <h3 style="text-align: center;color: #000">{{ Contacts[1].p1 }} : {{ Contacts[1].p2 }}</h3>
        </v-col>
      </v-container>
    </v-row>
  </v-app>
</template>


<script>


export default {
  name: "contact",
  data() {
    return {
      Contacts: [
        {
          p1: this.$t('Contact.p1.p1'),
          p2: this.$t('Contact.p1.p2'),
        },
        {
          p1: this.$t('Contact.p2.p1'),
          p2: this.$t('Contact.p2.p2'),
        },
        {
          p1: this.$t('Contact.p3.p1'),
          p2: this.$t('Contact.p3.p2'),
        },
      ],
      currentLocation: {},
      locations: [
        {
          lat: 35.69772096146442,
          lng: 51.34819898660145
        },
      ],
      pins: {
        selected: "data:image/png;base64,iVBORw0KGgo...",
        notSelected: "data:image/png;base64,iVBORw0KGgo..."
      },
      clusterStyle: [
        {
          url: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m1.png",
          width: 56,
          height: 56,
          textColor: "#fff"
        }
      ]
    }
  }
}
</script>

<style>
#map {

  width: 100%;

  height: 400px;

  background-color: grey;

}
</style>
