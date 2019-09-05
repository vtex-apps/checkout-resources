# Checkout Resources

Centralizes all GraphQL operations used in Checkout IO.

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
