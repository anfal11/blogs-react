import PropTypes from "prop-types";
import Bookmark from "../Bookmark/bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 p-7">
      <div>
        <h3 className="text-base bg-[#6047ec1a] text-[#6047EC] px-12 py-5 font-bold border border-[#6047EC] mb-6 rounded-lg">
          Spent time on read : {readingTime} min
        </h3>
      </div>
      <div className="bg-[#1111110d] p-7 rounded-lg">
        <h2 className="text-base font-bold">
          {" "}
          Bookmarked Blogs : {bookmarks.length}
        </h2>

        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;
