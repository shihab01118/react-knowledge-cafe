import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setblogs] = useState([]);
    useEffect( () => {
        fetch ('blogs.json')
            .then (res => res.json())
            .then (data => setblogs(data));
    }, [])
    return (
        <div className="md:w-2/3">
        <h2>Blogs</h2>
            {
                blogs.map(blog => <Blog key={blog.id}></Blog>)
            }
        </div>
    );
};

export default Blogs;