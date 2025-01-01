import { useContext } from "react"
import { AuthContext } from "../AuthProvider/AuthProvider"

export const useAuth = () => {
    const context = useContext(AuthContext)
    return context
}