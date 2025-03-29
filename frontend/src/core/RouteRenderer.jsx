import { useContext } from "react"
import { RouteContext } from "./RouteServiceProvider"
import { routes } from "../routes"

export default function RouteRenderer() {
    const { currentRoute } = useContext(RouteContext)
    const route = routes.find((r) => r.path === currentRoute)
    return route? <route.component/> : <h1>404 Page Not Found</h1>
}