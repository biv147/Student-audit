import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      studentNumber: "",
      firstName: "",
      lastName: "",
      email: "",
      universityName: "",
      universityId: "",
      studentObjId: "",
      adminUniversityName: "",
      adminUniversityId: "",
      adminFirstName: "",
      adminLastName: "",
      adminEmail: "",
    };
  },
  mutations: {
    setStudentNumber(state, payload) {
      state.studentNumber = payload;
    },
    setFirstName(state, payload) {
      state.firstName = payload;
    },
    setLastName(state, payload) {
      state.lastName = payload;
    },
    setEmail(state, payload) {
      state.email = payload;
    },
    setUniversityName(state, payload) {
      state.universityName = payload;
    },
    setUniversityId(state, payload) {
      state.universityId = payload;
    },
    setStudentObjId(state, payload) {
      state.studentObjId = payload;
    },
    reset(state) {
      state.studentNumber = "";
      state.firstName = "";
      state.lastName = "";
      state.email = "";
      state.universityName = "";
      state.universityId = "";
      state.studentObjId = "";
    },

    setAdminFirstName(state, payload) {
      state.adminFirstName = payload;
    },
    setAdminLastName(state, payload) {
      state.adminLastName = payload;
    },
    setAdminEmail(state, payload) {
      state.adminEmail = payload;
    },
    setAdminUniversityId(state, payload) {
      state.adminUniversityId = payload;
    },
    setAdminUniversityName(state, payload) {
      state.adminUniversityName = payload;
    },
  },
  getters: {
    getStudentNumber(state) {
      return state.studentNumber;
    },
    getFirstName(state) {
      return state.firstName;
    },
    getLastName(state) {
      return state.lastName;
    },
    getEmail(state) {
      return state.email;
    },
    getUniversityId(state) {
      return state.universityId;
    },
    getUniversityName(state) {
      return state.universityName;
    },
    getAll(state) {
      return state;
    },
    getStudentObjId(state) {
      return state.studentObjId;
    },

    getAdminFirstName(state) {
      return state.adminFirstName;
    },
    getAdminLastName(state) {
      return state.adminLastName;
    },
    getAdminEmail(state) {
      return state.adminEmail;
    },
    getAdminUniversityId(state) {
      return state.adminUniversityId;
    },
    getAdminUniversityName(state) {
      return state.adminUniversityName;
    },
  },
});
