import ButtonShow from "./components/ButtonShow";
import ButtonLoad from "./components/ButtonLoad";
import Sidebar from "./components/sidebar/Sidebar";
import MoreInfo from "./components/MoreInfo";

const App = () => {
  return (
    <div className="flex w-full justify-around h-full" id="home">
      <div className="w-full flex justify-between border-[#ededed] border-t-4">
        <Sidebar />
        <div className="w-full p-5">
          <ButtonShow />
          <ButtonLoad />
        </div>
        <MoreInfo />
      </div>
    </div>
  );
};

export default App;
