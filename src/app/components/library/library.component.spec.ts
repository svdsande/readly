import { LibraryComponent } from './library.component';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

describe('LibraryComponent', () => {
  let spectator: Spectator<LibraryComponent>;
  const createComponent = createComponentFactory(LibraryComponent);

  beforeEach(async () => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
