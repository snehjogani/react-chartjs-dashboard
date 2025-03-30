import { matchRoutes, useLocation } from "react-router-dom"
import { routes } from "./constants"

const useCurrentPath = () => {
  const location = useLocation()
  const [{ route }] = matchRoutes(routes, location)

  return route.path
}

export default useCurrentPath