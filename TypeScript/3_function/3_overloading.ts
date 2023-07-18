// Overloading
// 파라미터를 1) 하나를 받는 경우 2) 세개를 받는 경우

function stringOrString(seasons: string): string;
function stringOrString(
  season1: string,
  season2: string,
  season3: string
): string;

/*
만약에 하나의 파라미터만 입력받는다면 하나의 스트링으로 입력받는다.
예) '봄, 여름, 가을'

세개의 파라미터를 받는다면
예) '봄', '여름', '가을'
*/

function stringOrString(season: string, season2?: string, season3?: string) {
  if (season2 && season3) {
    return `계절: ${season}, ${season2}, ${season3}`;
  } else {
    return `계절: ${season}`;
  }
}
console.log(stringOrString('봄, 여름, 가을'));
console.log(stringOrString('봄', '여름', '가을'));
console.log(stringOrString('봄', '여름'));
