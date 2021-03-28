<template>
  <div>
    <v-container mt-5>
      <v-layout wrap justify-space-between>
        <v-flex class="xs12 md8">
          <v-text-field
            v-model="name"
            placeholder="enter package"
            outlined
            clearable
          ></v-text-field>
        </v-flex>
        <v-flex class="xs12 md3 d-flex justify-center">
          <v-btn x-large :disabled="!name" required @click="send">
            SEARCH
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container>
      <v-chip
        v-if="fullname"
        class="my-3"
        color="secodTitle"
        label
        text-color="white"
      >
        <v-icon left> mdi-label </v-icon>
        {{ fullname }}
      </v-chip>
      <v-layout class="child-flex" justify-center>
        <CommonTable
          :data="data.files"
          :is-loading="isLoading"
          @is-modal-active="setModalActive(arguments)"
        />
      </v-layout>
    </v-container>
    <SnackBar
      :text="snackbar.message"
      :is-visible="snackbar.visible"
      @set-visible="snackbar.visible = $event"
    />
    <ModalForm
      :data="detailItem"
      :is-active="isModalActive"
      @set-active="isModalActive = $event"
    />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CommonTable from "@/components/CommonTable";
import SnackBar from "@/components/SnackBar";
import ModalForm from "@/components/ModalForm";

export default {
  name: "Home",
  components: {
    CommonTable,
    SnackBar,
    ModalForm,
  },
  data: () => ({
    isLoading: false,
    name: "",
    data: [],
    snackbar: {
      visible: false,
      message: "",
    },
    isModalActive: false,
    fullname: null,
    detailItem: {},
  }),
  computed: {
    isVersioned() {
      return this.name.includes("@");
    },
  },
  methods: {
    ...mapActions("search", ["GET_PACKAGES"]),
    async send() {
      this.isLoading = true;
      try {
        if (this.isVersioned) {
          this.data = await this.GET_PACKAGES(this.name);
        } else {
          const packagelatestVersion = await this.GET_PACKAGES(this.name);
          this.fullname = `${this.name}@${packagelatestVersion.tags.latest}`;
          this.data = await this.GET_PACKAGES(this.fullname);
        }
      } catch (e) {
        this.snackbar.visible = true;
        this.snackbar.message = e;
      } finally {
        this.isLoading = false;
        this.isError ? (this.isError = false) : "";
      }
    },
    setModalActive(properties) {
      const { item, modalActive } = properties[0];
      this.isModalActive = modalActive;
      this.detailItem = item;
    },
  },
};
</script>
