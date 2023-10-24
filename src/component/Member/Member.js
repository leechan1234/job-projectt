import "./Member.css";

const Member = () => {
  return (
    <div class="member_container">
      <div class="member_wrapper">
        <div class="logo">Logo</div>
        <div class="explanation">
          <p>JobTube는 ...... ...... 사이트입니다</p>
        </div>
        <div class="login-bar">JobTube 회원가입</div>

        <div class="form-Wrapper">
          <div class="Id">
            <label for="id">아이디</label>
            <input
              type="text"
              id="id"
              placeholder=" 5~15자 이내로 입력해주세요"
            />
            <button type="submit">아이디 중복확인</button>
          </div>
          <div class="passWord">
            <label for="passWord">비밀번호</label>
            <input
              id="passWord"
              type="password"
              placeholder="최소 6자 이상(알파벳,숫자)"
            />
          </div>
          <div class="name">
            <label for="username">닉네임</label>
            <input
              type="text"
              id="username"
              placeholder="알파벳,한글,숫자를 20하 이하로 입력해 주세요"
            />
            <button type="submit">닉네임 중복 확인</button>
          </div>
          <div class="email">
            <label for="email">이메일</label>
            <input type="text" id="email" placeholder="dddd@...com" />
          </div>
          <div class="p-number">
            <label for="number">전화번호</label>
            <input type="text" id="number" placeholder="010-1234-5678" />
          </div>
        </div>

        <div class="LoginButton">
          <button>로그인</button>
        </div>
        <div class="joinMember">
          <p>
            이미 회원이신가요?? <a href="#">로그인</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Member;
