import { Component } from '@angular/core';
import { SplashScreenComponent } from "./components/splash-screen/splash-screen.component";
import { MenuComponent } from './components/menu/menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [SplashScreenComponent, RouterOutlet, MenuComponent],
  styleUrl: './app.component.css',
  templateUrl: './app.component.html',
})
export class AppComponent { }
