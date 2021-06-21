import dotenv from "dotenv";

dotenv.config();

const DJANGO_URL = process.env.DJANGO_URL
  ? process.env.DJANGO_URL
  : process.env.VUE_APP_DJANGO_URL
  ? process.env.VUE_APP_DJANGO_URL
  : "http://localhost:8000/";

export default {
  DJANGO_URL: DJANGO_URL,
};
