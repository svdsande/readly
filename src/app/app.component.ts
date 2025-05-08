import { Component } from '@angular/core';
import { SplashScreenComponent } from "./components/splash-screen/splash-screen.component";
import { HomeComponent } from "./components/home/home.component";

@Component({
  selector: 'app-root',
  imports: [SplashScreenComponent, HomeComponent],
  templateUrl: './app.component.html',
})
export class AppComponent { }
