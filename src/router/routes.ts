import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
    ]
  },
  {
    path: '/soundboard',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'boards', component: () => import('pages/BoardList.vue') },
      { path: 'board/:id', component: () => import('pages/Board.vue') },
      { path: 'records', component: () => import('pages/Records.vue') },
      { path: 'settings', component: () => import('pages/Settings.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
