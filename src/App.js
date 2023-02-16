import Routing from "./routes";
import { ConfigProvider } from "antd";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#f07d00",
          },
        }}
      >
        <Routing />
      </ConfigProvider>
    </div>
  );
}

export default App;
