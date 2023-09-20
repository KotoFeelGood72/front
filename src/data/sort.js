// В файле sort.js
export const sortCountry = [
  {
    name: 'Код страны',
    orderby: 'code',
    settings: true,
    visible: true
  },
  {
    name: 'Название страны',
    orderby: 'name',
    settings: true,
    visible: true
  },
  {
    name: 'Видимость',
    orderby: 'active',
    settings: false,
    visible: true
  },
];

export const sortCities = [
  {
    name: 'Код страны',
    orderby: 'countryCode',
    settings: true,
    visible: true
  },
  {
    name: 'Название страны',
    orderby: 'country',
    settings: true,
    visible: true
  },
  {
    name: 'Название региона',
    orderby: 'region',
    settings: true,
    visible: true
  },
  {
    name: 'Название города',
    orderby: 'name',
    settings: false,
    visible: true
  },
  {
    name: 'Видимость',
    orderby: 'active',
    settings: false,
    visible: true
  },
];

export const sortRegions = [
  {
    name: 'Код страны',
    orderby: 'code',
    settings: true,
    visible: true
  },
  {
    name: 'Название страны',
    orderby: 'countryCode',
    settings: true,
    visible: true
  },
  {
    name: 'Название региона',
    orderby: 'name',
    settings: true,
    visible: true
  },
  {
    name: 'Видимость',
    orderby: 'active',
    settings: false,
    visible: true
  },
];

export const sortKinder = [
  {
    name: 'Название',
    orderby: 'name',
    settings: true,
    visible: true
  },
  {
    name: 'Город',
    orderby: 'city',
    settings: true,
    visible: true
  },
  {
    name: 'Адрес',
    orderby: 'address',
    settings: true,
    visible: true
  },
  {
    name: 'Заведующий',
    orderby: 'director',
    settings: true,
    visible: true
  },
  {
    name: 'Менеджер',
    orderby: 'manager',
    settings: true,
    visible: true
  },
  {
    name: 'Видимость',
    orderby: 'active',
    settings: false,
    visible: true
  },
];
