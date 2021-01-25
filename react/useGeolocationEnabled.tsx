import { useQuery } from 'react-apollo'

import QueryGeolocationInstalled from './QueryGeolocationInstalled'

export default function useGeolocationEnabled() {
  const { data, loading } = useQuery(QueryGeolocationInstalled)

  return [(data?.installedApp?.source ?? 'none') !== 'none', loading]
}
