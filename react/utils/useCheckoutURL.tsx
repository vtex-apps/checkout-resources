import { useQuery } from 'react-apollo'

import installedApp from './graphql/installedApp.graphql'

const CHECKOUT_URL = {
  V0: '/checkout/#/cart',
  V1: '/cart',
  V3: '/checkout',
}

export const useCheckoutURL = () => {
  const { data } = useQuery(installedApp, {
    ssr: false,
    variables: {
      slug: 'vtex.checkout',
    },
  })

  const version = data?.installedApp?.version
  const major = version && parseInt(version.split('.')[0])

  return {
    url:
      major >= 3
        ? CHECKOUT_URL.V3
        : major > 0
        ? CHECKOUT_URL.V1
        : CHECKOUT_URL.V0,
    major,
  }
}
