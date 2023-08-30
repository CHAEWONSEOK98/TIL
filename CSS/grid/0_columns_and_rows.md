# Columns and Rows

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

- gap = row-gap + column-gap

```
.parent {
  display: grid;
  grid-template-columns: 100px 200px;
  grid-template-rows: 200px 100px;
  gap: 10px;
}

.child {
  background-color: paleturquoise;
}
```
