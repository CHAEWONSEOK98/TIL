# Align and Justify Items

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

- align-items + justify-items = place-items

- align-self + justify-self = place-self

- stretch: width 또는 height가 없는 경우에만 자동으로 늘어남.

<hr />

```
.parent {
  display: grid;
  gap: 10px;
  min-height: 50vh;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-auto-columns: 1fr;
  grid-auto-flow: column;

  /* align-items: center;
  justify-items: center; */

  place-items: center center;
}

.child {
  background-color: tomato;
  color: white;
  font-size: 28;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
}

.child:nth-child(6) {
  background-color: plum;

  /* align-self: start;
  justify-self: end; */

  place-self: start end;
}
```
