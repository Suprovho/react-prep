import React, { useState } from "react";
import CommentBox from "./CommentBox";
import commentsData from "./comment.json";

const CommentSection = () => {
  const [comments, setComments] = useState(commentsData.comments);

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
      updatedComment[parentId].children.push(newId);
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

  return (
    <div className="m-4 bg-slate-100 p-4">
      <CommentBox
        comment={comments[1]}
        allComments={comments}
        addComments={addComments}
        deleteComment={deleteComment}
      />
    </div>
  );
};

export default CommentSection;
