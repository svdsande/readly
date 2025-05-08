import { createComponentFactory, Spectator } from '@ngneat/spectator';
import { SplashScreenComponent } from './splash-screen.component';

describe('SplashScreenComponent', () => {
  let spectator: Spectator<SplashScreenComponent>;
  const createComponent = createComponentFactory(SplashScreenComponent);

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should show logo and title', () => {
    const logo = spectator.query('img.logo');
    const title = spectator.query('h1.title');

    expect(logo).toBeTruthy();
    expect(title).toBeTruthy();

    expect(logo?.getAttribute('src')).toBe('images/readly-logo.png');
    expect(title?.textContent).toContain('Readly');
  });

  it('should hide splash screen after animation duration', () => {
    jasmine.clock().install();
    spectator.component.ngOnInit();

    expect(spectator.component.showSplash).toBe(true);

    jasmine.clock().tick((spectator.component as any).animationDuration);

    expect(spectator.component.showSplash).toBe(false);
    jasmine.clock().uninstall();
  });
});
