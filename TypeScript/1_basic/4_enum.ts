// Enum

/*
API 요청상황 가정
상태는 4가지 상태

DONE - 요청 완료 상태
ERROR - 에러가 생긴 상태
LOADING - 로딩상태
INITIAL - 초기상태
*/

function runWork() {
  let state = 'INITIAL';

  try {
    state = 'LOADING';
    // 작업

    state = 'DONE';
  } catch (error) {
    state = 'ERROR';
  } finally {
    return state;
  }
}

console.log(runWork() === 'DONE');

//

const doneState = 'DONE';
const loadingState = 'LOADING';
const errorState = 'ERROR';
const initialState = 'INITIAL';

function runWork2() {
  let state = initialState;

  try {
    state = loadingState;
    // 작업

    state = doneState;
  } catch (error) {
    state = errorState;
  } finally {
    return state;
  }
}

console.log(runWork2() === doneState);

//

// enum 기본값은 0, 1, 2, 3
enum State {
  DONE,
  LOADING,
  INITIAL,
  ERROR,
}

// 따로 값을 지정할 수 있다.
// enum State {
//   DONE = 'DONE',
//   LOADING = 'LOADING',
//   INITIAL = 'INITIAL',
//   ERROR = 'ERROR',
// }

function runWork3() {
  let state = State.INITIAL;

  try {
    state = State.LOADING;
    // 작업

    state = State.DONE;
  } catch (error) {
    state = State.DONE;
  } finally {
    return state;
  }
}

console.log(runWork3() === State.DONE);
