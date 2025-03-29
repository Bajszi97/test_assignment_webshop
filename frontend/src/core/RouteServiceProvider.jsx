import { createContext, useEffect, useState } from 'react'

export const RouteContext = createContext()

export default function RouteServiceProvider({children}) {
    const [currentRoute, setCurrentRoute] = useState(window.location.pathname)

    const onPopstate = () => {setCurrentRoute(window.location.pathname)}

    useEffect(() => {
        window.addEventListener("popstate", onPopstate)
        return () => window.removeEventListener("popstate", onPopstate)
    }, [])

    const navigate = (to) => {
        window.history.pushState({}, "", to)  
        setCurrentRoute(to)
    }

    return (
        <RouteContext.Provider value={{currentRoute, navigate}}>
            {children}
        </RouteContext.Provider>
    )
}