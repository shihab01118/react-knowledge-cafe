import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const History = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-slate-700 py-5 h-fit rounded-lg">
           <h2 className='text-2xl text-center'>Bookmarked Blogs: {bookmarks.length}</h2>
           <div className='mx-4'>
                {
                    bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
           </div>
        </div>
    );
};

History.propTypes = {
    bookmarks: PropTypes.array.isRequired,
}

export default History;