<template>
  <v-snackbar
    :timeout="timeout"
    :color="color"
    v-model="visibleStatus"
    class="ma-5"
  >
    {{ text }}
    <v-btn dark text @click="isVisible = false">Close</v-btn>
  </v-snackbar>
</template>
<script>
export default {
  name: "SnackBar",
  props: {
    text: {
      type: [String, Error],
      default: "",
    },
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    visibleStatus: {
      get() {
        return this.isVisible;
      },
      set(newValue) {
        this.$emit("set-visible", newValue);
      },
    },
  },
  data: () => ({
    color: "error",
    timeout: 2500,
  }),
};
</script>
