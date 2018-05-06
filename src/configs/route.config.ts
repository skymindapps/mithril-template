import { 
  ItemDetailsComponent,
  ItemListComponent, 
  ProfileComponent 
} from '../components';

export const RouteConfig = {
  '/items': ItemListComponent,
  '/items/:key': ItemDetailsComponent, // key is a special parameter that ensures reload of the component https://mithril.js.org/route.html#key-parameter
  '/profile': ProfileComponent
};

export const RouteConfigDefault = '/items';