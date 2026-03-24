import axios from "axios";
import { useEffect, useState } from "react";


export interface UserData {
  id: number;
  title: string;
  description: string;
  price: number;
  brand: string;
  rating: number;
  thumbnail: string;
  availabilityStatus: string;
  // add other fields you saw in your console.log here
}

export const CustomApisQuery = (urlPath: string) => {
    const [data, setData] = useState<UserData[]>([]);
    const [error, setError] = useState(false);
    const [isLoading,setLoading] = useState(false);
    const controller = new AbortController();
    useEffect( () => {
        (async () => { 
           try {
            setError(false)
            setLoading(true)
            const response = await axios.get(urlPath,{signal: controller.signal})
            setData(response.data.products)
            setLoading(false)
            return response.data.products as UserData[]
           } catch (error) {
            if(axios.isCancel(error)){
                return
            }
            setError(true)
            setLoading(false)
           }
        })() 
        return () => {
          controller.abort() 
        }
    },[]);
    // return [data]
 return {data,error,isLoading}
} 