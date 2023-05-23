import React from 'react'
import {useSelector} from 'react-redux'

export default function Main() {
  const user = useSelector((state)=>(state))
  return (
    <div>
        <h3>Main</h3>
        <p>로그인이 성공하였습니다</p>
        <p>{user && user.email}</p>
    </div>
  )
}
