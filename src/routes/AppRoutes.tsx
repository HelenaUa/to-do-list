import React from 'react';
import { useRoutes } from 'react-router-dom';
import { ROUTES } from './routes.const';
import { MainWrapper } from 'views';
import Home from '../pages/Home/Home';
import ToDoList from '../pages/ToDoList/ToDoList';
import Quotes from '../pages/Quotes/Quotes';

export const AppRoutes = () => {
  const routes = [
    {
      path: ROUTES.MAIN,
      element: <MainWrapper />,
      children: [
        { index: true, element: <Home /> },
        { path: ROUTES.MAIN_TODOLIST, element: <ToDoList /> },
        { path: ROUTES.MAIN_QUOTES, element: <Quotes /> },
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
