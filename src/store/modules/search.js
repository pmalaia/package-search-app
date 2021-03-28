import axios from "@/axiosConfig";

const state = {
  packages: [],
};

const getters = {};

const mutations = {
  SET_PACKAGES: (state, payload) => {
    state.packages = payload;
  },
};
const actions = {
  GET_PACKAGES: async (context, payload) => {
    const { data } = await axios.get(`/${payload}`);
    console.log(data);
    context.commit("SET_PACKAGES", data);
    return data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
