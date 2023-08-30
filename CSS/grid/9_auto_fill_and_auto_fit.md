# Auto Fill and Auto Fit

## #html

```
  <body>
    <div class="parent">
      <div class="child">1fr</div>
      <div class="child">1fr</div>
      <div class="child">1fr</div>
      <div class="child">1fr</div>
      <div class="child">1fr</div>
    </div>
  </body>
```

## #css

`auto-fil | auto-fill`

- 반응형 레이아웃을 만든다.
- 차이점은 여분의 공간이 있을 때 나타난다.

`auto-fill`

- 공간의 여분이 있어도 지정한 크기의 열 또는 행을 최대한 많이 만들어서 공간을 채운다.

`auto-fit`

- 공간의 여분이 있을 때 열 또는 행들을 모두 합쳐서 나타낸다.

<hr />

```
.parent {
  display: grid;
  gap: 10px;
  height: 100vh;
/* grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); */
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
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
