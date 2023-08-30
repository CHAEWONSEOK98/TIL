# Align and Justify Content

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
      <div class="child">9</div>
      <div class="child">10</div>
    </div>
  </body>
```

## #css

`align-content, justify-content를 사용하려면 공간의 여백이 필요함`

- align-content + justify-content = place-content

<hr />

```
.parent {
  display: grid;
  gap: 10px;
  height: 100vh;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  background-color: aquamarine;

  /* align-content: center;
  justify-content: center; */

  place-content: center center;
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
