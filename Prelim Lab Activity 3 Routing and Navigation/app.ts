import { Component, Directive, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, } from '@angular/router';
// import { Home } from './home/home';
// import { DataBinding } from './data-binding/data-binding';
// import { Directives } from './directives/directives';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prelim_lab_activity');
}
