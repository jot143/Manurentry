// Default menu settings configurations
export interface MenuItem {
  title: string;
  icon: string;
  page: string;
  isExternalLink?: boolean;
  isSupportExternalLink?: boolean;
  badge: { type: string, value: string };
  submenu: {
    items: Partial<MenuItem>[];
  };
  section: string;
}

export interface MenuConfig {
  menu: {
    items: Partial<MenuItem>[]
  };
}

export const MenuSettingsConfig: MenuConfig = {
  menu: {
    items: [
      {
        title: 'Home',
        icon: 'la-home',
        page: '/home'
      },
      {
        title: 'Item Management',
        icon: 'la-cart-plus',
        page: 'null',
        submenu: {
          items: [
            {
              title: 'Items',
              page: '/home/item-management/items'
            },
            {
              title: 'Composite Items',
              page: '/home/item-management/composite-items'
            },
            {
              title: 'Category',
              page: '/home/item-management/category'
            },
            {
              title: 'Inventory Adjustments',
              page: '/home/item-management/inventory-adjustments'
            },
          ]
        }
      },
      {
        title: 'Raw Item Management',
        icon: 'la-cart-plus',
        page: 'null',
        submenu: {
          items: [
            {
              title: 'Raw Items',
              page: '/home/raw-item-management/items'
            },
            {
              title: 'Category',
              page: '/home/raw-item-management/category'
            }
          ]
        }
      },
      // {
      //   title: 'Changelog',
      //   icon: 'la-file',
      //   page: '/changelog',
      //   badge: { type: 'badge-danger', value: '3.0' }
      // },
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





