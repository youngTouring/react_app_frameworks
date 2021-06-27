import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import AppReducers from "../redux/reducers";
import { GlobalStyle } from '../shared/styleHelpers/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import AppBootstrap from "./AppBootstrap";

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(AppReducers, composeEnhancers());

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <div>
        <BrowserRouter>
          <AppBootstrap/>
        </BrowserRouter>
      </div>
    </Provider>
  )
}

export default App;