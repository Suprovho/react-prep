import React, { useState } from "react";
import CommentBox from "./CommentBox";
import commentsData from "./comment.json";

const CommentSection = () => {
  const [comments, setComments] = useState(commentsData.comments);
  const [text, setText] = useState("");
  const addComments = (value, parentId) => {
    const newId = Date.now();
    const newComment = {
      id: newId,
      parentId: parentId,
      value: value,
      children: [],
    };
    setComments((prevComment) => {
      const updatedComment = { ...prevComment, [newId]: newComment };
      parentId && updatedComment[parentId].children.push(newId); // if parentID is not null means child node.
      return updatedComment;
    });
  };

  const deleteComment = (id) => {
    const parentId = comments[id].parentId;
    setComments((prevComments) => {
      const updatedComments = { ...prevComments };
      if (parentId) {
        updatedComments[parentId].children = updatedComments[
          parentId
        ].children.filter((childId) => {
          return childId !== id;
        });
      }
      // to remove the descendants
      const queue = [id];
      while (queue.length > 0) {
        const nodeToDelete = queue.shift();
        queue.push(...updatedComments[nodeToDelete].children);

        delete updatedComments[nodeToDelete];
      }
      return updatedComments;
    });
  };
  
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
    <div className="m-4 bg-slate-100 p-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          placeholder="Write a comment"
          onChange={(e) => setText(e.target.value)}
        />
        <button
          onClick={() => addComments(text, null)}
          className="border-2 border-solid border-black p-1 rounded-md"
        >
          Submit
        </button>
      </div>
      <div>
        {Object.values(comments)
          .filter((comment) => comment.parentId === null) // Only root comments
          .map((rootComment) => renderComments(rootComment.id))}
      </div>
    </div>
  );
};

export default CommentSection;
