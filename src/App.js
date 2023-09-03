import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import Chats from "./Pages/Chats";
import { Login } from "./Components/Authentication/Login";

function App() {
  if (!localStorage.getItem("userInfo")) {
    return <Home />;
  }
  return (
    <>
      {/* <BrowserRouter> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/chats" element={<Chats />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
