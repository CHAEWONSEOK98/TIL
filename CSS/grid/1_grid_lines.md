# Grid Lines

## #html

```
  <body>
    <div class="parent">
      <div class="child">1</div>
      <div class="child">2</div>
      <div class="child">3</div>
      <div class="child">4</div>
    </div>
  </body>
```

## #css

- grid-column-start + grid-column-end = grid-column
- grid-row-start + grid-row-end = grid-row
<hr />

- grid-column-end의 -1 값은 마지막 라인을 뜻한다

```
.parent {
  display: grid;
  grid-template-columns: 100px 200px 100px;
  grid-template-rows: 200px;
  gap: 10px;
}

.child {
  background-color: paleturquoise;
}

.child:last-child {
  background-color: green;
  height: 100px;

    /* grid-column-start: 2;
  grid-column-end: 4; */

  grid-column: 2 / 4;
}

.child:first-child {
  /* grid-row-start: 1;
  grid-row-end: 3; */

  grid-row: 1 / 3;
}
```
