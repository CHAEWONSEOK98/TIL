# useReducer

## #dispatch

- state개념에서는 설정자함수와 같다.
- action이라고 하는 객체를 '전달'하는 역할

## #action

- 'type'이라고 하는, reducer에서 분기 처리를 할 때 필요한 문자열정보를 포함
- reducer에서 해당 명령 수행에 필요한 추가정보를 담은 일반객체

## #reducer

- action.type에 따라 분기를 나눈다.
- action객체에 담겨있는 여러 정보를 활용해서 새로운 state를 반환한다.
- 순수함수

`context랑 엮으면, redux처럼 활용 가능`

<hr />

## #redux

- component에서 '입력'발생 > eventHandler 등등에서 action을 dispatch함.
- reducer에서 새로운 state가 되어 redux store에 전파됨.
- 해당 reducer를 '구독'하고 있는 component들이 변경사항을 받아들임
- 새로 렌더링

`react의 철학 ... props를 통해 위에서 아래로만 전달 > redux와 궁합이 잘 맞음`

<hr />

## #Code

`counter - reducer`

```
import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  const handleButtonIncrease = () => {
    dispatch({ type: 'INCREASE' });
  };

  const handleButtonDecrease = () => {
    dispatch({ type: 'DECREASE' });
  };

  return (
    <div>
      {state}
      <button onClick={handleButtonIncrease}>+</button>
      <button onClick={handleButtonDecrease}>-</button>
    </div>
  );
};

export default UseReducer;
```

<hr />

`todolist - reducer`

```
import { useReducer, useState } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'CREATE': {
      return [
        ...state,
        {
          id: action.todo.id,
          todo: action.todo.text,
        },
      ];
    }
    case 'DELETE': {
      return state.filter((todo) => todo.id !== action.id);
    }
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleCreate = () => {
    const todo = {
      id: Math.random(),
      text,
    };
    dispatch({ type: 'CREATE', todo });
    setText('');
  };

  const handleDelete = (id) => {
    dispatch({ type: 'DELETE', id });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleCreate}>생성</button>
      </form>

      <div>
        {state.map((todo) => (
          <li key={todo.id}>
            <span>{todo.todo}</span>
            <button onClick={() => handleDelete(todo.id)}>X</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default UseReducer;
```
