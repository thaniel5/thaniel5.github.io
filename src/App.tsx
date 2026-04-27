import { useMutation, useQuery } from "convex/react";
import { type SubmitEvent, useState } from "react";
import { api } from "../convex/_generated/api";

function App() {
  const comments = useQuery(api.comments.get);
  const createComment = useMutation(api.comments.create);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  function handleCommentSubmit(e: SubmitEvent) {
    e.preventDefault();
    createComment({ username: name, text: comment });
  }

  return (
    <div>
      <h1>Ethan Campbell</h1>
      <form onSubmit={handleCommentSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input required value={name} onChange={(e) => setName(e.target.value)} id="username" />
        </div>
        <div>
          <label htmlFor="comment">Comment</label>
          <input
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            id="comment"
          />
        </div>
        <button>Submit</button>
      </form>
      {comments?.map(({ _id, text, username }) => (
        <div key={_id}>
          <h3>{username}</h3>
          <p>{text}</p>
        </div>
      ))}
      {!comments || (!comments.length && <p>No comments found</p>)}
    </div>
  );
}

export default App;
