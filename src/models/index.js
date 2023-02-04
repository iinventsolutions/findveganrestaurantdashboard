// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const OrderStatus = {
  "NEW": "NEW",
  "COOKING": "COOKING",
  "PICKED_UP": "PICKED_UP",
  "COMPLETED": "COMPLETED"
};

const { RestaurantOwner, Restaurant, Dish, Basket, BasketDish, OrderDish, Order, User } = initSchema(schema);

export {
  RestaurantOwner,
  Restaurant,
  Dish,
  Basket,
  BasketDish,
  OrderDish,
  Order,
  User,
  OrderStatus
};