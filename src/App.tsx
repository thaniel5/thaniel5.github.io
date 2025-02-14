import { useQuery } from 'convex/react'
import { api } from '../convex/_generated/api'

export function App() {
  const vehicles = useQuery(api.vehicles.get)

  return (
    <div>
      {vehicles?.map(({ _id, make, model }) => (
        <div key={_id}>{`${make} ${model}`}</div>
      ))}
    </div>
  )
}
