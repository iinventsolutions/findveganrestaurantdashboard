/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRestaurantOwner = /* GraphQL */ `
  mutation CreateRestaurantOwner(
    $input: CreateRestaurantOwnerInput!
    $condition: ModelRestaurantOwnerConditionInput
  ) {
    createRestaurantOwner(input: $input, condition: $condition) {
      id
      name
      telephone
      Restaurants {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateRestaurantOwner = /* GraphQL */ `
  mutation UpdateRestaurantOwner(
    $input: UpdateRestaurantOwnerInput!
    $condition: ModelRestaurantOwnerConditionInput
  ) {
    updateRestaurantOwner(input: $input, condition: $condition) {
      id
      name
      telephone
      Restaurants {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteRestaurantOwner = /* GraphQL */ `
  mutation DeleteRestaurantOwner(
    $input: DeleteRestaurantOwnerInput!
    $condition: ModelRestaurantOwnerConditionInput
  ) {
    deleteRestaurantOwner(input: $input, condition: $condition) {
      id
      name
      telephone
      Restaurants {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createBasket = /* GraphQL */ `
  mutation CreateBasket(
    $input: CreateBasketInput!
    $condition: ModelBasketConditionInput
  ) {
    createBasket(input: $input, condition: $condition) {
      id
      BasketDishes {
        nextToken
        startedAt
      }
      userID
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateBasket = /* GraphQL */ `
  mutation UpdateBasket(
    $input: UpdateBasketInput!
    $condition: ModelBasketConditionInput
  ) {
    updateBasket(input: $input, condition: $condition) {
      id
      BasketDishes {
        nextToken
        startedAt
      }
      userID
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteBasket = /* GraphQL */ `
  mutation DeleteBasket(
    $input: DeleteBasketInput!
    $condition: ModelBasketConditionInput
  ) {
    deleteBasket(input: $input, condition: $condition) {
      id
      BasketDishes {
        nextToken
        startedAt
      }
      userID
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createOrderDish = /* GraphQL */ `
  mutation CreateOrderDish(
    $input: CreateOrderDishInput!
    $condition: ModelOrderDishConditionInput
  ) {
    createOrderDish(input: $input, condition: $condition) {
      id
      quantity
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      orderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderDishDishId
    }
  }
`;
export const updateOrderDish = /* GraphQL */ `
  mutation UpdateOrderDish(
    $input: UpdateOrderDishInput!
    $condition: ModelOrderDishConditionInput
  ) {
    updateOrderDish(input: $input, condition: $condition) {
      id
      quantity
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      orderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderDishDishId
    }
  }
`;
export const deleteOrderDish = /* GraphQL */ `
  mutation DeleteOrderDish(
    $input: DeleteOrderDishInput!
    $condition: ModelOrderDishConditionInput
  ) {
    deleteOrderDish(input: $input, condition: $condition) {
      id
      quantity
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      orderID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderDishDishId
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      userID
      Restaurant {
        id
        name
        telephone
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      subtotal
      status
      OrderDishes {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderRestaurantId
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      userID
      Restaurant {
        id
        name
        telephone
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      subtotal
      status
      OrderDishes {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderRestaurantId
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      userID
      Restaurant {
        id
        name
        telephone
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      subtotal
      status
      OrderDishes {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      orderRestaurantId
    }
  }
`;
export const createBasketDish = /* GraphQL */ `
  mutation CreateBasketDish(
    $input: CreateBasketDishInput!
    $condition: ModelBasketDishConditionInput
  ) {
    createBasketDish(input: $input, condition: $condition) {
      id
      quantity
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      basketID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketDishDishId
    }
  }
`;
export const updateBasketDish = /* GraphQL */ `
  mutation UpdateBasketDish(
    $input: UpdateBasketDishInput!
    $condition: ModelBasketDishConditionInput
  ) {
    updateBasketDish(input: $input, condition: $condition) {
      id
      quantity
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      basketID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketDishDishId
    }
  }
`;
export const deleteBasketDish = /* GraphQL */ `
  mutation DeleteBasketDish(
    $input: DeleteBasketDishInput!
    $condition: ModelBasketDishConditionInput
  ) {
    deleteBasketDish(input: $input, condition: $condition) {
      id
      quantity
      Dish {
        id
        name
        image
        description
        price
        restaurantID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      basketID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      basketDishDishId
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      address
      lat
      lng
      Orders {
        nextToken
        startedAt
      }
      Baskets {
        nextToken
        startedAt
      }
      sub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      address
      lat
      lng
      Orders {
        nextToken
        startedAt
      }
      Baskets {
        nextToken
        startedAt
      }
      sub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      address
      lat
      lng
      Orders {
        nextToken
        startedAt
      }
      Baskets {
        nextToken
        startedAt
      }
      sub
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createRestaurant = /* GraphQL */ `
  mutation CreateRestaurant(
    $input: CreateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    createRestaurant(input: $input, condition: $condition) {
      id
      name
      deliveryFee
      minDeliveryTime
      maxDeliveryTime
      rating
      address
      image
      lat
      lng
      Dishes {
        nextToken
        startedAt
      }
      Baskets {
        nextToken
        startedAt
      }
      restaurantownerID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateRestaurant = /* GraphQL */ `
  mutation UpdateRestaurant(
    $input: UpdateRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    updateRestaurant(input: $input, condition: $condition) {
      id
      name
      deliveryFee
      minDeliveryTime
      maxDeliveryTime
      rating
      address
      image
      lat
      lng
      Dishes {
        nextToken
        startedAt
      }
      Baskets {
        nextToken
        startedAt
      }
      restaurantownerID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteRestaurant = /* GraphQL */ `
  mutation DeleteRestaurant(
    $input: DeleteRestaurantInput!
    $condition: ModelRestaurantConditionInput
  ) {
    deleteRestaurant(input: $input, condition: $condition) {
      id
      name
      deliveryFee
      minDeliveryTime
      maxDeliveryTime
      rating
      address
      image
      lat
      lng
      Dishes {
        nextToken
        startedAt
      }
      Baskets {
        nextToken
        startedAt
      }
      restaurantownerID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createDish = /* GraphQL */ `
  mutation CreateDish(
    $input: CreateDishInput!
    $condition: ModelDishConditionInput
  ) {
    createDish(input: $input, condition: $condition) {
      id
      name
      image
      description
      price
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateDish = /* GraphQL */ `
  mutation UpdateDish(
    $input: UpdateDishInput!
    $condition: ModelDishConditionInput
  ) {
    updateDish(input: $input, condition: $condition) {
      id
      name
      image
      description
      price
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteDish = /* GraphQL */ `
  mutation DeleteDish(
    $input: DeleteDishInput!
    $condition: ModelDishConditionInput
  ) {
    deleteDish(input: $input, condition: $condition) {
      id
      name
      image
      description
      price
      restaurantID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
