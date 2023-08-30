# SCSS

- SCSS는 브라우저에서 그대로 사용될 수 없음.
- SASS를 통한 전처리 과정을 동반되어야함.

<hr />

`scss에서 변수 사용`

- $bgColor: red;
- background-color: $bgColor;

`css 자체적으로 변수 사용`

- :root{--bgColor: red;}
- background-color: var(--bgColor);

## # Nesting

**html**

```
  <body>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </body>
```

**css**

```
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 10px;

  li {
    background-color: tomato;
    color: white;
    padding: 5px 10px;
    border-radius: 7px;

    &:hover {
      opacity: 0.8;

      a {
        color: gray;
      }
    }

    a {
      text-decoration: none;
      color: white;
      text-transform: uppercase;
    }
  }
}
```

## # @extend

**html**

```
  <body>
    <span class="first">first</span>
    <span class="second">second</span>
    <span class="third">third</span>
  </body>
```

**css**

```
%alert {
  margin: 10px;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid black;
}

.first {
  @extend %alert;
}

.second {
  @extend %alert;
}

.third {
  @extend %alert;
}
```

## # Mixins

**html**

```
  <body>
    <span class="first">first</span>
    <span class="second">second</span>
    <span class="third">third</span>
  </body>
```

**css**

```
@mixin alert($bgColor, $borderColor) {
  background-color: $bgColor;
  margin: 10px;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid $borderColor;

  @content
}

.first {
  @include alert(red, blue);
}

.second {
  @include alert(yellow, orange);
}

.third {
  @include alert(green, black) {
    text-transform: uppercase;
  }
}
```

## # Responsive Mixins

**html**

```
<body></body>
```

**css**

```
$breakpoint-sm: 480px;
$breakpoint-md: 768px;
$breakpoint-lg: 1024px;
$breakpoint-xl: 1200px;

@mixin smallDevice {
  @media screen and (min-width: $breakpoint-sm) {
    @content;
  }
}

@mixin mediumDevice {
  @media screen and (min-width: $breakpoint-md) {
    @content;
  }
}

@mixin largeDevice {
  @media screen and (min-width: $breakpoint-lg) {
    @content;
  }
}

@mixin xlDevice {
  @media screen and (min-width: $breakpoint-xl) {
    @content;
  }
}

body {
  @include smallDevice() {
    background-color: blue;
  }

  @include mediumDevice() {
    background-color: red;
  }

  @include largeDevice() {
    background-color: purple;
  }

  @include xlDevice() {
    background-color: green;
  }
}
```
