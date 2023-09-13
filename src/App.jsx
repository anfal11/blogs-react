import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {
      const [bookmarks, setBookmarks] = useState([]);
      const handleClickOnBookmark = (blog) =>{
        const newBookmarks = [...bookmarks, blog];
        setBookmarks(newBookmarks);
      }
  return (
    <div className='max-w-7xl mx-auto'>
      <Header />
      <div className='md:flex'>
      <Blogs handleClickOnBookmark={handleClickOnBookmark}></Blogs>
      <Bookmarks bookmarks={bookmarks}/>
      </div>
    </div>
  )
}

export default App
