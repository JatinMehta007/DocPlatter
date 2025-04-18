import axios from "axios"
import { BACKEND_URL } from "../../config"

export const Login=()=>{
    const auth = async()=>{
        try{
            const response = await axios.get(`${BACKEND_URL}/api/user/login`,{
                email,password
            })
        }
    }
    return (

    )
}