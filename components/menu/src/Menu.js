import {
  Menu as MenuReakit,
  MenuButton as MenuButtonReakit,
  MenuItem as MenuItemReakit
} from 'reakit/Menu';

export const Menu = ({ children, ariaLabel, ...menu }) => {
  return (
    <MenuReakit aria-label={ariaLabel} tabIndex={0} {...menu}>
      {children}

      <style jsx>
        {`
          :global(div[role='menu']) {
            background-color: #fff;
            border: 1px solid #e3e3e3;
            border-radius: 4px;
            margin-top: 5px;
            display: flex;
            flex-direction: column;
            z-index: 1;
            outline: 0;
          }

          :global(div[role='menu']):focus {
            box-shadow: rgba(0, 85, 255, 0.25) 0px 0px 0px 3px;
          }
        `}
      </style>
    </MenuReakit>
  );
};

export const MenuButton = ({ children, ...menu }) => (
  <MenuButtonReakit {...menu}>
    {children}

    <style jsx>
      {`
        :global(button[aria-haspopup='menu']) {
          font-size: 14px;
          font-weight: 600;
          background-color: #0055ff;
          color: #fff;
          border-radius: 4px;
          border: 1px solid #0055ff;
          padding: 12px 15px;
          cursor: pointer;
          outline: 0;
        }

        :global(button[aria-haspopup='menu'][aria-expanded='true']),
        :global(button[aria-haspopup='menu']):hover {
          background-color: #004eeb;
        }

        :global(button[aria-haspopup='menu']):focus {
          box-shadow: rgba(0, 85, 255, 0.25) 0px 0px 0px 3px;
        }
      `}
    </style>
  </MenuButtonReakit>
);

export const MenuItem = ({ children, onClick, ...menu }) => (
  <MenuItemReakit
    onClick={() => {
      menu && menu.hide();
      onClick();
    }}
    {...menu}
  >
    {children}

    <style jsx>
      {`
        :global(button[role='menuitem']) {
          font-size: 14px;
          font-weight: 500;
          background-color: #fff;
          color: #333;
          border: none;
          border-radius: 0;
          padding: 10px;
          margin: 3px 0;
          cursor: pointer;
          outline: 0;
        }

        :global(button[role='menuitem']):focus {
          background-color: #0055ff;
          color: #fff;
        }

        :global(button[role='menuitem']):hover {
          background-color: #d8d8d8;
          color: #333;
        }
      `}
    </style>
  </MenuItemReakit>
);
