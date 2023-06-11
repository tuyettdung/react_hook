import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCommentAction } from "../../../redux/reducers/appChatReducer";

const DemoHookRedux = () => {
  const { arrComment } = useSelector((state) => state.appChatReducer);
  const dispatch = useDispatch();
  const userCommentRef = useRef({
    name: '',
    content: ''
  });

  console.log(arrComment);

  const handleChange = (e) => {
    let { id, value } = e.target;
    userCommentRef.current[id] = value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("comment",userCommentRef.current);
    //đưa dữ liệu comment lên reducer
    //tạo ra action
    const action = addCommentAction(userCommentRef.current);
    //đưa lên redux
    dispatch(action)
  };
  return (
    <div className="container">
      <h3>App Chat</h3>
      <div className="card">
        <div className="card-header">
          {arrComment.map((userComment, index) => {
            return (
              <div className="d-flex" key={index}>
                <img
                  height={75}
                  src={`http://i.pravatar.cc?u=${userComment.name}`}
                  alt=""
                />
                <div className="m-2">
                  <h3>{userComment.name}</h3>
                  <p>{userComment.content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="card-body">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <p>name</p>
              <input
                className="form-control"
                id="name"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <p>content</p>
              <input
                className="form-control"
                id="content"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <button className="btn btn-success mt-2">Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DemoHookRedux;
