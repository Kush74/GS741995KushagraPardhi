import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { HorizontalMenu } from "./components/nav/HorizontalMenu";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="h-screen flex flex-col">
          <HorizontalMenu />
          <div className="flex-col flex-1">
            <AppRoutes />
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
