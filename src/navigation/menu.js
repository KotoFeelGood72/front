
export default {
  menu: [
    {
      name: 'Местоположение',
      icon: 'tabler:map-pin',
      isActive: false,
      submenu: [
        { name: 'Страна', link: '/admin/countries/page/1'},
        { name: 'Регион', link: '/admin/regions/page/1'},
        { name: 'Город', link: '/admin/cities/page/1'},
      ]
    },
    {
      name: 'Пользователи',
      icon: 'tabler:user-cog',
      isActive: false,
      submenu: [
        { name: 'Все', link: '/users'},
        { name: 'Менеджеры', link: '/users'},
        { name: 'Администраторы', link: '/users'},
        { name: 'Заведующие', link: '/users'},
      ]
    },
    {
      name: 'Роли и права',
      link: '/role',
      icon: 'tabler:pencil-minus',
      isActive: false,
    },
    {
      name: 'Детские сады',
      link: '/admin/kindergartens/page/1',
      icon: 'tabler:mood-boy',
      isActive: false,
    },
    {
      name: 'Каталог услуг',
      link: '/services',
      icon: 'tabler:category',
      isActive: false,
    },
    {
      name: 'Группа цен',
      link: '/geo',
      icon: 'tabler:cash-banknote',
      isActive: false,
    },
    {
      name: 'Фотосессии',
      icon: 'tabler:user-cog',
      isActive: false,
      submenu: [
        { name: 'Список фотосессий', link: '/'},
        { name: 'Состояние фотосессий', link: '/'},
      ]
    },
  ],
  other: [
    {
      name: 'Дополнительно',
      link: '',
      icon: 'tabler:camera',
      isActive: false,
    },
    {
      name: 'Дополнительно',
      link: '',
      icon: 'tabler:camera',
      isActive: false,
    },
  ]
}