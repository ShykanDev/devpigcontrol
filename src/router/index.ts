import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { UseUserPreferences } from '@/store/UseUserPreferences'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      requirePaid:true
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta:{
      requirePaid:true
    }
  },
  {
    path: '/sales',
    name: 'sales',
    component: () => import(/* webpackChunkName: "sales" */ '../views/SalesView.vue'),
    meta:{
      requirePaid:true
    }
  },
  {
    path:'/settings',
    name: 'settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/SettingsView.vue'),
    meta:{
      requirePaid:true
    }
  },
  {
    path:'/history',
    name: 'history',
    component: () => import(/* webpackChunkName: "history" */ '../views/HistoryView.vue'),
    meta:{
      requirePaid:true
    }
  },
  {
    path:'/error',
    name: 'error',
    component: () => import(/* webpackChunkName: "error" */ '../views/ErrorPageNotPaid.vue'),
    meta:{
      requirePaid:false
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})



router.beforeEach((to, from, next) => {
  const userPreferences = UseUserPreferences();
  if (to.meta.requirePaid === true && !userPreferences.getIsPagePaid) {
    console.log('Not paid', userPreferences.getIsPagePaid);
    next({ name: 'error' });
  } else if (to.meta.requirePaid === true && userPreferences.getIsPagePaid) {
    console.log('Paid', userPreferences.getIsPagePaid);
    next();
  } else {
    next(); // Si no tiene el meta requirePaid o ya está pagado, permite la navegación
  }
});

export default router
