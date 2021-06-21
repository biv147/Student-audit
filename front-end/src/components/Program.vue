<template>
  <div>
    <div class="title-card">
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
            <h1 style="margin: 15px 0 0 15px; padding: 0">{{ getName }}</h1>
            <h3 style="margin: 5px 15px; padding: 0">
              {{
                this.$store.getters.getStudentNumber
              }}&nbsp;&nbsp;|&nbsp;&nbsp;{{ this.$store.getters.getEmail }}
            </h3>
            <h4 style="margin: 5px 15px; padding: 0; font-weight: normal">
              {{ this.$store.getters.getUniversityName }}
            </h4>
            <button
              class="viewsubmit"
              style="height: 30px; width: 100px; margin-left: 12px; background-color: orange; border: 1px solid orange"
              @click="logout()"
            >
              Logout
            </button>
          </td>
        </tr>
      </table>
    </div>

    <div v-if="programsEnrolled.plan" class="programbodycard">
      <table style="width: 100%">
        <tr style=" margin: 0; padding; 0">
          <td style="width: 40%; padding: 0 3%">
            <h2>{{ programsEnrolled.name }}</h2>
          </td>
          <td style="width: 20%; padding: 0 3%">
            <p>Number of Study Semesters: {{ programsEnrolled.plan.length }}</p>
          </td>
          <td style="width: 20%; padding: 0 3%">
            <button class="viewsubmit" @click="switchView()">View</button>
            &nbsp;
            <button class="deleteButton" @click="deletePlan()">X</button>
          </td>
        </tr>
      </table>
    </div>

    <div v-else>
      <div class="error" style="color: yellow">
        You have not signed up for any programs yet. Enroll in a program below
        from your university.
      </div>
      <div
        class="programbodycard"
        v-for="plan in prospectivePrograms"
        :key="plan._id"
      >
        <h1>{{ plan.name }}</h1>
        <table style="width: 100%">
          <tr style=" margin: 0; padding; 0">
            <td style="width: 20%; padding: 0 3%">
              <b>{{ university }}</b>
            </td>
            <td style="width: 60%; padding: 0 3%">
              <p>{{ plan.description }}</p>
            </td>
            <td>
              <button
                class="viewsubmit"
                style="width: 100%"
                @click="choosePlan(plan._id)"
              >
                Select
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import DJANGO_URL from "../constants/constants";
import axios from "axios";

export default {
  name: "Program",
  data() {
    return {
      firstName: this.$store.getters.getFirstName,
      lastName: this.$store.getters.getLastName,
      email: this.$store.getters.getEmail,
      studentNumber: this.$store.getters.getStudentNumber,
      university: this.$store.getters.getUniversityName,

      programsEnrolled: {},
      prospectivePrograms: [],
    };
  },
  computed: {
    getName() {
      return this.firstName + " " + this.lastName;
    },
  },
  methods: {
    deletePlan() {
      if (!confirm("Are you sure you want to withdraw from the program?")) {
        return;
      }

      const params = {
        plan: this.programsEnrolled._id,
      };

      axios
        .get(DJANGO_URL.DJANGO_URL + "database/delete_plan/", { params })
        .then(() => {
          this.programsEnrolled = {};
          const newParams = {
            university: this.$store.getters.getUniversityId,
          };
          axios
            .get(DJANGO_URL.DJANGO_URL + "database/get_blank_plans/", {
              params: newParams,
            })
            .then((res) => {
              this.prospectivePrograms = res.data;
            });
        });
    },
    logout() {
      const params = {
        student_id: this.$store.getters.getStudentNumber,
        university_id: this.$store.getters.getUniversityId,
      };
      axios
        .get(DJANGO_URL.DJANGO_URL + "emails/logout/", { params })
        .then(() => {
          this.$store.commit("resetAll");
          this.$router.push({ name: "Login" });
        });
    },
    switchView() {
      this.$router.push({ name: "StudentSpecificProgram" });
    },
    choosePlan(id) {
      if (!confirm("Are you sure you want to select this plan?")) {
        return;
      }

      const params = {
        plan: id,
        student: this.$store.getters.getStudentObjId,
      };

      axios
        .get(DJANGO_URL.DJANGO_URL + "database/select_plan/", { params })
        .then(() => {
          this.$router.push({ name: "StudentSpecificProgram" });
        });
    },
  },
  mounted() {
    this.university = this.$store.getters.getUniversityName;
    if (this.$store.getters.getFirstName === "") {
      this.$router.push({ name: "Login" });
    }
    const params = {
      studentID: this.$store.getters.getStudentObjId,
    };
    axios
      .get(DJANGO_URL.DJANGO_URL + "database/get_plan/", { params })
      .then((res) => {
        if (res.data.error) {
          console.log(res.data.error);
          return;
        }
        this.programsEnrolled = res.data;
        // this.programsEnrolled = {};
      })
      .then(() => {
        if (this.programsEnrolled.plan) {
          return;
        }

        const newParams = {
          university: this.$store.getters.getUniversityId,
        };
        axios
          .get(DJANGO_URL.DJANGO_URL + "database/get_blank_plans/", {
            params: newParams,
          })
          .then((res) => {
            this.prospectivePrograms = res.data;
          })
          .catch((error) => {
            console.log(error);
            this.$router.push({ name: "Login", params: { data: "This user does not exist" } });
          });
      })
      .catch((error) => {
        console.log(error);
        this.$router.push({ name: "Login", params: { data: "This user does not exist" }});
      });
  },
};
</script>
<style>
.programcard {
  width: 550px;

  padding-bottom: 20px;
  padding: 0 30px;
  border: 1px solid white;
  border-radius: 20px;
  background: rgb(234, 232, 232);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.programbodycard {
  width: 80%;
  margin: 30px 0;
  padding: 0 30px;
  border: 1px solid white;
  border-radius: 20px;
  background: rgb(234, 232, 232);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.viewsubmit {
  width: 70%;
  height: 50px;
  font-weight: bold;
  font-size: 16px;
  background: purple;
  color: white;
  border: 1px solid purple;
  border-radius: 20px;
  cursor: pointer;
}
.viewsubmit:hover {
  background: darkorchid;
  border: 1px solid darkorchid;
}
.deleteButton {
  width: 50px;
  height: 50px;
  margin-left: 30px;
  border: 1px solid red;
  border-radius: 25px;
  font-weight: bolder;
  background-color: red;
  color: white;
  cursor: pointer;
}

.deleteButton:hover {
  background-color: orangered;
  border: 1px solid orangered;
}
</style>
