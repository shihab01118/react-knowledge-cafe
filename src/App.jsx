
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import History from './components/History/History'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = (time, id) => {
    const newTime = parseInt(readingTime) + parseInt(time);
    setReadingTime(newTime);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks)
  }

  return (
    <div className='container mx-auto'>
    <Header></Header>
    <hr />
    <div className='mt-6 md:flex gap-6'>
      <Blogs 
      handleAddToBookmark={handleAddToBookmark}
      handleMarkAsRead={handleMarkAsRead}></Blogs>
      <History bookmarks={bookmarks} readingTime={readingTime}></History>
    </div>
    </div>
  )
}

export default App
