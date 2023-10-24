import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <Link to="/">
        <div class="header-logo">logo</div>
      </Link>
      <nav>
        <ul id="topMenu">
          <li>
            <a href="#">
              모집<span>⬇</span>
            </a>
            <ul class="subMenu">
              <li>
                <Link to="/Recruitment" href="">
                  영상에디터
                </Link>
              </li>
              <li>
                <a href="">썸네일러</a>
              </li>
              <li>
                <a href="">SD캐릭터</a>
              </li>
              <li>
                <a href="">버츄얼</a>
              </li>
              <li>
                <a href="">촬영팀</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">
              구직<span>⬇</span>
            </a>
            <ul class="subMenu">
              <li>
                <a href="">영상에디터</a>
              </li>
              <li>
                <a href="">썸네일러</a>
              </li>
              <li>
                <a href="">SD캐릭터</a>
              </li>
              <li>
                <a href="">버츄얼</a>
              </li>
              <li>
                <a href="">촬영팀</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">
              커뮤니티<span>⬇</span>
            </a>
            <ul class="subMenu">
              <li>
                <a href="">자유게시판</a>
              </li>
              <li>
                <a href="">피드백</a>
              </li>
              <li>
                <a href="">수익공개</a>
              </li>
              <li>
                <a href="">세금Q&A</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="#">
              스토어<span>⬇</span>
            </a>
            <ul class="subMenu">
              <li>
                <a href="">프리미어프로</a>
              </li>
              <li>
                <a href="">파이널컷</a>
              </li>
              <li>
                <a href="">그림/배경</a>
              </li>
              <li>
                <a href="">파워배너</a>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/login">로그인</Link>
            <ul class="subMenu login"></ul>
          </li>
          <li>
            <Link to="/member">회원가입</Link>
            <ul class="subMenu member"></ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
