import './App.css';
import { Routes, Route} from 'react-router-dom'
import Main from './page/Main';
import Board from './page/Board';
import { useDispatch } from 'react-redux';
import { loginUser } from './slice/userSlice';
import { useEffect } from 'react';
import BoardWriteForm from './page/BoardWriteForm';

function App() {

  const dispatch = useDispatch();
  // 화면 새로고침(F5)할 때마다 확인
  // app컴포넌트는 한번 마운트되고 새로고침 또는 꺼질때까지 마운트되지않는다
  useEffect(()=>{
    const user = JSON.parse(sessionStorage.getItem('user'));
    if(user) {
      dispatch(loginUser(user))
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/board' element={<Board />}/>
        <Route path='/board-write-form' element={<BoardWriteForm />} />
      </Routes>
    </div>
  );
}

export default App;
