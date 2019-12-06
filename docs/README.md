# Checkout Resources

Centralizes all GraphQL operations used in Checkout IO, as well as some utility functions.

## Usage

```ts
import { orderForm } from 'vtex.checkout-resources/Queries'
import { updateItem } from 'vtex.checkout-resources/Mutations'

const MyComponent: FunctionComponent = () => {
  // ...
}

export default compose(
  graphql(updateItem),
  graphql(orderForm)
)(MyComponent)
```

## Utility functions

### useCheckoutURL()

This is a React Hook that provides the URL to the Checkout Cart, which varies depending on the version of `vtex.checkout` installed in the account.

Returns an object with a `url` property containing the path to the cart (`/checkout/#/cart` or `/cart`, for instance).

#### Example usage

```tsx
import { useCheckoutURL } from 'vtex.checkout-resources/Utils'

const MyComponent: FunctionComponent = () => {
  const { url } = useCheckoutURL()
  
  return <a href={url}>Go to cart</a>
}
```
