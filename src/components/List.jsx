import React from "react";

function List({ todos, setTodos, isDone }) {
  //삭제하기
  const deleteButtonHandler = (todo) => {
    const newList = todos.filter((filteredTodo) => filteredTodo.id !== todo.id);
    setTodos(newList);
  };

  //(완료<->취소)
  const clickChangeButtonHandler = (todo) => {
    const changeTodos = todos.map((item) => {
      if (item.id === todo.id) {
        return { ...item, isDone: !item.isDone };
      } else {
        return item;
      }
    });
    setTodos(changeTodos);
  };

  return (
    <div>
      <h3>{isDone ? "DONELIST" : "TODOLIST"}</h3>
      {todos
        .filter((work) => {
          return work.isDone === isDone;
        })
        .map((todo) => {
          return (
            <div
              style={{
                border: "1px solid black",
                padding: "10px",
                margin: "10px",
              }}
              key={todo.id}
            >
              {/* <p>{todo.id}</p> */}
              <h3>{todo.title}</h3>
              <p>{todo.contents}</p>
              {/* <p>{todo.isDone.toString()}</p> */}
              <button onClick={() => deleteButtonHandler(todo)}>삭제</button>
              <button onClick={() => clickChangeButtonHandler(todo)}>
                {isDone ? "취소" : "완료"}
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default List;
