const productsMock = [
  {
    id: 1,
    name: 'Skol Lata 250ml',
    price: 2.2,
    urlImage: 'http://localhost:3001/images/skol_lata_350ml.jpg',
  },
  {
    id: 2,
    name: 'Heineken 600ml',
    price: 7.5,
    urlImage: 'http://localhost:3001/images/heineken_600ml.jpg',
  },
  {
    id: 3,
    name: 'Antarctica Pilsen 300ml',
    price: 2.49,
    urlImage: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
  },
];

const [productMock] = productsMock;

module.exports = {
  productsMock,
  productMock,
};
