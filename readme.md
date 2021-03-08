# Amazon Cart Todos

## DONE: Create your ReactJS App

Use the tutorial [HERE](https://reactjs.org/docs/add-react-to-a-website.html)

## DONE: Start the Amazon Cart App

## DONE: Create the Header using JSX

#### HTML Structure

```
.App
    .App-header
        h1 "Amazon Cart"
```

## DONE: Style the Header in ReactJS

## DONE: Convert the Header to a ReactJS Component

## DONE: Pass the title argument into the Header component

#### HINTS:

- Title should be `Amazon Cart`
- Use props

## DONE: Create HTML/Style for Cart Items and Cart Total

## DONE: Convert Cart Items and Cart Total into components

#### HINTS:
- Name the components `CartItems` and `CartTotal`

## DONE: Create individual CartItem component structure

#### HTML Structure:
```
.CartItem
    div.CartItem-image
        img
    div.CartItem-info
        div.info-title
            h2
        div.info-stock
        div.item-actions
            div.item-quantity
                select
            div.item-delete
    div.CartItem-price
```

## DONE: Create Style for individual CartItem component

## DONE: Import data from data.js and set it in the State

#### DONE: Pass the data into CartItems components as props

## DONE: Loop through cart items list and display them using JSX 

#### HINTS:
- Use the `.map` function
- Output the original Cart Item with fake data

## DONE: Convert CartItem component to now use props and pass them in 

#### HINTS:
- Use `item` as a prop
- Replace fake data with data from cart items list
- For the image src use `process.env.PUBLIC_URL`

## DONE(Together): Create HTML and Style for CartTotal Component

## DONE: Calculate total price from cart items list

#### HINTS:
- Create a `getTotalPrice()` function
- Output it using JSX

## DONE: Correctly calculate cart total


## DONE: Install external React Module to format the total price number

## DONE: Add the ability to change item quantity in the cart

## TODO: Add the ability to delete an item in the cart 

#### HINTS:
- Create a `deleteItem()` function
- Pass the function from `CartItems` to `CartItem` component
- Pass the `index` of the item to know which item to delete
- Use the `filter()` function in es6 to filter out item based on index
- Update the items using `setCartItems()` function 

## Done: Cleanup

## Done: Publish the App LIVE!






















