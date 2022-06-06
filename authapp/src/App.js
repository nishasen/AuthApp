import './App.css';
import { Toast, Topnav } from './Components';
import { RoutePath } from './RoutePath/RoutePath';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './Services';
import { checkLogin } from './Features';

function App() {
  const { token } = useSelector(state => state.auth)
  const dispatch = useDispatch();
  dispatch(checkLogin());
  useEffect(() => {
    dispatch(getUser(token, dispatch))
  }, [token])
  return (
    <div className="App">
      <div className="nav">
        <Topnav />
      </div>
      <section className="section">
        <RoutePath />
      </section>
      <Toast />
    </div>
  );
}

export default App;
