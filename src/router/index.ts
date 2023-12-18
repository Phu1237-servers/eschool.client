import { createRouter, createWebHistory } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import HomeView from '../views/HomeView.vue'
import CourseView from '../views/CourseView.vue'
import LessonsView from '../views/LessonView.vue'

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
        default: HomeView,
        layout: TheHeader,
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
  ]
})

export default router
