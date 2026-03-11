import { useEffect, useState } from "react";
import { fetchAllpostApi } from "../Axios/Apicollaction";

function usePostHook() {
    const [posts, setPost] = useState([]);
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    async function loadAllPost() {
        try {
            let response = await fetchAllpostApi();
            setPost(response)
            setLoading(false)
        } catch (error) {

            alert("faild to load post check your internet connection")
            console.log(error);
            setError(JSON.stringify(error.message))
            setPost([])
            setLoading(true)
        }
    }
    useEffect(() => {
        loadAllPost()
    }, [])
    return { posts,error,loading,setPost }
}
export default usePostHook;