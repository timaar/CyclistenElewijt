import { Routes } from '@angular/router';
import { RittenComponent } from './ritten/ritten.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found-component/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ritten',
    component: RittenComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
