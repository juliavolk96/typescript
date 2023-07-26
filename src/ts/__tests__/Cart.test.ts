import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Cart from '../service/Cart';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('cart should contain items', () => {
  const cart = new Cart();
  const book = new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225);
  const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);

  cart.add(book);
  cart.add(musicAlbum);

  expect(cart.items.length).toBe(2);
  expect(cart.items).toContain(book);
  expect(cart.items).toContain(musicAlbum);
});

test('total price should be calculated correctly', () => {
  const cart = new Cart();
  const book = new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225);
  const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);

  cart.add(book);
  cart.add(musicAlbum);

  expect(cart.getTotalPrice()).toBe(2900);
});

test('total price with discount should be calculated correctly', () => {
  const cart = new Cart();
  const book = new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225);
  const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);

  cart.add(book);
  cart.add(musicAlbum);

  const discount = 10;
  const totalPrice = cart.getTotalPrice();
  const totalPriceWithDiscount = totalPrice - totalPrice * (discount / 100);

  expect(cart.getTotalPriceWithDiscount(discount)).toBe(totalPriceWithDiscount);
});

test('item should be removed from cart by id', () => {
  const cart = new Cart();
  const book = new Book(1001, 'War and Peace', 'Leo Tolstoy', 2000, 1225);
  const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);

  cart.add(book);
  cart.add(musicAlbum);

  expect(cart.items.length).toBe(2);

  cart.removeItemById(1001);

  expect(cart.items.length).toBe(1);
  expect(cart.items).not.toContain(book);
});