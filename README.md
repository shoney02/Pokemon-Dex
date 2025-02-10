# Pokemon Dex - React App

## Live Demo
pokemon-dex-wheat.vercel.app

## 프로젝트 소개

Pokemon Dex는 React와 Redux Toolkit을 활용하여 포켓몬 도감을 관리하는 웹 애플리케이션입니다. 사용자는 포켓몬 목록을 확인하고, 최대 6마리의 포켓몬을 선택하여 나만의 팀을 구성할 수 있습니다.

## 기술 스택

- Frontend: React, React Router, Redux Toolkit, styled-components
- State Management: Redux Toolkit (RTK)
- UI Libraries: react-toastify, sweetalert2
- Storage: LocalStorage (선택한 포켓몬 유지)
- Deployment: Vercel

## 주요 기능

- 포켓몬 목록 조회
- 포켓몬 상세 정보 확인
- 최대 6마리까지 포켓몬 추가 및 삭제
- Redux Toolkit을 활용한 전역 상태 관리
- LocalStorage를 이용한 데이터 유지
- react-toastify 및 sweetalert2를 이용한 알림 UI 구현

## 프로젝트 구조

/src
  ├── assets/               # 이미지 및 로고
  ├── components/           # 재사용 가능한 컴포넌트
  ├── pages/                # 페이지 컴포넌트 (Home, Dex, Detail)
  ├── redux/                # Redux Toolkit 설정 (Slices & Store)
  ├── shared/               # 공통 컴포넌트 및 Router 설정
  ├── Data/MOCK_DATA.js     # 포켓몬 더미 데이터
  ├── App.js                # 메인 App 컴포넌트
  ├── index.js              # React 엔트리 파일
