import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const History = ({ bookmarks, readingTime }) => {
    return (
        <div className="md:w-1/3 rounded-lg">
            <div className='bg-purple-200 py-5 text-center border-purple-400 font-bold rounded-lg'>
                <h2 className='text-purple-500 text-3xl'>Spent time on reading: {readingTime}</h2>
            </div>
            <div className='bg-slate-700 py-5 h-fit rounded-lg mt-10'>
                <h2 className='text-2xl text-center font-bold'>Bookmarked Blogs: {bookmarks.length}</h2>
                <div className='mx-4'>
                    {
                        bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                    }
                </div>
            </div>
        </div>
    );
};

History.propTypes = {
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number,
}

export default History;