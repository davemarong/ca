import { ShoppingCart, Item } from "./question-4";
import { milk, bread, cheese, tomato, lettuce } from "./items";
test("Test 1", () => {
  const myCart = new ShoppingCart();
  myCart.addToCart(bread);
  expect(myCart.getCostTotal()).toBe(bread.price);
  expect(myCart.getNumberOfItems()).toBe(1);
  expect(myCart.getCart()).toEqual(expect.objectContaining([bread]));
});

test("Test 2", () => {
  const myCart = new ShoppingCart();
  myCart.addToCart(bread);
  myCart.addToCart(milk);
  expect(myCart.getCostTotal()).toBe(bread.price + milk.price);
  expect(myCart.getNumberOfItems()).toBe(2);
  expect(myCart.getCart()).toEqual(expect.objectContaining([bread, milk]));
});
test("Test 3", () => {
  const myCart = new ShoppingCart();
  myCart.addToCart(bread);
  myCart.addToCart(bread);
  myCart.addToCart(bread);
  expect(myCart.getCostTotal()).toBe(bread.price);
  expect(myCart.getNumberOfItems()).toBe(1);
  expect(myCart.getCart()).toEqual(expect.objectContaining([bread]));
});
test("Test 4", () => {
  const myCart = new ShoppingCart();
  myCart.addToCart(bread);
  myCart.addToCart(milk);
  myCart.removeFromCart(bread);
  expect(myCart.getCostTotal()).toBe(milk.price);
  expect(myCart.getNumberOfItems()).toBe(1);
  expect(myCart.getCart()).toEqual(expect.objectContaining([milk]));
});
