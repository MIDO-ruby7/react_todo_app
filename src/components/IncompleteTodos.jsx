import React from "react";

export const IncompleteTodos = (props) => {
  const { todo, onClickComplete, onClickDelete } = props;
  return (
    <div class="incomplete-area">
      <p class="title">未完了のTODO</p>
      <ul>
        {todo.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
