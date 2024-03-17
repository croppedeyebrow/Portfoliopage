// blog data

import frontend from "../assets/Images/frontend.jpg";
import project from "../assets/Images/project.jpg";
import crossplatform from "../assets/Images/crossplatform.jpg";
import native from "../assets/Images/kotlin.jpg";
import uiux from "../assets/Images/uiux.jpg";
import python from "../assets/Images/python.jpg";
import data from "../assets/Images/DB.jpg";
import business from "../assets/Images/Businessmodal.png";

export const Blogs = [
  {
    id: 1,
    name: "프로젝트",
    tags: ["Project", "Frontend", "APP"],
    date: "from 2023~",
    imgSrc: project,
    link: "https://cut-eyebrow.tistory.com/category/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EA%B4%80%EB%A6%AC",
  },
  {
    id: 2,
    name: "프론트엔드",
    tags: ["react", "javascript", "styled-components", "Frontend"],
    date: "from 2023~",
    imgSrc: frontend,
    link: "https://cut-eyebrow.tistory.com/category/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C",
  },
  {
    id: 3,
    name: "크로스플랫폼 : 플러터, 리엑트네이티브",
    tags: ["APP", "flutter", "react-native", "Frontend", "CrossPlatform"],
    date: "from 2424~",
    imgSrc: crossplatform,
    link: "https://cut-eyebrow.tistory.com/category/%EC%95%B1%EA%B0%9C%EB%B0%9C",
  },
  {
    id: 4,
    name: "네이티브 : 코틀린",
    tags: ["APP", "kotlin", "Frontend", "Native"],
    date: "from 2024~",
    imgSrc: native,
    link: "https://cut-eyebrow.tistory.com/category/%EC%95%B1%EA%B0%9C%EB%B0%9C",
  },
  {
    id: 5,
    name: "UIUX",
    tags: ["UIUX", "Figma", "Spline"],
    date: "from 2023~",
    imgSrc: uiux,
    link: "https://cut-eyebrow.tistory.com/category/UIUX%20%EC%97%AD%EB%9F%89",
  },
  {
    id: 6,
    name: "Python",
    tags: ["python", "Backend", "Django", "Flask"],
    date: "from 2023~",
    imgSrc: python,
    link: "https://cut-eyebrow.tistory.com/category/%EB%B0%B1%EC%97%94%EB%93%9C",
  },

  {
    id: 7,
    name: "Data관리",
    tags: ["Data", "DB", "SQL"],
    date: "from 2023~",
    imgSrc: data,
    link: "https://cut-eyebrow.tistory.com/category/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B6%84%EC%84%9D%EA%B8%B0%ED%9A%8D%20%EB%B0%8F%20%EC%97%94%EC%A7%80%EB%8B%88%EC%96%B4%EB%A7%81",
  },
  {
    id: 8,
    name: "도메인/비즈니스모델",
    tags: ["BusinessModal", "Domain"],
    date: "from 2023~",
    imgSrc: business,
    link: "https://cut-eyebrow.tistory.com/category/%EB%8F%84%EB%A9%94%EC%9D%B8%20%EA%B3%B5%EB%B6%80%20%EB%B0%8F%20%EC%82%AC%EC%97%85%20%EA%B8%B0%ED%9A%8D%20%EC%97%AD%EB%9F%89",
  },
];
