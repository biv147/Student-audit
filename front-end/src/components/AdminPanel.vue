<template>
  <div>
    <div class="title-card" style="margin-left: 10px">
      <table style="width: 100%">
        <tr>
          <td style="width: 8%">
            <img
              src="../assets/profile.png"
              alt="profile-pic"
              class="profile-pic"
            />
          </td>
          <td style="width: 92%">
            <h1 style="margin: 15px 0 0 15px; padding: 0">{{ adminName }}</h1>
            <h4 style="margin: 5px 15px; padding: 0; font-weight: normal">
              {{ adminEmail }}
            </h4>
            <h4 style="margin: 5px 15px; padding: 0; font-weight: normal">
              <b>{{ adminUniversity }}</b>
            </h4>
            <button
              @click="logout()"
              class="loginsubmit"
              style="
                height: 40px;
                margin: 0;
                background-color: red;
                border: 1px solid red;
              "
            >
              Logout
            </button>
          </td>
        </tr>
      </table>
    </div>
    <br />
    <table style="width: 100%">
      <tr style="width: 65%">
        <td style="vertical-align: top">
          <h2 style="margin-left: 10px">Students</h2>
          <div
            v-for="(student, index) in students"
            :key="student._id"
            class="adminBodyCard"
          >
            <table style="width: 100%">
              <tr style=" margin: 0; padding; 0">
                <td style="width: 20%">
                  <h3>{{ student.firstName + " " + student.lastName }}</h3>
                </td>
                <td style="width: 12%">
                  <p>{{ student.studentNumber }}</p>
                </td>
                <td style="width: 50%">
                  <p style="margin-left: 30px">{{ student.email }}</p>
                </td>
                <td style="width: 37%">
                  <button
                    @click="deleteStudent(index)"
                    class="loginsubmit"
                    style="
                      height: 40px;
                      margin: 0;
                      background-color: orange;
                      border: 1px solid orange;
                    "
                  >
                    Delete Student
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </td>
        <td style="width: 35%; vertical-align: top">
          <div class="adminlogincard" style="margin-top: 25px">
            <h2 class="loginh2">Add Student</h2>

            <div class="form-label">First Name</div>
            <input type="text" class="textInput" v-model="addFirstName" />
            <br /><br />

            <div class="form-label">Last Name</div>
            <input type="text" class="textInput" v-model="addLastName" />
            <br /><br />

            <div class="form-label">Student Number</div>
            <input type="number" class="textInput" v-model="addStudentNumber" />
            <br /><br />

            <div class="form-label">Password</div>
            <input type="password" class="textInput" v-model="addPassword" />

            <br /><br />
            <div class="form-label">Email</div>
            <input type="email" class="textInput" v-model="addEmail" />

            <br />

            <button class="loginsubmit" @click="addStudent">Submit</button>
            <br /><br />
          </div>
        </td>
      </tr>
    </table>

    <br /><br />
    <br />
  </div>
</template>

<script>
import axios from "axios";
import DJANGO_URL from "../constants/constants";

export default {
  name: "TeachVraj",
  components: {},
  data() {
    return {
      addFirstName: "",
      addLastName: "",
      addStudentNumber: "",
      addPassword: "",
      addEmail: "",
      errorMsg: "",
      showLoginLoading: false,
      showSignupLoading: false,

      adminName: "",
      adminEmail: "",
      adminUniversity: "",
      students: [],
    };
  },
  methods: {
    addStudent() {
      if (
        this.addFirstName === "" ||
        this.addLastName === "" ||
        this.addStudentNumber === "" ||
        this.addPassword === "" ||
        this.addEmail === ""
      ) {
        return;
      }

      if (!confirm("Are you sure you want to add this student?")) {
        return;
      }

      const params = {
        firstName: this.addFirstName,
        lastName: this.addLastName,
        university: this.$store.getters.getAdminUniversityId,
        studentNumber: this.addStudentNumber,
        password: this.addPassword,
        email: this.addEmail,
      };
      axios
        .get(DJANGO_URL.DJANGO_URL + "admin/add_student/", { params })
        .then((res) => {
          this.students.push({
            firstName: this.addFirstName,
            lastName: this.addLastName,
            university: this.$store.getters.getAdminUniversityId,
            studentNumber: this.addStudentNumber,
            password: this.addPassword,
            email: this.addEmail,
            _id: res.data,
          });

          this.addFirstName = "";
          this.addLastName = "";
          this.addStudentNumber = "";
          this.addPassword = "";
          this.addEmail = "";
        });
    },
    deleteStudent(index) {
      if (!confirm("Are you sure you want to delete this student?")) {
        return;
      }

      const student = this.students[index];

      const params = {
        _id: student._id,
      };
      axios
        .get(DJANGO_URL.DJANGO_URL + "admin/remove_student/", { params })
        .then(() => {
          this.students.splice(index, 1);
        });
    },
    logout() {
      this.$router.push({ name: "AdminLogin" });
    },
  },
  mounted() {
    if (this.$store.getters.getAdminFirstName === "") {
      this.$router.push({ name: "AdminLogin" });
    }

    this.adminName =
      this.$store.getters.getAdminFirstName +
      " " +
      this.$store.getters.getAdminLastName;
    this.adminEmail = this.$store.getters.getAdminEmail;
    this.adminUniversity = this.$store.getters.getAdminUniversityName;

    const params = {
      universityId: this.$store.getters.getAdminUniversityId,
    };
    axios
      .get(DJANGO_URL.DJANGO_URL + "admin/get_students/", { params })
      .then((res) => {
        this.students = res.data;
      });
  },
};
</script>

<style>
.adminBodyCard {
  width: 80%;
  margin: 20px 10px;
  padding: 0 30px;
  border: 1px solid white;
  border-radius: 20px;
  background: rgb(234, 232, 232);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.adminlogincard {
  width: 550px;
  padding-bottom: 20px;
  padding: 0 30px;
  border: 1px solid white;
  border-radius: 20px;
  background: rgb(234, 232, 232);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
