import "./Community.css";

const CommunityItem = () => {
  return (
    <div className="item__Box">
      <div className="leftBox">
        <div className="name">홍길동</div>
        <div className="com_title"> 날씨 관련</div>
        <div className="com_date">2023-10-25</div>
      </div>
      <div className="rightBox">
        <div className="check">조회수 : 2</div>
      </div>
    </div>
  );
};

export default CommunityItem;
