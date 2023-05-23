import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../database/firebase'; 
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../styledComponents/Button';

export default function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("")
  
  //회원가입
  const createUser = (e) => {
    // submit으로 진행하면 새로고침발생
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate('/main')
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        navigate('/')

    });
  }

  // 로그인
  const onLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      navigate('/main')
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      navigate('/')
    });
  
  }

  return (
    <div>
        <h3>로그인 또는 회원가입 페이지입니다</h3>
        <form action="" onSubmit={createUser}>
            <label htmlFor="">이메일</label>
            <input type="email" required
            onChange={(e)=>{setEmail(e.target.value)}}
            /> <br />
            <label htmlFor="">비밀번호</label>
            <input type="password" required
            onChange={(e)=>{setPassword(e.target.value)}}
            /> <br />
            <Button color="green" type='submit'>회원가입</Button>
            <Button type='button' onClick={onLogin}>로그인</Button>
        </form>
    </div>
  )
}
