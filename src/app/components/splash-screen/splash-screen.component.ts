import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  imports: [],
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.css'
})
export class SplashScreenComponent implements OnInit {
  showSplash = true;
  private readonly animationDuration = 3000; // 3 seconds

  ngOnInit(): void {
    setTimeout(() => {
      this.showSplash = false;
    }, this.animationDuration);
  }
}
