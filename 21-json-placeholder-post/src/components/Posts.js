import Post from "./Post"
import { useEffect, useState } from 'react'

const Posts = () => {

    const API_URL = 'https://jsonplaceholder.typicode.com/posts';

    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL)
        .then((res) => res.json())
        .then((posts) => {
            console.log(posts)
            setPosts(posts)
        })
        .catch((error) => setError(error.message))
        .finally(() => setIsLoading(false))
    }, [])

    if(isLoading) {
        return <h1>Loading...</h1>
    }

    if(error) {
        return(
            <h1>Error:{error}</h1>
        )
    }

    return(
        <div>
            <h1>Posts</h1>
                <hr />
            {isLoading ? <h1>Loading...</h1> : posts.map((post) => <Post key={post.id} {...post}/> )}
        </div>
    )
}

export default Posts;