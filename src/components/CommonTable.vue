<template>
  <v-data-table
    :headers="headers"
    :items="data"
    :loading="isLoading"
    item-key="name"
    class="elevation-1"
  >
    <template v-slot:[`item.name`]="{ item }">
      <v-chip :color="`secodTitle`" dark @click="showAlert(item)">
        {{ item.name }}
      </v-chip>
    </template>
  </v-data-table>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    headers() {
      return [
        { text: "Name", value: "name" },
        { text: "Type", value: "type" },
      ];
    },
  },
  methods: {
    showAlert(item) {
      this.$emit("is-modal-active", { modalActive: true, item });
    },
  },
};
</script>
