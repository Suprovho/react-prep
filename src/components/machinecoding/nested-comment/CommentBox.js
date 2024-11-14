import React, { useState } from "react";
import Reply from "./Reply";

const CommentBox = ({ comment, allComments, addComments, deleteComment }) => {
  const [reply, setReply] = useState(false);
  return (
    <div className="m-3 flex flex-col justify-start gap-3">
      <div className="flex gap-2">
        <p className="font-medium text-base text-[#212529]">{comment.value}</p>
        <div className="flex gap-2">
          <button
            className="text-sm text-blue-600 font-medium"
            onClick={() => setReply(!reply)}
          >
            {!reply ? "Reply" : "Cancel"}
          </button>
          <button
            className="text-sm text-red-500 font-medium"
            onClick={()=>deleteComment(comment.id)}
          >
            Delete
          </button>
        </div>
      </div>
      {reply && (
        <Reply
          setShowReply={setReply}
          addComments={addComments}
          id={comment.id}
        />
      )}
      <div className="nested-comments">
        {comment?.children?.map((childId) => {
          return (
            <CommentBox
              comment={allComments[childId]}
              allComments={allComments}
              key={childId}
              addComments={addComments}
              deleteComment={deleteComment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentBox;
