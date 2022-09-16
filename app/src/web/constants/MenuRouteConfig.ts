export type MenuRouteConfigType = {
  [key in string]: { route: string; label: string };
};
export const MenuRouteConfig: MenuRouteConfigType = {
  '0': { route: '/', label: 'Home' },
  dao: { route: '/dao', label: 'Dao' },
  profile: { route: '/profile', label: 'Profile' },
  daoLists: { route: '/daoLists', label: 'Daolists' },
  '25': { route: '/testZustand', label: 'testZustand' },
  '48': { route: '/loading', label: 'Loading' },
};
