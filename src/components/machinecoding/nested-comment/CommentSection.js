import React, { useState } from "react";
import CommentBox from "./CommentBox";
import commentsData from "./comment.json";
import useComments from "./useComments";

const CommentSection = () => {
  const { comments, addComments, deleteComment } = useComments(commentsData);
  const [text, setText] = useState("");

  const renderComments = (commentId) => {
    const comment = comments[commentId];
    if (!comment) return null;
    return (
      <CommentBox
        key={comment.id}
        comment={comment}
        allComments={comments}
        addComments={addComments}
        deleteComment={deleteComment}
      />
    );
  };

  return (
    <div className="bg-slate-100 rounded-md">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          placeholder="Write a comment"
          onChange={(e) => setText(e.target.value)}
          className="w-[20%]"
        />
        <button
          onClick={() => addComments(text)}
          className="border-2 border-solid border-black p-1 rounded-md"
        >
          Submit
        </button>
      </div>
      <div className="mt-4">
        {Object.values(comments)
          .filter((comment) => comment.parentId === null) // Only root comments
          .map((rootComment) => renderComments(rootComment.id))}
      </div>
    </div>
  );
};

export default CommentSection;
