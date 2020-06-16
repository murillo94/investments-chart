import { render, fireEvent } from '@testing-library/react';

import { Menu, MenuButton, MenuItem, useMenuState } from '../../index';

const content = 'im content';

describe('Menu', () => {
  test('should render menu', () => {
    const onClick = jest.fn();
    const Test = () => {
      const menuState = useMenuState();

      return (
        <>
          <MenuButton {...menuState}>{content}</MenuButton>
          <Menu ariaLabel="im aria" {...menuState}>
            <MenuItem {...menuState} onClick={onClick}>
              {content}
            </MenuItem>
          </Menu>
        </>
      );
    };
    const { getByRole } = render(<Test />);

    const button = getByRole('button');
    expect(button).toHaveAttribute('aria-haspopup', 'menu');
    expect(button).toHaveTextContent(content);
    fireEvent.click(button);

    const menu = getByRole('menu');
    expect(menu).toHaveAttribute('aria-label', 'im aria');
    expect(menu).toHaveAttribute('tabindex', '0');
    expect(menu).toHaveTextContent(content);

    const menuitem = getByRole('menuitem');
    fireEvent.click(menuitem);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(menuitem).toHaveTextContent(content);
  });
});
