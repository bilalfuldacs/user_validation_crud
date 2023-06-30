import "./App.css";
import UserInput from "./components/userinput/UserInput";
import Result from "./components/result/result";
import Data from "./components/Data";
import Modal from "./components/Modal/Modal";
import { useState } from "react";

function App() {
  const [preData, setPreData] = useState(Data);
  const [resultData, setResultdata] = useState(null);
  const [isModalOpen, setModalOpen] = useState(null);

  const handleClose = () => {
    setModalOpen(false);
  };

  const addData = (data) => {
    if (data.age === null || data.name.trim() === "" || data.age <= 0) {
      setResultdata(data);
      setModalOpen(true);
    } else {
      setPreData([...preData, data]);
    }
  };
  return (
    <div className="App">
      <UserInput addData={addData} />
      <Modal
        isOpen={isModalOpen}
        onClose={handleClose}
        resultData={resultData}
      />
      {preData.length !== 0 && <Result preData={preData} />}
    </div>
  );
}

export default App;
