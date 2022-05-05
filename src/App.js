import Header from './Components/Header';
import Input from './Components/Input';
import Modal from "react-modal";

import './App.css';

Modal.setAppElement("#root");

function App() {
  return (
    <>
      <Header />
      <Input />
    </>
  );
}

export default App;
