import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductFormComponent } from './components/product-form/product-form.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'register',
    component: ProductFormComponent,
  },

  {
    path: 'edit/:id',
    component: ProductFormComponent,
  },
];
