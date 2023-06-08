import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { auth, db } from '../database/firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';

import { useSelector, useDispatch} from 'react-redux'
import { checkUser, loginUser } from '../slice/userSlice';

export default function Main() {

  // 화면에 보이기 위해 state사용
  // 화면에 출력하고 공통으로 데이터를 사용하기위해 리덕스 사용
  const user = useSelector((state)=>state.user);

  const dispatch = useDispatch();


  // 구글 로그인 함수
  const onGoogleLogin = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // 구글로 로그인 후 정보값 가져옴
        const user = result.user;
        console.dir(user);
        
        // 로그인했다면, uid를 확인후 firestore에 저장
        dispatch(checkUser({uid : user.uid, email : user.email}))

    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
  }
  return (
    <div>
        <h3>Main</h3>
        <button onClick={onGoogleLogin}>구글로 로그인</button>
        <h2>{user && user.email}님 환영합니다</h2>
    </div>
  )
}
