import ActiveRestaurants from '../views/pages/active-restaurants';
import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';

const routes = {
  '/': ActiveRestaurants, // default page
  '/active-restaurants': ActiveRestaurants,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
