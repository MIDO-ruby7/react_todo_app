import React from "react";
export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div class="complete-area">
      <p class="title">完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
