import { addDoc, collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

import { db } from '../database/firebase';

export default function FireStoreTest() {
  // 파이어스토어에서 가져온 값을 출력
  const [users, setUsers] = useState();

  // 시작하자마자 값 가져오기
  useEffect(()=>{
    getData();
  },[])

  // 비동기함수로 작성하여 값 가져옴
  async function getData () {
      // getDocs를 통해서 컬렉션안의 모든 문서 가져옴
      const querySnapshot = await getDocs(collection(db, "users"));
      
      // forEach에서 출력한 모든 값을 배열에 담음
      let dataArray = [];
      // forEach를 통해서 모든 문서값에 접근하여 원하는 값을 가져온다
      querySnapshot.forEach((doc) => {
          // doc.id와 doc.data()값을 리덕스/state에 저장하여 
          // 웹에서 사용 >> forEach의 모든내용을 배열로 저장
          dataArray.push(doc.data());

          console.log(`${doc.id} => ${doc.data().first}`);
        });
      // 값이 들어간 배열을 state에 넣어서 활용
      setUsers(dataArray);
  } 

  const addDocData = async () => {
    try {
        // 서버에 연결해서 사용하는 것은 비동기 함수로 작성
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    getData();
  }

  return (
    <div>
        <h3>파이어스토어의 값을 추가, 가져옴 확인</h3>
        <p>users컬렉션 확인</p>
        <button onClick={addDocData}>
            버튼을 누르면 파이어스토어에 값추가
        </button>
        <br />
        {
          users && users.map((user)=>(
            <div>
              <p>{user.first} , {user.born}</p>
            </div>
          ))
        }

    </div>
  )
}
