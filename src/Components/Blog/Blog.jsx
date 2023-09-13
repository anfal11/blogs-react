import PropTypes from 'prop-types';
import {CiBookmark} from 'react-icons/ci';

const Blog = ({blog, handleClickOnBookmark}) => {
    const {title, cover_img, reading_time, author, author_img, posted_date,hashtags} = blog;
    

    return (
        <div className='mb-20'>
            <img className='my-8' src={cover_img} alt={`Cover Picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
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
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleClickOnBookmark: PropTypes.func,
    bookmarkColor: PropTypes.string
}

export default Blog;