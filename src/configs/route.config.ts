import { 
  ItemDetailsComponent,
  ItemListComponent, 
  ProfileComponent 
} from '../components';

export const RouteConfig = {
  '/items': ItemListComponent,
  '/items/:id': ItemDetailsComponent,
  '/profile': ProfileComponent
};

export const RouteConfigDefault = '/items';