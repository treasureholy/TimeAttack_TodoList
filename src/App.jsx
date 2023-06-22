import React, { useState } from "react";
import "./App.css";
import uuid from "react-uuid";
import List from "./components/List";

function App() {
  // console.log(uuid());
  const initialState = [
    { id: uuid(), title: "오늘 할일", contents: "리액트 공부하기", isDone: false },
    { id: uuid(), title: "오늘 할일", contents: "리덕스 공부하기", isDone: true },
    { id: uuid(), title: "오늘 할일", contents: "TIL 작성하기", isDone: false },
  ];

  const [todos, setTodos] = useState(initialState);
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  //input 입력
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentsChangeHandler = (event) => {
    setContents(event.target.value);
  };

  //form
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const newTodo = {
      id: uuid(),
      title,
      contents,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
    setContents("");
  };

  return (
    <>
      <header
        style={{
          backgroundColor: "#ffd9f7",
          padding: "10px",
        }}
      >
        TODAY TODOLIST
      </header>
      <main
        style={{
          backgroundColor: "#f7faa2",
          padding: "10px",
        }}
      >
        <h2>TODO ADD</h2>
        <div>
          <form onSubmit={onSubmitHandler}>
            제목 :{" "}
            <input
              type="text"
              value={title}
              placeholder="제목 입력"
              onChange={titleChangeHandler}
            />
            내용 :{" "}
            <input
              type="text"
              value={contents}
              placeholder="내용 입력"
              onChange={contentsChangeHandler}
            />
            <button>추가하기</button>
          </form>
        </div>
        <List todos={todos} setTodos={setTodos} isDone={false} />
        <List todos={todos} setTodos={setTodos} isDone={true} />
      </main>
      <footer
        style={{
          backgroundColor: "#bbf2ef",
          padding: "10px",
        }}
      >
        오늘 일을 내일로 미루지 말자
      </footer>
    </>
  );
}

export default App;
