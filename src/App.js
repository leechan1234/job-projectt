import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./component/Login/Login";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Member from "./component/Member/Member";
import Recruitment from "./component/Recruitment/Recruitment";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/member" element={<Member />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
