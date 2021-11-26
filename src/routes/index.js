/* eslint-disable import/prefer-default-export */
import React from 'react';

const Routes = [
  {
    path: '/',
    component: React.lazy(() => import('../pages/Home')),
    exact: true,
  },
  {
    path: '/login',
    component: React.lazy(() => import('../pages/Login')),
    exact: true,
  },
];

export { Routes };
