import { Routes } from '@angular/router';
import { Home } from './home';
import { Directives } from './directives';
import { DataBinding } from './data-binding';
import { LinkToComponent } from './link-to-component';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'directives', component: Directives },
  { path: 'data-binding', component: DataBinding },
  { path: 'link-to-component', component: LinkToComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' }
];

