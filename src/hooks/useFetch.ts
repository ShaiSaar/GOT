import { useEffect, useState } from "react";
import axios from "axios";

export default function useFetch(url: string, cb: Function){

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null | unknown>(null);

    useEffect(() => {
        (async function(){
            try{
                setIsLoading(true);
                const response = await axios.get(url);
                cb(response.data);
            }catch(err: unknown){
                setError(err)
            }finally{
                setIsLoading(false)
            }
        })()
    }, [url])
    
    return { error, isLoading }
}