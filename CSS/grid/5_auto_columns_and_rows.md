# Auto Columns and Rows

## #html

```
  <body>
    <div class="parent">
      <div class="child">1</div>
      <div class="child">2</div>
      <div class="child">3</div>
      <div class="child">4</div>
      <div class="child">5</div>
      <div class="child">6</div>
      <div class="child">7</div>
      <div class="child">8</div>
    </div>
  </body>
```

## #css

`동적데이터 다룰 때`

- grid-auto-rows : 계획하지 않은, 준비되지 않은 행의 크기를 미리 지정해줌
- grid-auto-columns : 계획하지 않은, 준비되지 않은 열의 크기를 미리 지정해줌

<hr />

- grid-auto-flow: column > 준비되지 않은 추가 content가 있으면 열로 생성되어야 한다.
- grid-auto-flow: row > 준비되지 않은 추가 content가 있으면 행으로 생성되어야 한다.

<hr />

```
.parent {
  display: grid;
  gap: 10px;
  min-height: 50vh;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  grid-auto-flow: column;
}

.child {
  background-color: tomato;
  color: white;
  font-size: 28;
  display: flex;
  justify-content: center;
  align-items: center;
}
```
