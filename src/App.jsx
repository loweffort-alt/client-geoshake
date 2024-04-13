import Sidebar from "./components/sidebar/Sidebar";
import MoreInfo from "./components/MoreInfo";
import MainContent from "./components/content/MainContent";

const App = () => {
  return (
    <div className="flex w-full justify-around h-full" id="home">
      <div className="w-full flex justify-between border-[#ededed] border-t-2">
        <Sidebar />
        <MainContent />
        <MoreInfo />
      </div>
    </div>
  );
};

export default App;
