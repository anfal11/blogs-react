import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/bookmarks'
import Header from './Components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleClickOnBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleMarkAsRead = time => {
    const newTime = readingTime + time;
    setReadingTime(newTime); 

    // remove the read blog from bookmarks
    const newBookmarks = bookmarks.filter(bookmark => bookmark.reading_time !== time);
    setBookmarks(newBookmarks);
  };
  


  return (
    <div className='max-w-7xl mx-auto'>
      <Header />
      <div className='md:flex'>
        <Blogs handleClickOnBookmark={handleClickOnBookmark}  handleMarkAsRead={handleMarkAsRead}  ></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime} />
      </div>
    </div>
  );
}

export default App
