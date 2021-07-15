import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import Contact from "@/pages/Contact.vue";
import Profile from '@/pages/Profile.vue';
import Post from '@/pages/Post.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/profile/:name",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/posts/:name/post-id/:post_id",
    name: "Posts",
    component: Post,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;