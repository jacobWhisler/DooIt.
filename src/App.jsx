import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import BottomBar from "./components/BottomBar/BottomBar";

import { useState } from "react";

function App() {
  const [currentCompleted, setCurrentCompleted] = useState("current");
  console.log(currentCompleted);

  return (
    <>
      <Header />
      <Main currentCompleted={currentCompleted} />
      <BottomBar
        currentCompleted={currentCompleted}
        setCurrentCompleted={setCurrentCompleted}
      />
    </>
  );
}

export default App;
