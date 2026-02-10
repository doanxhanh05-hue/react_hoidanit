import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import logo from './logo.svg';

const App = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo'></img>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          count =   {count}
        </div>
        <button onClick={() => dispatch(increaseCounter())}>Increase</button>
        <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
      </header>
    </div>
  );
}

export default App;
