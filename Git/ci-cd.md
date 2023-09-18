# CI CD

## #CI (Continuous Integration, 지속적 통합)

- CI는 개발자를 위한 자동화 프로세스인 지속적인 통합을 의미한다.
- 지속적인 통합이 제대로 구현되면 애플리케이션 코드의 새로운 변경 사항이 정기적으로 빌드 및 테스트를 거쳐 공유 리포지토리에 병합된다.
- 결과적으로 여러 명의 개발자가 동시에 애플리케이션 개발과 관련된 코드 작업을 할 경우 서로 충돌하는 문제를 이 방법으로 해결할 수 있다.

## #CD (Continuous Delivery/Deploy, 지속적 전달/배포)

CD는 CI의 빌드/테스트를 통해서 정상적으로 수행됨을 확인하면 이는 배포를 수동으로 하느냐 자동으로 하느냐에 따라 2가지로 나뉜다.

- 지속적 전달 : 프로덕션 배포를 위한 상태가 되고 배포 자체는 수동으로 실행한다.
  - 개발팀과 비즈니스팀간의 커뮤니케이션 부족 문제를 해결한다.
- 지속적 배포 : 프로덕션까지 자동으로 배포한다.
  - 어플리케이션의 제공 속도를 증가시킨다.

CI/CD의 대표적인 서비스로 Jenkins, Travis CI, Circle CI 등이 있으며 이를 다이어그램으로 보면 아래와 같다.

<img src="https://d1.awsstatic.com/product-marketing/DevOps/continuous_integration.4f4cddb8556e2b1a0ca0872ace4d5fe2f68bbc58.png">
