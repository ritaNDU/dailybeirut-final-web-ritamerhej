import { Provider } from "react-redux";
import store from "./store/store";
import MainNavigator from "./navigation/MainNavigator";

function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}

export default App;
