import maincss from "./Login.module.css";

const Login = () => {
  return (
    <div className={maincss["container"]}>
      <div className={maincss["wrapper"]}>
        <div className="logo">Logo</div>
        <div className="explanation">
          <p>JobTube는 ...... ...... 사이트입니다</p>
        </div>
        <div className="login-bar">JobTube 아이디 로그인</div>
        <div className={maincss["Id"]}>
          <label for="id">아이디</label>
          <input id="id" type="text" />
        </div>
        <div className={maincss["passWord"]}>
          <label for="password">비밀번호</label>
          <input id="password" type="password" />
        </div>
        <div className={maincss["find"]}>
          <a href="#">계정찾기</a>
        </div>
        <div className="LoginButton">
          <button>로그인</button>
        </div>
        <div className="joinMember">
          <p>
            아직 회원이 아니신가요? <a href="#">회원가입</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
