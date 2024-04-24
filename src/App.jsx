import * as React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import MoreInfo from "./components/MoreInfo";
import MainContent from "./components/content/MainContent";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <div id="home">
        <Navbar />
        <div className="flex w-full justify-around h-full">
          <div className="w-full flex justify-between border-[#ededed] border-t-2">
            <Sidebar />
            <MainContent />
            <MoreInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
