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
            <h1 style="margin: 15px 0 0 15px; padding: 0">{{ getFullName }}</h1>
            <h3 style="margin: 5px 15px; padding: 0">
              {{ studentNum }}&nbsp;&nbsp;|&nbsp;&nbsp;{{ email }}
            </h3>
            <h4 style="margin: 5px 15px; padding: 0; font-weight: normal">
              {{ programSelected }}
            </h4>
            <h4 style="margin: 5px 15px; padding: 0; font-weight: normal">
              {{ university }}
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
    <br />
    <div class="card">
      <h1 style="margin-left: 10px">Program Map</h1>
      <div style="margin-left: 10px">
        The following is your program map. Semesters in
        <b style="color: orange">orange</b> are not yet complete, and semesters
        in <b style="color: lightgreen">green</b> have been completed (your
        grade will be visible) <br /><br />
        <i>Click on a course to learn more</i>
      </div>
      <br />
      <table>
        <tr>
          <td
            v-for="(semester, semIndex) in semesters"
            :key="semester.name"
            style="padding: 5px; vertical-align: top"
          >
            <div
              class="semester"
              :class="{
                'semester-complete': semester.done,
                'semester-remaining': !semester.done,
              }"
            >
              <h1 style="text-align: center">{{ semester.semester }}</h1>
              <div
                v-for="(course, crsIndex) in semester.courses"
                :key="course.name"
                class="course"
              >
                <div
                  style="font-weight: bold"
                  class="tooltip"
                  @click="openCourseDescription(course, semester.done)"
                >
                  {{ course.name }}
                  <span class="tooltiptext">{{ course.fullName }} </span>
                </div>
                <div v-if="course.grade !== -1">Grade: {{ course.grade }}</div>
                <div
                  v-if="course.removeable && semester.done === false"
                  class="remove-link"
                  @click="removeCourse(semIndex, crsIndex)"
                >
                  Remove
                </div>
              </div>
              <div class="course" v-if="!semester.done">
                <select
                  @change="valueChosen($event, semIndex)"
                  class="electiveOptions"
                  :ref="semIndex"
                >
                  <option value="blank"></option>
                  <option v-for="crs in extraCourses" :key="crs.name">
                    <span v-if="crs.name === ''"></span>
                    <span v-else>{{ crs.fullName }} ({{ crs.name }})</span>
                  </option>
                </select>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <br />
    <button class="submit" @click="updateMap()">Save Changes</button>
  </div>
</template>

<script>
import axios from "axios";
import DJANGO_URL from "../constants/constants";

export default {
  name: "StudentSpecificProgram",
  data() {
    return {
      firstName: this.$store.getters.getFirstName,
      lastName: this.$store.getters.getLastName,
      studentNum: this.$store.getters.getStudentNumber,
      email: this.$store.getters.getEmail,
      programSelected: "",
      university: this.$store.getters.getUniversityName,
      plan: {},
      semesters: [],
      extraCourses: [""],
    };
  },
  methods: {
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
    updateMap() {
      this.plan.plan = this.semesters;
      this.plan.electives = this.extraCourses;

      const params = {
        plan: this.plan,
      };

      axios
        .post(DJANGO_URL.DJANGO_URL + "database/update_plan/", { params })
        .then(() => {
          console.log(" ");
        });
    },
    removeCourse(semIndex, crsIndex) {
      const course = this.semesters[semIndex].courses[crsIndex];
      this.semesters[semIndex].courses.splice(crsIndex, 1);
      this.extraCourses.push(course);
    },
    openCourseDescription(course, finished) {
      this.$router.push({
        name: "CourseDescription",
        query: { name: course.name, done: finished },
      });
    },
    valueChosen(event, semesterIndex) {
      if (event.target.value === "") {
        return;
      }
      const val = event.target.value.split(" (")[1].slice(0, -1);
      let courseChosen = {};
      let courseChosenDup = {};
      for (let i = 0; i < this.extraCourses.length; i++) {
        if (this.extraCourses[i].name === val) {
          courseChosen = JSON.parse(JSON.stringify(this.extraCourses[i]));
          courseChosenDup = JSON.parse(JSON.stringify(this.extraCourses[i]));
          break;
        }
      }

      let pastCourses = [];
      let presentCourses = [];
      this.semesters.forEach((sem, index) => {
        for (let i = 0; i < sem.courses.length; i++) {
          if (index < semesterIndex) {
            pastCourses.push(sem.courses[i]);
          } else {
            presentCourses.push(sem.courses[i]);
          }
        }
      });

      for (let i = 0; i < pastCourses.length; i++) {
        if (courseChosen.prerequisites.includes(pastCourses[i].name)) {
          courseChosen.prerequisites.splice(
            courseChosen.prerequisites.indexOf(pastCourses[i].name),
            1
          );
        }
      }

      if (courseChosen.prerequisites.length > 0) {
        alert(
          "Not all pre-requisites have been satisfied: " +
            courseChosen.prerequisites.join(", ")
        );
      } else {
        courseChosenDup.removeable = true;
        courseChosenDup.grade = -1;
        this.semesters[semesterIndex].courses.push(courseChosenDup);
        let index = -1;
        this.extraCourses.forEach((course, i) => {
          if (course.name === courseChosen.name) {
            index = i;
          }
        });
        this.extraCourses.splice(index, 1);
      }
    },
  },
  computed: {
    getFullName() {
      return (
        this.firstName.charAt(0).toUpperCase() +
        this.firstName.slice(1) +
        " " +
        this.lastName.charAt(0).toUpperCase() +
        this.lastName.slice(1)
      );
    },
  },
  mounted() {
    if (this.$store.getters.getFirstName === "") {
      this.$router.push({ name: "Login" });
    }
    const params = {
      studentID: this.$store.getters.getStudentObjId,
    };
    axios
      .get(DJANGO_URL.DJANGO_URL + "database/get_plan/", { params })
      .then((res) => {
        this.plan = res.data;
        this.semesters = res.data.plan;
        this.extraCourses = res.data.electives;
      });
  },
};
</script>

<style>
.title-card {
  width: 30%;
  height: 150px;
  padding: 0 20px;
  border: 1px solid white;
  border-radius: 20px;
  background: rgb(234, 232, 232);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.profile-pic {
  height: 120px;
  margin-left: -20px;
}

.card {
  padding: 0 30px;
  display: inline-block;
  border: 1px solid white;
  border-radius: 20px;
  background: rgb(234, 232, 232);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.semester {
  width: 180px;
  padding: 10px;
  border: 1px solid white;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow-x: auto;
  white-space: nowrap;
}

.course {
  width: 90%;
  padding: 10px;
  margin-bottom: 5px;
  border: 1px solid white;
  border-radius: 5px;
  background: rgb(234, 232, 232);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow-x: auto;
  white-space: nowrap;
  word-wrap: break-all;
  overflow-wrap: break-all;
  overflow-x: hidden;
  cursor: pointer;
}

.course:hover {
  background: rgb(196, 195, 195);
}

.semester-complete {
  background: greenyellow;
}

.semester-remaining {
  background: orange;
}

.tooltip {
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px;
  border-radius: 6px;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}

.remove-link:hover {
  text-decoration: underline;
  font-style: italic;
}

.electiveOptions {
  width: 100%;
  height: 30px;
  padding: 0 10px;
  border: 2px solid black;
  border-radius: 5px;
}
</style>
