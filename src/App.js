import Themecontextprovider from './ThemeContextProvider';
import './App.css';
import Sidebar from './components/Styled-Component/Sidebar';
// import Form from './components/Form/Form';
// import Todo from "./components/Todo/Todos";

function App() {
  return (
    <Themecontextprovider>
      <div>
        {/* <Todo key="js78716287we" /> */}
        <Sidebar />
      </div>
    </Themecontextprovider>
  );
}

export default App;