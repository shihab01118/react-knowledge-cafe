import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark}) => {
    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    return (
        <div className="mb-10">
            <img src={cover} alt={`cover photo of the blog: ${title}`} className='w-full mb-7 rounded-lg' />
            <div className="flex justify-between">
                <div className="flex gap-4 items-center">
                    <img src={author_img} alt="" className='w-[60px] h-[60px] rounded-full' />
                    <div>
                        <h4 className='text-2xl font-bold'>{author}</h4>
                        <p className='font-semibold'>Posted: {posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{reading_time} min read</span>
                    <button onClick={() =>handleAddToBookmark(blog)} className='text-2xl font-medium text-rose-700'><FaBookmark /></button>
                </div>
            </div>
            <h2 className="text-4xl font-bold my-4">{title}</h2>
            <div className="flex gap-4 mb-5">
            {
                hashtags.map((hashtag, id) => <span key={id}><a href="#">{hashtag}</a></span>)
            }
            </div>
            <span><a href="#">Mark as read</a></span>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
}

export default Blog;