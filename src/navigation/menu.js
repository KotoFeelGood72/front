export default {
  menu: [
    {
      name: 'Местоположение',
      link: '/geo',
      icon: 'tabler:map-pin',
      id: 'menu-0',
      submenu: [
        { name: 'Страна', link: '/country', id: 'submenu-0'},
        { name: 'Регион', link: '/region', id: 'submenu-1'},
        { name: 'Город', link: '/city', id: 'submenu-2'},
      ]
    },
    {
      name: 'Пользователи',
      link: '/geo',
      icon: 'tabler:user-cog',
      id: 'menu-1',
      submenu: [
        { name: 'Пользователи', link: '/users', id: 'submenu-3'},
        { name: 'Роли и права', link: '/role', id: 'submenu-4'},
      ]
    },
    {
      name: 'Детские сады',
      link: '/geo',
      icon: 'tabler:mood-boy',
      id: 'menu-2',
    },
    {
      name: 'Каталог услуг',
      link: '/geo',
      icon: 'tabler:category',
      id: 'menu-3',
    },
    {
      name: 'Группа цен',
      link: '/geo',
      icon: 'tabler:cash-banknote',
      id: 'menu-4',
    },
    {
      name: 'Фотосессии',
      link: '/geo',
      icon: 'tabler:user-cog',
      id: 'menu-5',
      submenu: [
        { name: 'Список фотосессий', link: '', id: 'submenu-5'},
        { name: 'Состояние фотосессий', link: '', id: 'submenu-6'},
      ]
    },
  ]
}