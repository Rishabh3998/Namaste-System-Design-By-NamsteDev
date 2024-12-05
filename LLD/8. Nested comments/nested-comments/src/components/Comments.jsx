/* eslint-disable react/prop-types */
import Comment from "./Comment";

const Comments = ({ data }) => {
  return (
    <div>
      {data?.map((comment, index) => {
        return (
          <div key={index}>
            <Comment comment={comment} />
            {comment?.replies && (
              <div style={{ marginLeft: `${1 + index}rem` }}>
                <Comments data={comment.replies} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
