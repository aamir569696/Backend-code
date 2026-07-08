

import { useContext } from 'react'
import { AuthContext } from '../auth.context'



export function Useauth(){
    const context=useContext(AuthContext)

    return context

}