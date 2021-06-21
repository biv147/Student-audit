<template>
  <div style="width: 100%; height: 100%">
    <h1 class="loginh1">Audit Trail</h1>
    <div class="logincard">
      <h2 class="loginh2">Student Login</h2>
      <div class="form-label">Student Number</div>
      <input type="number" class="textInput" v-model="loginStudentNumber" />
      <br /><br />
      <div class="form-label">Password</div>
      <input type="password" class="textInput" v-model="loginPassword" />

      <br /><br />

      <div class="form-label">University</div>
      <select name="userSelect" v-model="loginUniversity" class="dropdown">
        <option
          v-for="uni in uniList"
          v-bind:key="uni.id"
          v-bind:value="uni.id"
        >
          {{ uni.value }}
        </option>
      </select>

      <button class="loginsubmit" @click="loginProcedure">Submit</button>
      <br /><br />
      <circle-8 v-if="showLoginLoading" style="margin-left: 45%"></circle-8>
    </div>

    <div class="error">{{ errorMsg }}</div>
  </div>
</template>

<script>
import Circle8 from "vue-loading-spinner/src/components/Circle8";
import DJANGO_URL from "../constants/constants";
import axios from "axios";

export default {
  name: "Welcome",
  components: {
    Circle8,
  },
  data() {
    return {
      loginStudentNumber: "",
      loginPassword: "",
      loginUniversity: "",
      errorMsg: "",
      showLoginLoading: false,
      showSignupLoading: false,

      uniList: [],
    };
  },
  methods: {
    loginProcedure() {
      if (this.loginStudentNumber === "" || this.loginPassword === "") {
        this.errorMsg = "Error: Must Fill All Values";
        return;
      }

      this.showLoginLoading = true;
      this.errorMsg = "";

      const params = {
        studentID: this.loginStudentNumber,
        password: this.loginPassword,
        university: this.loginUniversity,
      };

      axios
        .get(DJANGO_URL.DJANGO_URL + "database/login/", { params })
        .then((res) => {
          this.showLoginLoading = false;
          if (res.data === "error") {
            this.errorMsg = res.data.error;
            return;
          }

          let univ = {};
          this.uniList.forEach((u) => {
            if (u.id === this.loginUniversity) {
              univ = u;
            }
          });

          this.$store.commit("setStudentNumber", res.data.studentNumber);
          this.$store.commit("setFirstName", res.data.firstName);
          this.$store.commit("setLastName", res.data.lastName);
          this.$store.commit("setEmail", res.data.email);
          this.$store.commit("setUniversityId", univ.id);
          this.$store.commit("setUniversityName", univ.value);
          this.$store.commit("setStudentObjId", res.data._id);

          this.$router.push({
            name: "Program",
          });
        })
        .catch((err) => console.error(err));
    },
  },
  mounted() {
    if (this.$route.params.data) {
      this.errorMsg = this.$route.params.data;
    }

    axios
      .get(DJANGO_URL.DJANGO_URL + "database/get_universities/")
      .then((res) => {
        if (res.data.error) {
          this.errorMsg = res.data.error;
          return;
        }

        res.data.forEach((university) => {
          this.uniList.push({
            value: university.name,
            id: university._id,
          });
        });
      })
      .catch((err) => console.error(err));
  },
};
</script>

<style>
.loginh1 {
  text-align: center;
  font-size: 64px;
  color: white;
}
.loginh2 {
  text-align: center;
  font-size: 36px;
}
.col {
  width: 50%;
  height: 60%;
}
.logincard {
  width: 550px;

  padding-bottom: 20px;
  padding: 0 30px;
  margin-left: 34%;

  border: 1px solid white;
  border-radius: 20px;
  background: rgb(234, 232, 232);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
.textInput {
  width: 90%;
  height: 18px;
  padding: 10px 15px;
  font-size: 18px;
  border: 2px solid;
  border-radius: 10px;
}
.form-label {
  font-weight: bold;
  font-size: 18px;
  margin: 5px;
}
.loginsubmit {
  width: 80%;
  height: 50px;
  margin: 50px 50px 10px 50px;
  font-weight: bold;
  font-size: 16px;
  background: purple;
  color: white;
  border: 1px solid purple;
  border-radius: 20px;
  cursor: pointer;
}
.loginsubmit:hover {
  background: darkorchid;
  border: 1px solid darkorchid;
}
.error {
  margin-top: 50px;
  color: lightsalmon;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
}
textarea:focus,
input:focus {
  outline: none;
}
button:focus {
  outline: none;
}
.dropdown {
  width: 96%;
  height: 40px;
  padding: 10px;
  border: 2px solid black;
  border-radius: 10px;
  outline: none;
}
</style>
