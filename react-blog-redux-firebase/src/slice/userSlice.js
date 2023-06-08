import { createSlice } from '@reduxjs/toolkit'
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../database/firebase';

export const userSlice = createSlice({
    // name은 반드시 문자열로 작성
    name : "user",
    initialState : {
        email : "",
        uid : null,
    },
    // state의 값을 바꾸는 함수
    reducers : { 
        // 로그인 했을 때, 값 넣는 리듀서
        loginUser : (state, action)=>{
            state.email = action.payload.email;
            state.uid = action.payload.uid;
            
            // state 자체에 바로 값을 넣을수 없다
            // state = action.payload;
            // 값을 바로넣고 싶으면 return action.payload사용
        },
        // 로그아웃했을때 state의 값을 바꾸는 리덕스
        logoutUser : (state)=>{
            state.uid = null;
            state.email = ""
        }
    }
})

// 비동기 함수를 사용하기위한 thunk 함수
// dispatch는 액션함수를 사용하기 위한 함수
// 비동기함수 액션에서 값을 가져올때 첫번째 값에 매개변수를 사용
export const checkUser = (user) => async(dispatch) => {
    const docRef = await getDoc(doc(db, "users", user.uid))
    // exists() 함수는 getDoc을 통해 가져온 값이 있으면 true
    // 없으면 false
    if(!docRef.exists()) {
      // 유저 추가 함수 - firestore 작성
      // user {uid, email} 
      await setDoc(doc(db, "users", user.uid), user);
    }else {
        console.log("가입되어 있습니다")
    }

    // 회원가입인지, 로그인인지 확인후 로그인
    dispatch(loginUser(user));
}

export const { loginUser, logoutUser } = userSlice.actions;
export default userSlice.reducer;