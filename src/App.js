import { Link } from 'react-router-dom';
import './App.scss';
import Header from './components/header/Header';
const App = () => {

  return (
    <div className="app--container">
      <Header></Header>
      <div>
        test link
        <div>
          <button>
            <Link to='/Users'>go to User page</Link>
          </button>
          <button>
            <Link to='/Admins'>go to Admin page</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
