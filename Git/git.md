# git

## #시간

- 프로젝트의 변경사항들을 버전에 담기

  - 변경사항 확인 : git status
  - 파일 하나 담기 : git add [파일]
  - 모든 파일 담기 : git add .

<hr />

- 커밋
  - 커밋 : git commit
  - 커밋 메세지 작성 : git commit -m "메세지"
  - add, commit 동시 작성 : git commit -am "메세지"

<hr />

- 로그 : git log

<hr />

- 과거로 돌아가는 2가지
  - reset : 원하는 시점으로 돌아간 뒤 이후 내역들을 지운다.
  - revert : 되돌리기 원하는 시점의 커밋을 거꾸로 실행한다.

[reset]

- git reset --hard (돌아갈 커밋 해시가 없는 경우 마지막 커밋을 가리킴)
- git reset --hard (돌아갈 커밋 해시)

[revert]

- git revert (되돌릴 커밋 해시)
- 커밋하지않고 revert : git revert --no-commit (되돌릴 커밋 해시)
