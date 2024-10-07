import axios from "axios"

export const getPatientData = async () => {
    const res = await axios.get("https://63bedcf7f5cfc0949b634fc8.mockapi.io/users")
    
    return res.data
}