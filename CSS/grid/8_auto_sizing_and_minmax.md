# Auto Sizing and Minmax

## #html

```
  <body>
    <div class="parent">
      <div class="child">1fr</div>
      <div class="child">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat iure
      </div>
      <div class="child">1fr</div>
    </div>
  </body>
```

## #css

- max content : 열의 내용물이 가질 수 있는 최대 사이즈를 열의 크기로 만드는 키워드
- mincontent : 열의 내용물이 가질 수 있는 최소 사이즈를 열의 크기로 만드는 키워드

<hr />

- minmax() : 최솟값, 최댓값 범위 내에서 값을 유연하게 처리
  - repeat(3, minmax(300px, 1fr)) | repeat과 결합하여 사용가능

<hr />

```
.parent {
  display: grid;
  gap: 10px;
  height: 100vh;
  /* grid-template-columns: 1fr min-content 1fr; */
  /* grid-template-columns: 1fr max-content 1fr; */
  grid-template-columns: 1fr minmax(250px, 1fr) 1fr;
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
