/* eslint-disable react/prop-types */
const Comment = ({ comment }) => {
  return (
    <div
      style={{
        height: "4rem",
        width: "fit-content",
        padding: "0rem 3rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{ borderRadius: "100%" }}
        width={24}
        src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_2.png"
        alt="comment-logo"
      />
      <div style={{ margin: "1rem" }}>
        <div style={{ fontSize: "1.5rem" }}>{comment.username}</div>
        <div style={{ fontSize: "1rem" }}>{comment.comment}</div>
      </div>
    </div>
  );
};

export default Comment;
