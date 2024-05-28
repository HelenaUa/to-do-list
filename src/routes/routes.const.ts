type AllowedPath = string;

interface Routes {
  [key: string]: AllowedPath;
}

export const ROUTES: Routes = {
  MAIN: '/',
  MAIN_TODOLIST: 'to_do_list',
  MAIN_QUOTES: 'quotes',
};
