const state = {
  list: [
    {
      id: 1,
      name: 'Электроника',
      products: [
        { id: 1, name: 'Телефон', description: 'Смартфон', price: 500, image: require('@/assets/phone.jpg') },
        { id: 2, name: 'Ноутбук', description: 'Игровой ноутбук', price: 1200, image: require('@/assets/laptop.jpg') },
      ],
    },
    {
      id: 2,
      name: 'Одежда',
      products: [
        { id: 3, name: 'Футболка', description: 'Хлопковая футболка', price: 20, image: require('@/assets/tshirt.jpg') },
        { id: 4, name: 'Джинсы', description: 'Синие джинсы', price: 40, image: require('@/assets/jeans.jpg') },
      ],
    },
    {
      id: 3,
      name: 'Книги',
      products: [
        { id: 5, name: 'Книга по программированию', description: 'Учебник по JavaScript', price: 30, image: require('@/assets/book.jpg') },
        { id: 6, name: 'Роман', description: 'Интересный роман', price: 15, image: require('@/assets/novel.jpg') },
      ],
    },
  ],
};

const mutations = {};

const actions = {};

export default {
   state,
   mutations,
   actions,
};