import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/bookmark';
const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 p-7">
        <div className="bg-[#1111110d] p-7">
    <h2 className="text-base font-bold"> Bookmarked Blogs : {bookmarks.length}</h2>            
        
        {
            bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
        }
        </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}
export default Bookmarks;