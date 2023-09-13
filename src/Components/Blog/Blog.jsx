import PropTypes from 'prop-types';
import {CiBookmark} from 'react-icons/ci';

const Blog = ({blog, handleClickOnBookmark, handleMarkAsRead}) => {
    const {title, cover_img, reading_time, author, author_img, posted_date,hashtags} = blog;
    

    return (
        <div className='mb-20'>
            <img className='my-8' src={cover_img} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between items-center space-y-4'>
               <div className='flex gap-6 mb-4'>
                    <img className='rounded-full w-14' src={author_img} alt={`Profile Picture of ${author}`} />
                    <div>
                        <h3 className='text-base font-bold'>{author}</h3>
                        <p className='text-xs font-medium text-[#11111199]'>{posted_date}</p>
                        
                    </div>
               </div>
               <div className='flex items-center'>
               <span className='text-sm font-semibold text-[#11111199] mr-2'>{reading_time} min read</span>
               <button onClick={()=>handleClickOnBookmark(blog)}><CiBookmark></CiBookmark></button>
               </div>
            </div>
            <h2 className='text-4xl font-bold mb-4'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx} className='text-xs font-medium text-[#11111199] px-2'>{hash} </span>)
                }
            </p>
            <button className='mt-5 text-[#6047EC] border-b-2 border-[#6047EC]' onClick={() => handleMarkAsRead(reading_time)}> Mark as read </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleClickOnBookmark: PropTypes.func,
    bookmarkColor: PropTypes.string,
    handleMarkAsRead: PropTypes.func
}

export default Blog;