import "./Community.css";
import CommunityItem from "./CommunityItem";

const Community = () => {
  return (
    <div>
      <div className="Community__Container">
        <div className="Community__Wrapper">
          <header className="header__Box">
            <div>커뮤니티😊</div>
            <div>여러 지식을 나눔하세요.</div>
          </header>
          <div className="Button__bar">
            <button>작성하기 🥖</button>
          </div>
          <CommunityItem />
          <CommunityItem />
          <CommunityItem />
          <CommunityItem />
          <CommunityItem />
        </div>
      </div>
    </div>
  );
};

export default Community;
