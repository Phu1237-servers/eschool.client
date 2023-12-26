import { createRouter, createWebHistory } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import HomeView from '../views/HomeView.vue'
import CourseView from '../views/CourseView.vue'
import LessonsView from '../views/LessonView.vue'
import LoginView from '@/views/Auth/LoginView.vue'
import RegisterView from '@/views/Auth/RegisterView.vue'
import LearningPathsView from '@/views/LearningPathsView.vue'
import { useUserStore } from '@/stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        header: TheHeader,
        footer: TheFooter,
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: LoginView,
        header: TheHeader,
        footer: TheFooter,
      },
      meta: {
        guest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      components: {
        default: RegisterView,
        header: TheHeader,
        footer: TheFooter,
      },
      meta: {
        guest: true
      }
    },
    {
      path: '/learning-paths',
      name: 'learning-paths',
      components: {
        default: LearningPathsView,
        header: TheHeader,
        footer: TheFooter,
      }
    },
    {
      path: '/courses/:id',
      name: 'courses.show',
      components: {
        default: CourseView,
        header: TheHeader,
        footer: TheFooter,
      }
    },
    {
      path: '/lessons/:id',
      name: 'lessons.show',
      components: {
        default: LessonsView,
        header: TheHeader,
        footer: TheFooter,
      }
    },
  ],
  scrollBehavior() {
    return { left: 0, top: 0, behavior: "smooth" };
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.guest) {
    const token = localStorage.getItem('token');

    if (token) {
      return next('/');
    }
  }
  const token = localStorage.getItem('token');
  const { fetchUser, isLoggedIn } = useUserStore();
  if (token) {
    if (!isLoggedIn()) {
      fetchUser().then(() => {
        return next();
      });
    }
  }
  next();
})

export default router
