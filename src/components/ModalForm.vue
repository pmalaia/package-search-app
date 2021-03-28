<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline secondary">
          <span>{{ data.name }}</span> /{{ data.type }}
        </v-card-title>
        <CommonTable :data="data.files" />

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="secodTitle" text @click="dialog = false"> Close </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import CommonTable from "@/components/CommonTable";

export default {
  name: "ModalForm",
  components: {
    CommonTable,
  },
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    dialog: {
      get() {
        return this.isActive;
      },
      set(neValue) {
        this.$emit("set-active", neValue);
      },
    },
  },
};
</script>
