import { HomeComponent } from './home.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('HomeComponent', () => {
  let spectator: Spectator<HomeComponent>;
  const createComponent = createComponentFactory(HomeComponent);

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
