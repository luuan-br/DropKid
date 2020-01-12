const data = {
  phone: '',
  message: '',
  routes: [
    {
      route: 'Escola Fransico Freitas',
      hour: '7h ás 8h',
    },
  ],
}

export const getValue = type => {
  return data[type]
}

export const setValue = (type, value) => {
  data[type] = value
}
