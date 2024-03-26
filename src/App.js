
import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './utils/appStore';
function App() {
  return (
    // provider is for redux store
    <Provider store={appStore}>
      <Body />
    </Provider>
    
  );
}

export default App;
