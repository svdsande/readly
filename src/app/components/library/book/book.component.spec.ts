import { createComponentFactory, Spectator } from "@ngneat/spectator";
import { BookComponent } from "./book.component";

describe('BookComponent', () => {
  let spectator: Spectator<BookComponent>;
  const createComponent = createComponentFactory(BookComponent);
  beforeEach(async () => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });
});
