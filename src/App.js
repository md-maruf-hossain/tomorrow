import "./App.css";
import Forecast from "./Components/Forecast";
import Input from "./Components/Input";
import Temperature from "./Components/Temperature";
import TimeLocation from "./Components/TimeLocation";
import TopButton from "./Components/TopButton";

function App() {
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-sky-600 h-fit shadow-xl shadow-gray-400">
      <TopButton />
      <Input/>
      <TimeLocation/>
      <Temperature/>
      <Forecast title="hourly forecast"/>
      <Forecast title="daily forecast"/>
    </div>
  );
}

export default App;
