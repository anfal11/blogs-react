import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-white p-5 my-4 rounded-lg'>
            <h3 className='text-sm font-semibold'> {title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;