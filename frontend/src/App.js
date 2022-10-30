
import Layout from './components/layout';
import { Provider } from "react-redux";


import store from "./store.js";



function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
