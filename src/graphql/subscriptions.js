/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRestaurantOwner = /* GraphQL */ `
  subscription OnCreateRestaurantOwner(
    $filter: ModelSubscriptionRestaurantOwnerFilterInput
  ) {
    onCreateRestaurantOwner(filter: $filter) {
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
export const onUpdateRestaurantOwner = /* GraphQL */ `
  subscription OnUpdateRestaurantOwner(
    $filter: ModelSubscriptionRestaurantOwnerFilterInput
  ) {
    onUpdateRestaurantOwner(filter: $filter) {
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
export const onDeleteRestaurantOwner = /* GraphQL */ `
  subscription OnDeleteRestaurantOwner(
    $filter: ModelSubscriptionRestaurantOwnerFilterInput
  ) {
    onDeleteRestaurantOwner(filter: $filter) {
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
export const onCreateBasket = /* GraphQL */ `
  subscription OnCreateBasket($filter: ModelSubscriptionBasketFilterInput) {
    onCreateBasket(filter: $filter) {
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
export const onUpdateBasket = /* GraphQL */ `
  subscription OnUpdateBasket($filter: ModelSubscriptionBasketFilterInput) {
    onUpdateBasket(filter: $filter) {
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
export const onDeleteBasket = /* GraphQL */ `
  subscription OnDeleteBasket($filter: ModelSubscriptionBasketFilterInput) {
    onDeleteBasket(filter: $filter) {
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
export const onCreateOrderDish = /* GraphQL */ `
  subscription OnCreateOrderDish(
    $filter: ModelSubscriptionOrderDishFilterInput
  ) {
    onCreateOrderDish(filter: $filter) {
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
export const onUpdateOrderDish = /* GraphQL */ `
  subscription OnUpdateOrderDish(
    $filter: ModelSubscriptionOrderDishFilterInput
  ) {
    onUpdateOrderDish(filter: $filter) {
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
export const onDeleteOrderDish = /* GraphQL */ `
  subscription OnDeleteOrderDish(
    $filter: ModelSubscriptionOrderDishFilterInput
  ) {
    onDeleteOrderDish(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateBasketDish = /* GraphQL */ `
  subscription OnCreateBasketDish(
    $filter: ModelSubscriptionBasketDishFilterInput
  ) {
    onCreateBasketDish(filter: $filter) {
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
export const onUpdateBasketDish = /* GraphQL */ `
  subscription OnUpdateBasketDish(
    $filter: ModelSubscriptionBasketDishFilterInput
  ) {
    onUpdateBasketDish(filter: $filter) {
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
export const onDeleteBasketDish = /* GraphQL */ `
  subscription OnDeleteBasketDish(
    $filter: ModelSubscriptionBasketDishFilterInput
  ) {
    onDeleteBasketDish(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateRestaurant = /* GraphQL */ `
  subscription OnCreateRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onCreateRestaurant(filter: $filter) {
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
export const onUpdateRestaurant = /* GraphQL */ `
  subscription OnUpdateRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onUpdateRestaurant(filter: $filter) {
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
export const onDeleteRestaurant = /* GraphQL */ `
  subscription OnDeleteRestaurant(
    $filter: ModelSubscriptionRestaurantFilterInput
  ) {
    onDeleteRestaurant(filter: $filter) {
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
export const onCreateDish = /* GraphQL */ `
  subscription OnCreateDish($filter: ModelSubscriptionDishFilterInput) {
    onCreateDish(filter: $filter) {
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
export const onUpdateDish = /* GraphQL */ `
  subscription OnUpdateDish($filter: ModelSubscriptionDishFilterInput) {
    onUpdateDish(filter: $filter) {
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
export const onDeleteDish = /* GraphQL */ `
  subscription OnDeleteDish($filter: ModelSubscriptionDishFilterInput) {
    onDeleteDish(filter: $filter) {
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
