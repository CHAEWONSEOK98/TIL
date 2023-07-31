# React Rendering

> React 코드가 실행되는 브라우저에서는 단 하나의 쓰레드만 실행됨  
> By default, the browser uses a single thread to run all the JavaScript in your page

## 처리과정

1. 사용자 입력 받아서 상태 업데이트
2. render() 함수 실행
3. Reconcile 과정 수행 : JSX > HTML 변환 과정
   - Original DOM vs Virtual DOM
   - Update Actual DOM
4. 등록된 effect 실행

`보통 2번에서 3번까지 처리하는 과정에서 이벤트가 지연된다. > React는 싱글쓰레드로 작동된다`
