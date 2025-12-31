
import Counter from './Componate/Counter';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>

  );
}


