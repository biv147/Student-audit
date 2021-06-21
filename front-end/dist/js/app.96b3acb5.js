(function(t){function e(e){for(var s,r,o=e[0],d=e[1],l=e[2],c=0,m=[];c<o.length;c++)r=o[c],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&m.push(a[r][0]),a[r]=0;for(s in d)Object.prototype.hasOwnProperty.call(d,s)&&(t[s]=d[s]);u&&u(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,o=1;o<i.length;o++){var d=i[o];0!==a[d]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},n=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=d;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";i("85ec")},"039a":function(t,e,i){"use strict";i("7174")},"1e1a":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},n=[],r={name:"App"},o=r,d=(i("034f"),i("2877")),l=Object(d["a"])(o,a,n,!1,null,null,null),u=l.exports,c=i("2f62");s["a"].use(c["a"]);var m=new c["a"].Store({state:function(){return{studentNumber:"",firstName:"",lastName:"",email:"",universityName:"",universityId:"",studentObjId:"",adminUniversityName:"",adminUniversityId:"",adminFirstName:"",adminLastName:"",adminEmail:""}},mutations:{setStudentNumber:function(t,e){t.studentNumber=e},setFirstName:function(t,e){t.firstName=e},setLastName:function(t,e){t.lastName=e},setEmail:function(t,e){t.email=e},setUniversityName:function(t,e){t.universityName=e},setUniversityId:function(t,e){t.universityId=e},setStudentObjId:function(t,e){t.studentObjId=e},reset:function(t){t.studentNumber="",t.firstName="",t.lastName="",t.email="",t.universityName="",t.universityId="",t.studentObjId=""},setAdminFirstName:function(t,e){t.adminFirstName=e},setAdminLastName:function(t,e){t.adminLastName=e},setAdminEmail:function(t,e){t.adminEmail=e},setAdminUniversityId:function(t,e){t.adminUniversityId=e},setAdminUniversityName:function(t,e){t.adminUniversityName=e}},getters:{getStudentNumber:function(t){return t.studentNumber},getFirstName:function(t){return t.firstName},getLastName:function(t){return t.lastName},getEmail:function(t){return t.email},getUniversityId:function(t){return t.universityId},getUniversityName:function(t){return t.universityName},getAll:function(t){return t},getStudentObjId:function(t){return t.studentObjId},getAdminFirstName:function(t){return t.adminFirstName},getAdminLastName:function(t){return t.adminLastName},getAdminEmail:function(t){return t.adminEmail},getAdminUniversityId:function(t){return t.adminUniversityId},getAdminUniversityName:function(t){return t.adminUniversityName}}}),g=i("8c4f"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title-card"},[i("table",{staticStyle:{width:"100%"}},[i("tr",[t._m(0),i("td",{staticStyle:{width:"92%"}},[i("h1",{staticStyle:{margin:"15px 0 0 15px",padding:"0"}},[t._v(t._s(t.getFullName))]),i("h3",{staticStyle:{margin:"5px 15px",padding:"0"}},[t._v(" "+t._s(t.studentNum)+" | "+t._s(t.email)+" ")]),i("h4",{staticStyle:{margin:"5px 15px",padding:"0","font-weight":"normal"}},[t._v(" "+t._s(t.programSelected)+" ")]),i("h4",{staticStyle:{margin:"5px 15px",padding:"0","font-weight":"normal"}},[t._v(" "+t._s(t.university)+" ")]),i("button",{staticClass:"viewsubmit",staticStyle:{height:"30px",width:"100px","margin-left":"12px","background-color":"orange",border:"1px solid orange"},on:{click:function(e){return t.logout()}}},[t._v(" Logout ")])])])])]),i("br"),i("div",{staticClass:"card"},[i("h1",{staticStyle:{"margin-left":"10px"}},[t._v("Program Map")]),t._m(1),i("br"),i("table",[i("tr",t._l(t.semesters,(function(e,s){return i("td",{key:e.name,staticStyle:{padding:"5px","vertical-align":"top"}},[i("div",{staticClass:"semester",class:{"semester-complete":e.done,"semester-remaining":!e.done}},[i("h1",{staticStyle:{"text-align":"center"}},[t._v(t._s(e.semester))]),t._l(e.courses,(function(a,n){return i("div",{key:a.name,staticClass:"course"},[i("div",{staticClass:"tooltip",staticStyle:{"font-weight":"bold"},on:{click:function(i){return t.openCourseDescription(a,e.done)}}},[t._v(" "+t._s(a.name)+" "),i("span",{staticClass:"tooltiptext"},[t._v(t._s(a.fullName)+" ")])]),-1!==a.grade?i("div",[t._v("Grade: "+t._s(a.grade))]):t._e(),a.removeable&&!1===e.done?i("div",{staticClass:"remove-link",on:{click:function(e){return t.removeCourse(s,n)}}},[t._v(" Remove ")]):t._e()])})),e.done?t._e():i("div",{staticClass:"course"},[i("select",{ref:s,refInFor:!0,staticClass:"electiveOptions",on:{change:function(e){return t.valueChosen(e,s)}}},[i("option",{attrs:{value:"blank"}}),t._l(t.extraCourses,(function(e){return i("option",{key:e.name},[""===e.name?i("span"):i("span",[t._v(t._s(e.fullName)+" ("+t._s(e.name)+")")])])}))],2)])],2)])})),0)])]),i("br"),i("button",{staticClass:"submit",on:{click:function(e){return t.updateMap()}}},[t._v("Save Changes")])])},v=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",{staticStyle:{width:"8%"}},[s("img",{staticClass:"profile-pic",attrs:{src:i("c3e7"),alt:"profile-pic"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"margin-left":"10px"}},[t._v("The following is your program map. Semesters in "),i("b",{staticStyle:{color:"orange"}},[t._v("orange")]),t._v(" are not yet complete, and semesters in "),i("b",{staticStyle:{color:"lightgreen"}},[t._v("green")]),t._v(" have been completed (your grade will be visible) "),i("br"),i("br"),t._v(" "),i("i",[t._v("Click on a course to learn more")])])}],h=(i("a434"),i("b0c0"),i("fb6a"),i("1276"),i("ac1f"),i("159b"),i("caad"),i("2532"),i("a15b"),i("bc3a")),f=i.n(h),b=Object({NODE_ENV:"production",BASE_URL:"/"}).DJANGO_URL?Object({NODE_ENV:"production",BASE_URL:"/"}).DJANGO_URL:"http://localhost:8000/",_={DJANGO_URL:b},y={name:"StudentSpecificProgram",data:function(){return{firstName:this.$store.getters.getFirstName,lastName:this.$store.getters.getLastName,studentNum:this.$store.getters.getStudentNumber,email:this.$store.getters.getEmail,programSelected:"",university:this.$store.getters.getUniversityName,plan:{},semesters:[],extraCourses:[""]}},methods:{logout:function(){var t=this,e={student_id:this.$store.getters.getStudentNumber,university_id:this.$store.getters.getUniversityId};f.a.get(_.DJANGO_URL+"emails/logout/",{params:e}).then((function(){t.$store.commit("resetAll"),t.$router.push({name:"Login"})}))},updateMap:function(){this.plan.plan=this.semesters,this.plan.electives=this.extraCourses;var t={plan:this.plan};f.a.post(_.DJANGO_URL+"database/update_plan/",{params:t}).then((function(t){console.log(t)}))},removeCourse:function(t,e){var i=this.semesters[t].courses[e];this.semesters[t].courses.splice(e,1),this.extraCourses.push(i)},openCourseDescription:function(t,e){this.$router.push({name:"CourseDescription",query:{name:t.name,done:e}})},valueChosen:function(t,e){if(""!==t.target.value){for(var i=t.target.value.split(" (")[1].slice(0,-1),s={},a={},n=0;n<this.extraCourses.length;n++)if(this.extraCourses[n].name===i){s=JSON.parse(JSON.stringify(this.extraCourses[n])),a=JSON.parse(JSON.stringify(this.extraCourses[n]));break}var r=[],o=[];this.semesters.forEach((function(t,i){for(var s=0;s<t.courses.length;s++)i<e?r.push(t.courses[s]):o.push(t.courses[s])}));for(var d=0;d<r.length;d++)s.prerequisites.includes(r[d].name)&&s.prerequisites.splice(s.prerequisites.indexOf(r[d].name),1);if(s.prerequisites.length>0)alert("Not all pre-requisites have been satisfied: "+s.prerequisites.join(", "));else{a.removeable=!0,a.grade=-1,this.semesters[e].courses.push(a);var l=-1;this.extraCourses.forEach((function(t,e){t.name===s.name&&(l=e)})),this.extraCourses.splice(l,1)}}}},computed:{getFullName:function(){return this.firstName.charAt(0).toUpperCase()+this.firstName.slice(1)+" "+this.lastName.charAt(0).toUpperCase()+this.lastName.slice(1)}},mounted:function(){var t=this;""===this.$store.getters.getFirstName&&this.$router.push({name:"Login"});var e={studentID:this.$store.getters.getStudentObjId};f.a.get(_.DJANGO_URL+"database/get_plan/",{params:e}).then((function(e){t.plan=e.data,t.semesters=e.data.plan,t.extraCourses=e.data.electives}))}},N=y,w=(i("72e9"),Object(d["a"])(N,p,v,!1,null,null,null)),S=w.exports,x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title-card"},[i("table",{staticStyle:{width:"100%"}},[i("tr",[t._m(0),i("td",{staticStyle:{width:"92%"}},[i("h1",{staticStyle:{margin:"15px 0 0 15px",padding:"0"}},[t._v(t._s(t.courseData.name))]),i("h4",{staticStyle:{margin:"5px 15px",padding:"0","font-weight":"normal"}},[t._v(" "+t._s(t.courseId)+" ")])])])])]),i("h2",[t._v("Reviews")]),t._l(t.reviews,(function(e){return i("div",{key:e._id,staticClass:"review"},[i("br"),t._v(" "),t._l(e.rating,(function(t){return i("span",{key:t,staticClass:"filled-dot"})})),t._l(5-e.rating,(function(t){return i("span",{key:10-t,staticClass:"empty-dot"})})),i("div",[i("br"),i("i",[t._v('"'+t._s(e.response)+'"')])]),i("br"),e.studentId===t.$store.getters.getStudentObjId?i("div",[i("button",{staticClass:"submit",staticStyle:{margin:"0","background-color":"orange",border:"1px solid orange"},on:{click:function(i){return t.deleteReview(e._id)}}},[t._v("Delete Review")]),i("br"),i("br")]):t._e()],2)})),t.numProgramsStudentIsEnrolledIn>0?i("div",t._l(t.blank_plans,(function(e){return i("div",{key:e.name},[t._v(" "+t._s(e.name)+" ")])})),0):i("div",[t._v(" query for blank plans, and show a list of blank plans ")]),t.finished&&!t.written?i("div",[i("h2",[t._v("Submit Your Review")]),i("div",{staticClass:"review-form"},[i("br"),i("span",[t._v("Review")]),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.setRating,expression:"setRating"}],staticClass:"textInput",attrs:{type:"number",min:"1",max:"5"},domProps:{value:t.setRating},on:{input:function(e){e.target.composing||(t.setRating=e.target.value)}}}),i("br"),i("br"),i("span",[t._v("Description")]),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:t.setDescription,expression:"setDescription"}],staticClass:"textInput",attrs:{type:"text"},domProps:{value:t.setDescription},on:{input:function(e){e.target.composing||(t.setDescription=e.target.value)}}}),i("button",{staticClass:"submit",on:{click:t.submitReview}},[t._v("Submit")])])]):t._e()],2)},C=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",{staticStyle:{width:"8%"}},[s("img",{staticClass:"course-pic",attrs:{src:i("df85"),alt:"profile-pic"}})])}],L={name:"CourseDescription",data:function(){return{reviews:[],courseData:{},courseId:"",finished:!1,written:!1,setRating:0,setDescription:""}},methods:{submitReview:function(){var t=this,e={rating:this.setRating,response:this.setDescription,courseId:this.courseId,studentId:this.$store.getters.getStudentObjId};f.a.post(_.DJANGO_URL+"database/add_review/",{params:e}).then((function(e){console.log(e),t.reviews.push({_id:e.data,rating:t.setRating,response:t.setDescription,studentId:t.$store.getters.getStudentObjId}),t.written=!0}))},deleteReview:function(t){var e=this;console.log(t);var i={reviewId:t};f.a.get(_.DJANGO_URL+"database/delete_review/",{params:i}).then((function(t){for(var i=-1,s=0;s<e.reviews.length;s++)if(e.reviews[s]._id===t){i=s;break}e.reviews.splice(i,1),e.written=!1}))}},mounted:function(){var t=this;if(this.$route.query.name&&this.$route.query.done){this.courseId=this.$route.query.name,this.finished=Boolean(this.$route.query.done);var e={courseId:this.courseId};f.a.get(_.DJANGO_URL+"database/get_course_data/",{params:e}).then((function(e){t.reviews=e.data.reviews,t.courseData=e.data.course,t.reviews.forEach((function(e){e.studentId===t.$store.getters.getStudentObjId&&(t.written=!0)}))}))}else alert("Error: Cannot access this page directly"),close()}},$=L,A=(i("bf10"),Object(d["a"])($,x,C,!1,null,null,null)),P=A.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"100%"}},[i("h1",{staticClass:"loginh1"},[t._v("Audit Trail")]),i("div",{staticClass:"logincard"},[i("h2",{staticClass:"loginh2"},[t._v("Student Login")]),i("div",{staticClass:"form-label"},[t._v("Student Number")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.loginStudentNumber,expression:"loginStudentNumber"}],staticClass:"textInput",attrs:{type:"number"},domProps:{value:t.loginStudentNumber},on:{input:function(e){e.target.composing||(t.loginStudentNumber=e.target.value)}}}),i("br"),i("br"),i("div",{staticClass:"form-label"},[t._v("Password")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.loginPassword,expression:"loginPassword"}],staticClass:"textInput",attrs:{type:"password"},domProps:{value:t.loginPassword},on:{input:function(e){e.target.composing||(t.loginPassword=e.target.value)}}}),i("br"),i("br"),i("div",{staticClass:"form-label"},[t._v("University")]),i("select",{directives:[{name:"model",rawName:"v-model",value:t.loginUniversity,expression:"loginUniversity"}],staticClass:"dropdown",attrs:{name:"userSelect"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.loginUniversity=e.target.multiple?i:i[0]}}},t._l(t.uniList,(function(e){return i("option",{key:e.id,domProps:{value:e.id}},[t._v(" "+t._s(e.value)+" ")])})),0),i("button",{staticClass:"loginsubmit",on:{click:t.loginProcedure}},[t._v("Submit")]),i("br"),i("br"),t.showLoginLoading?i("circle-8",{staticStyle:{"margin-left":"45%"}}):t._e()],1),i("div",{staticClass:"error"},[t._v(t._s(t.errorMsg))])])},I=[],E=i("62b7"),O={name:"Welcome",components:{Circle8:E["a"]},data:function(){return{loginStudentNumber:100651838,loginPassword:123456,loginUniversity:"605655053cae059dff8893d0",errorMsg:"",showLoginLoading:!1,showSignupLoading:!1,uniList:[]}},methods:{loginProcedure:function(){var t=this;if(""!==this.loginStudentNumber&&""!==this.loginPassword){this.showLoginLoading=!0,this.errorMsg="";var e={studentID:this.loginStudentNumber,password:this.loginPassword,university:this.loginUniversity};f.a.get(_.DJANGO_URL+"database/login/",{params:e}).then((function(e){if(t.showLoginLoading=!1,"error"!==e.data){var i={};t.uniList.forEach((function(e){e.id===t.loginUniversity&&(i=e)})),t.$store.commit("setStudentNumber",e.data.studentNumber),t.$store.commit("setFirstName",e.data.firstName),t.$store.commit("setLastName",e.data.lastName),t.$store.commit("setEmail",e.data.email),t.$store.commit("setUniversityId",i.id),t.$store.commit("setUniversityName",i.value),t.$store.commit("setStudentObjId",e.data._id),t.$router.push({name:"Program"})}else t.errorMsg=e.data.error})).catch((function(t){return console.error(t)}))}else this.errorMsg="Error: Must Fill All Values"}},mounted:function(){var t=this;f.a.get(_.DJANGO_URL+"database/get_universities/").then((function(e){e.data.error?t.errorMsg=e.data.error:e.data.forEach((function(e){t.uniList.push({value:e.name,id:e._id})}))})).catch((function(t){return console.error(t)}))}},k=O,D=(i("039a"),Object(d["a"])(k,U,I,!1,null,null,null)),R=D.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title-card"},[i("table",{staticStyle:{width:"100%"}},[i("tr",[t._m(0),i("td",{staticStyle:{width:"92%"}},[i("h1",{staticStyle:{margin:"15px 0 0 15px",padding:"0"}},[t._v(t._s(t.getName))]),i("h3",{staticStyle:{margin:"5px 15px",padding:"0"}},[t._v(" "+t._s(this.$store.getters.getStudentNumber)+" | "+t._s(this.$store.getters.getEmail)+" ")]),i("h4",{staticStyle:{margin:"5px 15px",padding:"0","font-weight":"normal"}},[t._v(" "+t._s(this.$store.getters.getUniversityName)+" ")]),i("button",{staticClass:"viewsubmit",staticStyle:{height:"30px",width:"100px","margin-left":"12px","background-color":"orange",border:"1px solid orange"},on:{click:function(e){return t.logout()}}},[t._v(" Logout ")])])])])]),t.programsEnrolled.plan?i("div",{staticClass:"programbodycard"},[i("table",{staticStyle:{width:"100%"}},[i("tr",{staticStyle:{margin:"0"}},[i("td",{staticStyle:{width:"40%",padding:"0 3%"}},[i("h2",[t._v(t._s(t.programsEnrolled.name))])]),i("td",{staticStyle:{width:"20%",padding:"0 3%"}},[i("p",[t._v("Number of Study Semesters: "+t._s(t.programsEnrolled.plan.length))])]),i("td",{staticStyle:{width:"20%",padding:"0 3%"}},[i("button",{staticClass:"viewsubmit",on:{click:function(e){return t.switchView()}}},[t._v("View")]),t._v(" "),i("button",{staticClass:"deleteButton",on:{click:function(e){return t.deletePlan()}}},[t._v("X")])])])])]):i("div",[i("div",{staticClass:"error",staticStyle:{color:"red"}},[t._v(" You have not signed up for any programs yet. Enroll in a program below from your university. ")]),t._l(t.prospectivePrograms,(function(e){return i("div",{key:e._id,staticClass:"programbodycard"},[i("h1",[t._v(t._s(e.name))]),i("table",{staticStyle:{width:"100%"}},[i("tr",{staticStyle:{margin:"0"}},[i("td",{staticStyle:{width:"20%",padding:"0 3%"}},[i("b",[t._v(t._s(t.university))])]),i("td",{staticStyle:{width:"60%",padding:"0 3%"}},[i("p",[t._v(t._s(e.description))])]),i("td",[i("button",{staticClass:"viewsubmit",staticStyle:{width:"100%"},on:{click:function(i){return t.choosePlan(e._id)}}},[t._v(" Select ")])])])])])}))],2)])},F=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",{staticStyle:{width:"8%"}},[s("img",{staticClass:"profile-pic",attrs:{src:i("c3e7"),alt:"profile-pic"}})])}],J={name:"Program",data:function(){return{firstName:this.$store.getters.getFirstName,lastName:this.$store.getters.getLastName,email:this.$store.getters.getEmail,studentNumber:this.$store.getters.getStudentNumber,university:this.$store.getters.getUniversityName,programsEnrolled:{},prospectivePrograms:[]}},computed:{getName:function(){return this.firstName+" "+this.lastName}},methods:{deletePlan:function(){var t=this;if(confirm("Are you sure you want to withdraw from the program?")){console.log(this.programsEnrolled._id);var e={plan:this.programsEnrolled._id};f.a.get(_.DJANGO_URL+"database/delete_plan/",{params:e}).then((function(){t.programsEnrolled={};var e={university:t.$store.getters.getUniversityId};f.a.get(_.DJANGO_URL+"database/get_blank_plans/",{params:e}).then((function(e){t.prospectivePrograms=e.data}))}))}},logout:function(){var t=this,e={student_id:this.$store.getters.getStudentNumber,university_id:this.$store.getters.getUniversityId};f.a.get(_.DJANGO_URL+"emails/logout/",{params:e}).then((function(){t.$store.commit("resetAll"),t.$router.push({name:"Login"})}))},switchView:function(){this.$router.push({name:"StudentSpecificProgram"})},choosePlan:function(t){var e=this;if(confirm("Are you sure you want to select this plan?")){var i={plan:t,student:this.$store.getters.getStudentObjId};f.a.get(_.DJANGO_URL+"database/select_plan/",{params:i}).then((function(t){console.log(t),e.$router.push({name:"StudentSpecificProgram"})}))}}},mounted:function(){var t=this;this.university=this.$store.getters.getUniversityName,""===this.$store.getters.getFirstName&&this.$router.push({name:"Login"});var e={studentID:this.$store.getters.getStudentObjId};f.a.get(_.DJANGO_URL+"database/get_plan/",{params:e}).then((function(e){e.data.error?console.log(e.data.error):t.programsEnrolled=e.data})).then((function(){if(!t.programsEnrolled.plan){var e={university:t.$store.getters.getUniversityId};f.a.get(_.DJANGO_URL+"database/get_blank_plans/",{params:e}).then((function(e){t.prospectivePrograms=e.data}))}})).catch((function(t){console.log(t)}))}},G=J,M=(i("d439"),Object(d["a"])(G,j,F,!1,null,null,null)),q=M.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title-card",staticStyle:{"margin-left":"10px"}},[i("table",{staticStyle:{width:"100%"}},[i("tr",[t._m(0),i("td",{staticStyle:{width:"92%"}},[i("h1",{staticStyle:{margin:"15px 0 0 15px",padding:"0"}},[t._v(t._s(t.adminName))]),i("h4",{staticStyle:{margin:"5px 15px",padding:"0","font-weight":"normal"}},[t._v(" "+t._s(t.adminEmail)+" ")]),i("h4",{staticStyle:{margin:"5px 15px",padding:"0","font-weight":"normal"}},[i("b",[t._v(t._s(t.adminUniversity))])]),i("button",{staticClass:"loginsubmit",staticStyle:{height:"40px",margin:"0","background-color":"red",border:"1px solid red"},on:{click:function(e){return t.logout()}}},[t._v(" Logout ")])])])])]),i("br"),i("table",{staticStyle:{width:"100%"}},[i("tr",{staticStyle:{width:"65%"}},[i("td",{staticStyle:{"vertical-align":"top"}},[i("h2",{staticStyle:{"margin-left":"10px"}},[t._v("Students")]),t._l(t.students,(function(e,s){return i("div",{key:e._id,staticClass:"adminBodyCard"},[i("table",{staticStyle:{width:"100%"}},[i("tr",{staticStyle:{margin:"0"}},[i("td",{staticStyle:{width:"20%"}},[i("h3",[t._v(t._s(e.firstName+" "+e.lastName))])]),i("td",{staticStyle:{width:"12%"}},[i("p",[t._v(t._s(e.studentNumber))])]),i("td",{staticStyle:{width:"50%"}},[i("p",{staticStyle:{"margin-left":"30px"}},[t._v(t._s(e.email))])]),i("td",{staticStyle:{width:"37%"}},[i("button",{staticClass:"loginsubmit",staticStyle:{height:"40px",margin:"0","background-color":"orange",border:"1px solid orange"},on:{click:function(e){return t.deleteStudent(s)}}},[t._v(" Delete Student ")])])])])])}))],2),i("td",{staticStyle:{width:"35%","vertical-align":"top"}},[i("div",{staticClass:"adminlogincard",staticStyle:{"margin-top":"25px"}},[i("h2",{staticClass:"loginh2"},[t._v("Add Student")]),i("div",{staticClass:"form-label"},[t._v("First Name")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.addFirstName,expression:"addFirstName"}],staticClass:"textInput",attrs:{type:"text"},domProps:{value:t.addFirstName},on:{input:function(e){e.target.composing||(t.addFirstName=e.target.value)}}}),i("br"),i("br"),i("div",{staticClass:"form-label"},[t._v("Last Name")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.addLastName,expression:"addLastName"}],staticClass:"textInput",attrs:{type:"text"},domProps:{value:t.addLastName},on:{input:function(e){e.target.composing||(t.addLastName=e.target.value)}}}),i("br"),i("br"),i("div",{staticClass:"form-label"},[t._v("Student Number")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.addStudentNumber,expression:"addStudentNumber"}],staticClass:"textInput",attrs:{type:"number"},domProps:{value:t.addStudentNumber},on:{input:function(e){e.target.composing||(t.addStudentNumber=e.target.value)}}}),i("br"),i("br"),i("div",{staticClass:"form-label"},[t._v("Password")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.addPassword,expression:"addPassword"}],staticClass:"textInput",attrs:{type:"password"},domProps:{value:t.addPassword},on:{input:function(e){e.target.composing||(t.addPassword=e.target.value)}}}),i("br"),i("br"),i("div",{staticClass:"form-label"},[t._v("Email")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.addEmail,expression:"addEmail"}],staticClass:"textInput",attrs:{type:"email"},domProps:{value:t.addEmail},on:{input:function(e){e.target.composing||(t.addEmail=e.target.value)}}}),i("br"),i("button",{staticClass:"loginsubmit",on:{click:t.addStudent}},[t._v(" Submit ")]),i("br"),i("br")])])])]),i("br"),i("br"),i("br")])},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",{staticStyle:{width:"8%"}},[s("img",{staticClass:"profile-pic",attrs:{src:i("c3e7"),alt:"profile-pic"}})])}],B={name:"TeachVraj",components:{},data:function(){return{addFirstName:"Preet",addLastName:"Khasakia",addStudentNumber:"100653168",addPassword:"123456",addEmail:"preet.khasakia@ontariotechu.net",errorMsg:"",showLoginLoading:!1,showSignupLoading:!1,adminName:"",adminEmail:"",adminUniversity:"",students:[]}},methods:{addStudent:function(){var t=this;if(""!==this.addFirstName&&""!==this.addLastName&&""!==this.addStudentNumber&&""!==this.addPassword&&""!==this.addEmail&&confirm("Are you sure you want to add this student?")){var e={firstName:this.addFirstName,lastName:this.addLastName,university:this.$store.getters.getAdminUniversityId,studentNumber:this.addStudentNumber,password:this.addPassword,email:this.addEmail};f.a.get(_.DJANGO_URL+"admin/add_student/",{params:e}).then((function(e){t.students.push({firstName:t.addFirstName,lastName:t.addLastName,university:t.$store.getters.getAdminUniversityId,studentNumber:t.addStudentNumber,password:t.addPassword,email:t.addEmail,_id:e.data})}))}},deleteStudent:function(t){var e=this;if(confirm("Are you sure you want to delete this student?")){var i=this.students[t],s={_id:i._id};f.a.get(_.DJANGO_URL+"admin/remove_student/",{params:s}).then((function(){e.students.splice(t,1)}))}},logout:function(){this.$router.push({name:"AdminLogin"})}},mounted:function(){var t=this;""===this.$store.getters.getAdminFirstName&&this.$router.push({name:"AdminLogin"}),this.adminName=this.$store.getters.getAdminFirstName+" "+this.$store.getters.getAdminLastName,this.adminEmail=this.$store.getters.getAdminEmail,this.adminUniversity=this.$store.getters.getAdminUniversityName;var e={universityId:this.$store.getters.getAdminUniversityId};f.a.get(_.DJANGO_URL+"admin/get_students/",{params:e}).then((function(e){t.students=e.data}))}},W=B,Y=(i("6644"),Object(d["a"])(W,V,T,!1,null,null,null)),K=Y.exports,X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%",height:"100%"}},[i("h1",{staticClass:"loginh1"},[t._v("Audit Trail")]),i("div",{staticClass:"logincard"},[i("h2",{staticClass:"loginh2"},[t._v("Admin Login")]),i("div",{staticClass:"form-label"},[t._v("Email")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.loginAdmin,expression:"loginAdmin"}],staticClass:"textInput",attrs:{type:"email"},domProps:{value:t.loginAdmin},on:{input:function(e){e.target.composing||(t.loginAdmin=e.target.value)}}}),i("br"),i("br"),i("div",{staticClass:"form-label"},[t._v("Password")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.loginPassword,expression:"loginPassword"}],staticClass:"textInput",attrs:{type:"password"},domProps:{value:t.loginPassword},on:{input:function(e){e.target.composing||(t.loginPassword=e.target.value)}}}),i("br"),i("button",{staticClass:"loginsubmit",on:{click:t.loginProcedure}},[t._v("Submit")]),i("br"),i("br")]),i("div",{staticClass:"error"},[t._v(t._s(t.errorMsg))])])},z=[],H={name:"Welcome",data:function(){return{loginAdmin:"aryan.s.kukreja@gmail.com",loginPassword:"123456",errorMsg:"",showLoginLoading:!1,showSignupLoading:!1}},methods:{loginProcedure:function(){var t=this;if(""!==this.loginAdmin&&""!==this.loginPassword){this.showLoginLoading=!0,this.errorMsg="";var e={email:this.loginAdmin,password:this.loginPassword};f.a.get(_.DJANGO_URL+"admin/login/",{params:e}).then((function(e){t.showLoginLoading=!1,e.data.error?t.errorMsg=e.data.error:(console.log(e),t.$store.commit("setAdminEmail",e.data.email),t.$store.commit("setAdminUniversityName",e.data.university.name),t.$store.commit("setAdminUniversityId",e.data.university._id),t.$store.commit("setAdminFirstName",e.data.firstName),t.$store.commit("setAdminLastName",e.data.lastName),t.$router.push({name:"AdminPanel"}))})).catch((function(t){return console.error(t)}))}else this.errorMsg="Error: Must Fill All Values"}}},Q=H,Z=(i("fc10"),Object(d["a"])(Q,X,z,!1,null,null,null)),tt=Z.exports;s["a"].use(g["a"]);var et=new g["a"]({routes:[{path:"/student-login",name:"Login",component:R},{path:"/",name:"Login",component:R},{path:"/select-program",name:"Program",component:q},{path:"/view-plan",name:"StudentSpecificProgram",component:S},{path:"/course-description",name:"CourseDescription",component:P},{path:"/admin-portal",name:"AdminPanel",component:K},{path:"/admin-login",name:"AdminLogin",component:tt}]});s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(u)},router:et,store:m}).$mount("#app")},6644:function(t,e,i){"use strict";i("a453")},"6c95":function(t,e,i){},7174:function(t,e,i){},"72e9":function(t,e,i){"use strict";i("1e1a")},"786a":function(t,e,i){},"85ec":function(t,e,i){},a453:function(t,e,i){},bf10:function(t,e,i){"use strict";i("6c95")},c3e7:function(t,e,i){t.exports=i.p+"img/profile.6cd35e6c.png"},d439:function(t,e,i){"use strict";i("ff29")},df85:function(t,e,i){t.exports=i.p+"img/course.39cd8859.png"},fc10:function(t,e,i){"use strict";i("786a")},ff29:function(t,e,i){}});
//# sourceMappingURL=app.96b3acb5.js.map