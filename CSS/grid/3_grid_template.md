# Grid Template

## #html

```
  <body>
    <header></header>
    <section></section>
    <aside></aside>
    <footer></footer>
  </body>
```

## #css

`코드 결과는 같지만 선호도 차이?`

- grid-template-columns + grid-template-rows + grid-template-areas + grid-area
- grid-template + grid-area

<hr />

```
body {
  padding: 0;
  margin: 0;
  display: grid;
  height: 100vh;

  /* grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr 1fr;
  grid-template-areas:
    'header header header header'
    'content content content menu'
    'footer footer footer footer'; */

  grid-template:
    'header header header header' 1fr
    'content content content menu' 2fr
    'footer footer footer footer' 1fr / 1fr 1fr 1fr 1fr;
}

header {
  background-color: aqua;
  grid-area: header;
}

section {
  background-color: coral;
  grid-area: content;
}

aside {
  background-color: forestgreen;
  grid-area: menu;
}

footer {
  background-color: deeppink;
  grid-area: footer;
}
```
