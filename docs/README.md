# Checkout Resources

Centralizes all GraphQL operations used in Checkout IO, as well as some utility functions.

## Usage

```ts
import OrderFormQuery from 'vtex.checkout-resources/QueryOrderForm'
import UpdateItemMutation from 'vtex.checkout-resources/MutationUpdateItem'

const MyComponent: React.FC = () => {
    const { data } = useQuery(OrderFormQuery)
    const [updateItem] = useMutation(UpdateItemMutation)
    // ...
}
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


**Upcoming documentation:**

 - [Update saveCards mutation](https://github.com/vtex-apps/checkout-resources/pull/26)