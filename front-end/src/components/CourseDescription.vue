<template>
  <div>
    <div class="title-card">
      <table style="width: 100%">
        <tr>
          <td style="width: 8%">
            <img
              src="../assets/course.png"
              alt="profile-pic"
              class="course-pic"
            />
          </td>
          <td style="width: 92%">
            <h1 style="margin: 15px 0 0 15px; padding: 0">
              {{ courseData.name }}
            </h1>
            <h4 style="margin: 5px 15px; padding: 0; font-weight: normal">
              {{ courseId }}
            </h4>
          </td>
        </tr>
      </table>
    </div>
    <h2>Reviews</h2>
    <div class="review" v-for="review in reviews" :key="review._id">
      <br />
      &nbsp;&nbsp;
      <span
        v-for="index in review.rating"
        class="filled-dot"
        :key="index"
      ></span>
      <span
        v-for="index in 5 - review.rating"
        class="empty-dot"
        :key="10 - index"
      ></span>
      <div>
        <br /><i>"{{ review.response }}"</i>
      </div>
      <br />
      <div v-if="review.studentId === $store.getters.getStudentObjId">
        <button
          @click="deleteReview(review._id)"
          class="submit"
          style="margin: 0; background-color: orange; border: 1px solid orange"
        >
          Delete Review</button
        ><br />
        <br />
      </div>
    </div>

    <div v-if="finished && !written">
      <h2>Submit Your Review</h2>
      <div class="review-form">
        <br />
        <span>Review</span><br />
        <input
          type="number"
          class="textInput"
          min="1"
          max="5"
          v-model="setRating"
        /><br /><br />
        <span>Description</span><br />
        <input class="textInput" type="text" v-model="setDescription" />
        <button class="submit" @click="submitReview">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DJANGO_URL from "../constants/constants";

export default {
  name: "CourseDescription",
  data() {
    return {
      reviews: [],
      courseData: {},
      courseId: "",
      finished: false,
      written: false,

      setRating: 0.0,
      setDescription: "",
    };
  },
  methods: {
    submitReview() {
      const params = {
        rating: this.setRating,
        response: this.setDescription,
        courseId: this.courseId,
        studentId: this.$store.getters.getStudentObjId,
      };

      axios
        .post(DJANGO_URL.DJANGO_URL + "database/add_review/", { params })
        .then((res) => {
          const newReview = {
            _id: res.data,
            rating: parseInt(this.setRating),
            response: this.setDescription,
            studentId: this.$store.getters.getStudentObjId,
          }
          console.log(newReview)
          this.reviews.push(newReview);

          this.written = true;
          this.setRating = 0.0;
          this.setDescription = "";
        });
    },
    deleteReview(revId) {
      const params = {
        reviewId: revId,
      };
      axios
        .get(DJANGO_URL.DJANGO_URL + "database/delete_review/", { params })
        .then((res) => {
          let toRemove = -1;
          for (let i = 0; i < this.reviews.length; i++) {
            if (this.reviews[i]._id === res) {
              toRemove = i;
              break;
            }
          }

          this.reviews.splice(toRemove, 1);
          this.written = false;
        });
    },
  },
  mounted() {
    this.courseId = this.$route.query.name;
    this.finished = Boolean(this.$route.query.done);

    const params = {
      courseId: this.courseId,
    };

    axios
      .get(DJANGO_URL.DJANGO_URL + "database/get_course_data/", { params })
      .then((res) => {
        this.reviews = res.data.reviews;
        this.courseData = res.data.course;

        this.reviews.forEach((review) => {
          if (review.studentId === this.$store.getters.getStudentObjId) {
            this.written = true;
          }
        });
        
        for (let i = 0; i < this.reviews.length; i++) {
          this.reviews[i].rating = parseInt(this.reviews[i].rating);
        }
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

.label {
  padding: 5px 10px;
  background: grey;
  border: 1px solid grey;
  border-radius: 20px;
  color: white;
  font-weight: bold;
  margin-left: 5px;
}

.course-pic {
  height: 120px;
  margin-left: -10px;
  margin-top: 10px;
}

.review {
  padding: 0 30px;
  margin-top: 20px;
  width: 80%;
  border: 1px solid white;
  border-radius: 20px;
  background: rgb(234, 232, 232);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.filled-dot {
  height: 15px;
  width: 15px;
  margin-left: 2px;
  background-color: rgb(145, 145, 145);
  border-radius: 50%;
  display: inline-block;
}

.empty-dot {
  height: 11px;
  width: 11px;
  margin-left: 2px;
  border: 2px solid rgb(145, 145, 145);
  border-radius: 50%;
  display: inline-block;
}

.review-form {
  padding: 0 30px;
  margin-top: 20px;
  width: 80%;
  border: 1px solid white;
  border-radius: 20px;
  background: rgb(234, 232, 232);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.submit {
  width: 150px;
  height: 40px;
  margin: 20px 0;
  font-weight: bold;
  font-size: 16px;
  background: green;
  color: white;
  border: 1px solid green;
  border-radius: 20px;
  cursor: pointer;
}

.submit:hover {
  background: grey;
  border: 1px solid grey;
}

.textInput {
  width: 90%;
  height: 18px;
  padding: 10px 15px;
  font-size: 18px;
  border: 2px solid grey;
  border-radius: 10px;
}
</style>
