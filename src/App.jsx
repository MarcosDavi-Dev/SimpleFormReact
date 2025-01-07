import "./App.css";

// 1 - Criação de form
import MyForm from "./components/MyForm";

function App() {
  return (
    <>
      <h1>From em React</h1>
      <MyForm userName="Marcos" userEmail="marcos@gmail.com" />
    </>
  );
}

export default App;
