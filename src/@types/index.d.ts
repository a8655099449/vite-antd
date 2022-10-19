type RouteItem = {
  path: string;
  name?: string;
  component: any;
  children?: RouteItem[];
};
