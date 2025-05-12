import { MenuComponent } from './menu.component';
import { createRoutingFactory, Spectator } from '@ngneat/spectator';

describe('MenuComponent', () => {
  let spectator: Spectator<MenuComponent>;
  const createComponent = createRoutingFactory(MenuComponent);

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should show menu items', () => {
    const menuItems = spectator.queryAll('.menu-item');
    const expectedItems = spectator.component.menuItems;

    expect(menuItems.length).toBe(expectedItems.length);

    menuItems.forEach((item, index) => {
      expect(item.textContent).toContain(expectedItems[index].name);
    });
  });
});
