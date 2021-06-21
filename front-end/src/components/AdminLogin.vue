<template>
  <div style="width: 100%; height: 100%">
    <h1 class="loginh1">Audit Trail</h1>
    <div class="logincard">
      <h2 class="loginh2">Admin Login</h2>
      <div class="form-label">Email</div>
      <input type="email" class="textInput" v-model="loginAdmin" />
      <br /><br />
      <div class="form-label">Password</div>
      <input type="password" class="textInput" v-model="loginPassword" />

      <br />

      <button class="loginsubmit" @click="loginProcedure">Submit</button>
      <br /><br />
    </div>

    <div class="error">{{ errorMsg }}</div>
  </div>
</template>

<script>
import axios from "axios";
import DJANGO_URL from "../constants/constants";

export default {
  name: "Welcome",
  data() {
    return {
      loginAdmin: "",
      loginPassword: "",
      errorMsg: "",
      showLoginLoading: false,
      showSignupLoading: false,
    };
  },
  methods: {
    loginProcedure() {
      // Validate that all fields are filled
      if (this.loginAdmin === "" || this.loginPassword === "") {
        this.errorMsg = "Error: Must Fill All Values";
        return;
      }
      // Prepare to check if the user existed by querying the database
      this.showLoginLoading = true;
      this.errorMsg = "";
      const params = {
        email: this.loginAdmin,
        password: this.loginPassword,
      };
      axios
        .get(DJANGO_URL.DJANGO_URL + "admin/login/", { params })
        .then((res) => {
          this.showLoginLoading = false;
          if (res.data.error) {
            this.errorMsg = res.data.error;
            return;
          }

          // Save the user information
          this.$store.commit("setAdminEmail", res.data.email);
          this.$store.commit(
            "setAdminUniversityName",
            res.data.university.name
          );
          this.$store.commit("setAdminUniversityId", res.data.university._id);
          this.$store.commit("setAdminFirstName", res.data.firstName);
          this.$store.commit("setAdminLastName", res.data.lastName);

          this.$router.push({ name: "AdminPanel" });
        })
        .catch((err) => console.error(err));
    },
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
  border: 2px solid grey;
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
</style>
