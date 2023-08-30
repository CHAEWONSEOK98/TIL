# Line Names

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

.child:last-child {
  background-color: green;
  height: 100px;
  grid-column: second / last;
}

.child:first-child {
  grid-row: 1 / 3;
}
```
