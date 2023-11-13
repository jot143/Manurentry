// Default menu settings configurations

export interface MenuItem {
  title: string;
  icon: string;
  page: string;
  isExternalLink?: boolean;
  issupportExternalLink?: boolean;
  badge: { type: string, value: string };
  submenu: {
    items: Partial<MenuItem>[];
  };
  section: string;
}

export interface MenuConfig {
  horizontal_menu: {
    items: Partial<MenuItem>[]
  };
  vertical_menu: {
    items: Partial<MenuItem>[]
  };
}

export const MenuSettingsConfig: MenuConfig = {
  horizontal_menu: {
    items: [
      {
        title: 'Changelog',
        icon: 'la-file',
        page: '/changelog',
        badge: { type: 'badge-danger', value: '3.0' }
      },
      {
        title: 'Templates',
        icon: 'la-television',
        page: 'null',
        submenu: {
          items: [
            {
              title: 'Horizontal',
              page: 'null'
            },
            {
              title: 'Vertical',
              page: 'null'
            },
          ]
        }
      },
      {
        title: 'Raise Support',
        icon: 'la-support',
        page: 'https://pixinvent.ticksy.com/',
        isExternalLink: true
      },
      {
        title: 'Documentaion',
        icon: 'la-text-height',
        page: 'https://modern-admin-docs.web.app/html/ltr/documentation/index.html',
        isExternalLink: true,
      }
    ]
  },
  vertical_menu: {
    items: [
      {
        title: 'Home',
        icon: 'la-home',
        page: '/home'
      },
      {
        title: 'Inventory',
        icon: 'la-cart-plus',
        page: 'null',
        submenu: {
          items: [
            {
              title: 'Items',
              page: 'null'
            },
            {
              title: 'Composite Items',
              page: 'null'
            },
            {
              title: 'Item Groups',
              page: 'null'
            },
            {
              title: 'Inventory Adjustments',
              page: 'null'
            },
          ]
        }
      },
      {
        title: 'Changelog',
        icon: 'la-file',
        page: '/changelog',
        badge: { type: 'badge-danger', value: '3.0' }
      },
      // {
      //   title: 'Templates',
      //   icon: 'la-television',
      //   page: 'null',
      //   submenu: {
      //     items: [
      //       {
      //         title: 'Horizontal',
      //         page: 'null'
      //       },
      //       {
      //         title: 'Vertical',
      //         page: 'null'
      //       },
      //     ]
      //   }
      // },
      // { section: 'SUPPORT', icon: 'la-ellipsis-h' },
      // {
      //   title: 'Raise Support',
      //   icon: 'la-support',
      //   page: 'https://pixinvent.ticksy.com/',
      //   isExternalLink: true
      // },
      // {
      //   title: 'Documentaion',
      //   icon: 'la-text-height',
      //   page: 'https://modern-admin-docs.web.app/html/ltr/documentation/index.html',
      //   isExternalLink: true,
      // }
    ]
  }

};





