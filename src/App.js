import Header from "./Header";
import Main from "./Main";
import { DataProvider } from "./context/DataContext";

const App = () => {
  return (
    <div className="App">
      <DataProvider>
        <Header />
        <Main />
      </DataProvider>
    </div>
  );
};

export default App;
