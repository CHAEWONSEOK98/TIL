# Infinite Scroll

## #Basic

**html**

```
  <body>
    <ul id="list-container"></ul>
  </body>
```

**css**

```
* {
  margin: 0;
  padding: 0;
}
ul {
  width: 300px;
  height: 300px;
  border: 1px solid black;
  text-align: center;
  margin: 0 auto;
  overflow: scroll;
}

li {
  list-style: none;
  height: 20px;
}
```

**js**

```
const listContainer = document.querySelector('#list-container');

let itemNumber = 1;

const loadItems = () => {
  for (let i = 0; i < 20; i++) {
    let item = document.createElement('li');
    item.innerText = 'item' + itemNumber++;
    listContainer.appendChild(item);
  }
};

listContainer.addEventListener('scroll', () => {
  if (
    listContainer.scrollTop + listContainer.clientHeight >=
    listContainer.scrollHeight
  ) {
    loadItems();
  }
});

loadItems();
```

## #Intersection Observer

`box 활성화`

**html**

```
  <body>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
    <div class="box"></div>
  </body>
```

**css**

```
* {
  margin: 0;
  padding: 0;
}
body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
}
.box {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}
.box.active {
  background-color: aqua;
}
```

**js**

```
[version1]
let io = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
});

const boxList = document.querySelectorAll('.box');
boxList.forEach((element) => {
  io.observe(element);
});

[version2]
const observer = new IntersectionObserver(callback);
const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => observer.observe(box));
function callback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}

[version2-1]
const options = {
  rootMargin: '100px',
  threshold: 0.25,
};
const observer = new IntersectionObserver(callback, options);
const boxes = document.querySelectorAll('.box');
boxes.forEach((box) => observer.observe(box));
function callback(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
}
```
