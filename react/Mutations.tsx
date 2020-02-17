/** DEPRECATED, being kept just for retrocompatibility.
 * Create individual entry points for each mutation instead */

import addToCart from './mutations/addToCart.graphql'
import estimateShipping from './mutations/estimateShipping.graphql'
import insertCoupon from './mutations/insertCoupon.graphql'
import selectDeliveryOption from './mutations/selectDeliveryOption.graphql'
import updateItems from './mutations/updateItems.graphql'
import savePaymentToken from './mutations/savePaymentToken.graphql'
import saveCards from './mutations/saveCards.graphql'

export default {
  addToCart,
  estimateShipping,
  insertCoupon,
  selectDeliveryOption,
  updateItems,
  savePaymentToken,
  saveCards,
}
