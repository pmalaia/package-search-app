<template>
  <v-app>
    <header>
      <h1><span>Packages</span>Search</h1>
    </header>
    <v-main class="commonColor">
      <Home />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Home from "@/components/Home";
import Footer from "@/components/Footer";

export default {
  name: "App",

  components: {
    Home,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Fira Sans", sans-serif;

  &::selection {
    background: transparentize($color: #42b883, $amount: 0.5);
  }
}
a {
  text-decoration: none;
}

header {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  background-color: #2c3d4e;
  box-shadow: 0px 0px 6px rgba($color: #000000, $alpha: 1);
}
h1 {
  color: #fff;
  font-size: 28px;

  span {
    color: #42b883;
  }
}
</style>
