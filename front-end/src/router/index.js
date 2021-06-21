import Vue from "vue";
import router from "vue-router";

import StudentSpecificProgram from "@/components/StudentSpecificProgram";
import CourseDescription from "@/components/CourseDescription";
import Login from "@/components/Login";
import Program from "@/components/Program";
import AdminPanel from "@/components/AdminPanel";
import AdminLogin from "@/components/AdminLogin";

Vue.use(router);

export default new router({
  routes: [
    {
      path: "/student-login",
      name: "Login",
      component: Login,
    },
    {
      path: "/",
      name: "Login",
      component: Login,
    },
    {
      path: "/select-program",
      name: "Program",
      component: Program,
    },
    {
      path: "/view-plan",
      name: "StudentSpecificProgram",
      component: StudentSpecificProgram,
    },
    {
      path: "/course-description",
      name: "CourseDescription",
      component: CourseDescription,
    },
    {
      path: "/admin-portal",
      name: "AdminPanel",
      component: AdminPanel,
    },
    {
      path: "/admin-login",
      name: "AdminLogin",
      component: AdminLogin,
    },
  ],
});
