import React from 'react';
import { Outlet, useRoutes } from 'react-router-dom';
import { ROUTES } from './routes.const';

export const AppRoutes = () => {
  const routes = [
    {
      path: ROUTES.MAIN,
      element: <MainWrapper />, // Додаємо елемент MainWrapper, який буде містити Outlet
      children: [
        { path: ROUTES.MAIN_TODOLIST, element: <div>ToDoList</div> },
        { path: ROUTES.MAIN_QUOTES, element: <div>Quotes</div> },
      ],
    },
    {
      path: '*',
      element: <div>Not Found Page</div>,
    },
  ];
  const routing = useRoutes(routes);

  return routing;
};

// Додаємо компонент MainWrapper, який містить Outlet
const MainWrapper = () => (
  <div>
    <div>Wrapper</div>
    <Outlet />
  </div>
);
