<template>
  <v-footer class="secondary" padless>
    <v-card-text class="text-center" cols="12">
      <v-btn
        v-for="icon in icons"
        :key="icon.name"
        class="mx-4 white--text"
        icon
        :href="icon.link"
      >
        <v-icon size="24px">
          {{ icon.name }}
        </v-icon>
      </v-btn>
    </v-card-text>
    <v-card-text class="py-2 white--text text-center">
      {{ new Date().getFullYear() }} — <strong>Polina Malaia</strong>
    </v-card-text>
  </v-footer>
</template>
<script>
export default {
  data: () => ({
    icons: [
      { name: "mdi-facebook", link: "https://www.facebook.com/malayapolina/" },
      { name: "mdi-linkedin", link: "https://www.linkedin.com/in/pmalaya/" },
      {
        name: "mdi-github",
        link: "https://github.com/pmalaia/package-search-app",
      },
    ],
  }),
};
</script>
