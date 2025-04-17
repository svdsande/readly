import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SplashScreenComponent } from "./components/splash-screen/splash-screen.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SplashScreenComponent],
  templateUrl: './app.component.html',
})
export class AppComponent { }
