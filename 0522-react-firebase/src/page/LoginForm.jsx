import React from 'react'

export default function LoginForm() {
  return (
    <div>
        <h3>로그인 또는 회원가입 페이지입니다</h3>
        <form action="" onSubmit={()=>{}}>
            <label htmlFor="">이메일</label>
            <input type="email" required/> <br />
            <label htmlFor="">비밀번호</label>
            <input type="password" required /> <br />
            <button type='submit'>회원가입</button>
            <button type='button'>로그인</button>
        </form>
    </div>
  )
}
