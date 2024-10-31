# CH5.Multi-Player-Game

본 프로젝트의 목적은 TCP 통신을 기반으로 멀티플레이가 가능한 서버를 만드는 것입니다.
플레이어들이 같은 맵에서 움직이며 온기를 나누는 것 외에 특별한 기능은 없습니다.

---

### 단계별 목표

**프로젝트 생성 및 이벤트 별 코드 처리**

- [ ] 프로젝트 시작
- [ ] 소켓 이벤트 확인
- [ ] 기능별 폴더, 파일 분리
- [ ] 헤더 및 패킷 구조 설계

**환경변수 및 상수, 에러 처리**

- [ ] 헤더 및 패킷 구조 설계
- [ ] 상수 선언 및 환경 변수 세팅

**프로토콜 버퍼 적용 및 패킷 파싱**

- [ ] 프로토콜 버퍼 적용
- [ ] 패킷 파싱 테스트

**유저 세션 및 게임 세션 관리**

- [ ] 유저, 게임 클래스 선언
- [ ] 접속 시 생성 이벤트
- [ ] 세션 관리 로직 추가

**접속 및 이동 패킷 교환**

- [ ] 접속 패킷 추가 및 파싱 테스트
- [ ] 클라이언트 접속 테스트
- [ ] 이동 패킷 추가 및 파싱 테스트
- [ ] 멀티플레이어 이동 테스트

**DB 연동**

- [ ] DB 세팅 및 (유저 정보) 데이터 모델링
- [ ] (서버) 접속 및 접속 해제 시 유저 정보 기록

**DB 연동**

- [ ] (클라이언트) 코드 확인 및 수정

**레이턴시 매니저, 추측항법 적용 - 서버**

- [ ] 게임 세션 별 레이턴시 매니저 추가
- [ ] (서버) 추측항법 계산 및 적용

**핑 체크 - 클라이언트**

- [ ] (클라이언트) ping 전송 로직 추가
- [ ] (클라, 서버) ping 테스트
