# 🚀 정재웅의 유니버스 — SKALA HTML/CSS/JS 실습

SKALA 프론트엔드 과정에서 진행한 HTML, CSS, JavaScript 실습 프로젝트입니다.<br>
개인 프로필, 학습 자료, 여행 기록을 모아볼 수 있는 개인 포털 Hub 페이지로 구성되어 있습니다.

## 🔗 미리보기

> `html/index.html`을 열면 전체 Hub 페이지로 이동합니다.

## 📁 폴더 구조

```
SKALA-HTML-PRAC/
└─ html/
   ├─ index.html            # 메인 Hub 페이지 (nav / main / aside 시맨틱 레이아웃)
   ├─ myProfile.html        # 나의 소개 (ul, ol, dl)
   ├─ myClass.html          # 나의 강의 시간표 (table, rowspan/colspan)
   ├─ myHoliday.html        # 나의 휴일 일과 (h1, h2, br, p, mark)
   ├─ myTrip.html           # 나의 여행지 (audio, img, video, grid 갤러리)
   ├─ signUp.html           # 회원가입 폼 (form, fieldset, input, select, textarea)
   ├─ signUpResult.html     # 회원가입 결과 페이지
   │
   ├─ css/
   │  └─ style.css          # 전체 스타일 (박스모델, flex, grid, 반응형, 애니메이션)
   │
   ├─ script/
   │  ├─ upDown.js          # 업다운 숫자 맞추기 게임
   │  ├─ grade.js           # 성적 계산기 (평균/합격 판정)
   │  ├─ bag.js             # 내 가방 보기 (Object 배열 출력)
   │  ├─ weatherAPI.js      # 날씨 데이터 요청 모듈 (export)
   │  └─ realtimeInfo.js    # 날씨 화면 표시 모듈 (import, DOM 조작)
   │
   └─ media/
      ├─ *.jpg / *.png      # 여행 사진
      └─ *.mp3 / *.mp4      # 배경음악, 브이로그 영상
```

## ✨ 주요 기능

| 페이지 | 설명 | 사용 기술 |
|---|---|---|
| 🏠 index.html | 전체 페이지를 모아보는 포털 Hub | `nav`, `main`, `aside`, Flexbox, Grid |
| 👤 myProfile.html | 자기소개 및 올해 목표 | `ul`, `ol`, `dl/dt/dd` |
| 📅 myClass.html | 강의 시간표 | `table`, `rowspan`, `colspan` |
| 🎉 myHoliday.html | 휴일 일과 소개 | `h1~h2`, `mark`, `br` |
| ✈️ myTrip.html | 여행 사진/음악/영상 앨범 | `audio`, `video`, CSS Grid, 애니메이션 |
| 📝 signUp.html | 회원가입 폼 | `form`, `fieldset`, `select`, `textarea` |
| 🎮 미니 게임 | 업다운 게임 / 성적 계산기 / 내 가방 보기 | JavaScript 반복문, 배열, 객체 |
| 🌤️ 실시간 날씨 | 도시 선택 시 실시간 기온/습도 표시 | `fetch`, `async/await`, ES 모듈, DOM 이벤트 |

## 🛠️ 사용 기술

- **HTML5** — 시맨틱 태그, 폼, 미디어 태그
- **CSS3** — 박스 모델, Flexbox, Grid, 반응형(`@media`), 애니메이션(`@keyframes`)
- **JavaScript (ES6+)** — DOM 조작, 이벤트 처리, `async/await`, ES 모듈(`import`/`export`)
- **Open-Meteo API** — 실시간 날씨 데이터 (무료, 인증 불필요)

## ▶️ 실행 방법

1. VS Code에서 프로젝트 폴더 열기
2. `Live Server` 확장 설치
3. `html/index.html`을 열고 우클릭 → **Open with Live Server**

> ⚠️ 실시간 날씨 기능은 ES 모듈(`type="module"`)을 사용하므로, 파일을 더블클릭해서 여는 방식이 아닌 **반드시 Live Server(로컬 서버)** 로 실행해야 정상 작동합니다.

## 📱 반응형 지원

화면 너비 **786px 이하**에서는 아래와 같이 레이아웃이 자동으로 재배치됩니다.

- 바로가기 메뉴: 가로 나열 → 세로 1열
- 본문(main) / 사이드바(aside): 가로 배치 → 세로 1열
- 여행 사진 갤러리: 3열 → 1열

## 👤 Author

정재웅 · SKALA Front-End Course
문의: dnd2sla@naver.com