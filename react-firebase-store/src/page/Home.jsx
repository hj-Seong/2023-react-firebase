import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { auth } from '../database/firebase'
import { userLogin } from '../slice/userSlice'
import { onAuthStateChanged } from 'firebase/auth'

export default function Home() {
  // 로그인해서 리덕스에 저장한 값은 새로고침전까지 유지
  const user = useSelector((state)=>(state.user))
  const user1 = useSelector((state)=>(state.user.user))

  const dispatch = useDispatch();

  // 새로고침할때, auth에 로그인이 되었는지 확인하고
  // 로그인이 되어있다면 값을 가져온다
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        dispatch(userLogin({
          name : user.displayName,
          email : user.email,
          uid : user.uid,
          photo : user.photoURL
        }))
      } else {
        // User is signed out
      }
    });
  },[])

  return (
    <div>
      <h3>Home</h3>
      <Link to='/login'>로그인창으로 이동</Link>
      <p>{user.user && user.user.name}</p>
      <img src={user1 && user1.photo} alt="" />
    </div>
  )
}
