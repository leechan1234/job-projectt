import "./Community.css"

const Community = () => {
  return (
    <div>
      <header>
        <div class="header-logo">logo</div>
        <nav>
          <ul id="topMenu">
            <li>
              <a href="#">
                모집<span>⬇</span>
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
                  <Link to="/community" href="">자유게시판</Link>
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
              <a href="#">로그인</a>
              <ul class="subMenu login"></ul>
            </li>
            <li>
              <a href="#">회원가입</a>
              <ul class="subMenu member"></ul>
            </li>
          </ul>
        </nav>
      </header>
      <div class="Community__Container">
        <div class="Community__Wrapper">
          <header class="header__Box">
            <div>커뮤니티😊</div>
            <div>여러 지식을 나눔하세요.</div>
          </header>
          <div class="Button__bar">
            <button>작성하기 🥖</button>
          </div>
          <div class="item__Box">
            <div class="leftBox">
              <div class="name">홍길동</div>
              <div class="title"> 날씨 관련</div>
              <div class="date">2023-10-25</div>
            </div>

            <div class="righBox">
              <div class="check">조회수 : 2</div>
            </div>
          </div>
          <div class="item__Box">
            <div class="leftBox">
              <div class="name">홍길동</div>
              <div class="title"> 날씨 관련</div>
              <div class="date">2023-10-25</div>
            </div>

            <div class="righBox">
              <div class="check">조회수 : 2</div>
            </div>
          </div>
          <div class="item__Box">
            <div class="leftBox">
              <div class="name">홍길동</div>
              <div class="title"> 날씨 관련</div>
              <div class="date">2023-10-25</div>
            </div>

            <div class="righBox">
              <div class="check">조회수 : 2</div>
            </div>
          </div>
          <div class="item__Box">
            <div class="leftBox">
              <div class="name">홍길동</div>
              <div class="title"> 날씨 관련</div>
              <div class="date">2023-10-25</div>
            </div>

            <div class="righBox">
              <div class="check">조회수 : 2</div>
            </div>
          </div>
          <div class="item__Box">
            <div class="leftBox">
              <div class="name">홍길동</div>
              <div class="title"> 날씨 관련</div>
              <div class="date">2023-10-25</div>
            </div>

            <div class="righBox">
              <div class="check">조회수 : 2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
