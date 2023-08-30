# The Span Keyword

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

```
.parent {
  display: grid;
  grid-template-columns: [first]100px [second]200px [third]100px [last];
  grid-template-rows: 200px;
  gap: 10px;
}

.child {
  background-color: paleturquoise;
}

.child:first-child {
  /* grid-row-start: 1;
  grid-row-end: 3; */

  /* grid-row: 1 / 3; */

  grid-row: span 2;
}

.child:last-child {
  background-color: green;

  /* grid-column-start: 2;
  grid-column-end: 4; */

  /* grid-column: 2 / 4; */

  /* grid-column: span 2; */

  grid-column: second / span 2;
}
```
