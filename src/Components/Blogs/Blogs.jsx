import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';
const Blogs = ({handleClickOnBookmark, handleMarkAsRead, readingTime}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=> {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="w-2/3 mx-2">
            
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} handleClickOnBookmark={handleClickOnBookmark} handleMarkAsRead={handleMarkAsRead} readingTime={readingTime}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleClickOnBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func,
    readingTime: PropTypes.number
}
export default Blogs;