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

<hr />

## #차원

`프로젝트를 하나 이상의 모습으로 관리해야 할 때`

`여러 작업들이 각각 독립되어 진행될 때`

[branch]

- 브랜치 생성 : git branch [?]
- 브랜치 목록 확인 : git branch
- 브랜치 이동 : git switch [?]
- 브랜치 삭제 : git branch -d (삭제할 브랜치명)
- 브랜치 강제삭제 : git branch -D (강제삭제할 브랜치명)
- 브랜치 이름 변경 : git branch -m (기존 브랜치명) (새 브랜치명)
- 브랜치 내역 트리 : git log --all --decorate --oneline --graph

<hr />

`서로 다른 브랜치를 합치는 2가지`

- merge : 두 브랜치를 한 커밋에 이어붙인다.

  - 브랜치 사용내역을 남길 필요가 있을 때 적합한 방식
  - `main 브랜치에서` 다른 브랜치를 병합하는 방식 : `git merge (병합하고자하는 브랜치)`
  - merge도 하나의 커밋으로 merge하기 전 해당 브랜치의 마지막 시점으로 reset가능
  - 병합된 브랜치 삭제 : `git branch -d (해당 브랜치)`
  -
  - 충돌 해결이 어려울 경우 merge중단 : `git merge --abort`
  - 해결 가능 시 충돌 부분을 수정한 뒤 git add ., git commit으로 병합 완료

<hr />

- rebase : 브랜치를 다른 브랜치에 이어붙인다.
  - 한 줄로 깔끔히 정리된 내역을 유지하기 원할 때 적합
  - 이미 팀원과 공유된 커밋들에 대해서는 사용하지 않는 것이 좋다.
  - `(병합이 필요한 브랜치에서)` main 브랜치로 병합하는 방식 : `git rebase main`
  - main 브랜치가 병합된 브랜치보다 뒤쳐져 있는 경우에는 main 브랜치로 이동 후 `git merge (병합된 브랜치)`
  - 병합된 브랜치 삭제 : `git branch -d (해당 브랜치)`
  -
  - 충돌 해결이 어려울 경우 rebase중단 : `git rebase --abort`
  - 해결 가능 시 충돌 부분을 수정한 뒤 git add ., `git rebase --continue`
