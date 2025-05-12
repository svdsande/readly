import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LibraryComponent } from './components/library/library.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'library',
    component: LibraryComponent,
  }
];
