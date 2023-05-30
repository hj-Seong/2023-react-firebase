import React, { useState } from 'react'

// 파이어 스토어
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from '../database/firebase'

export default function BookComp() {
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");

  // 책 추가 메소드
  const addBook = async(e) => {
    e.preventDefault();
    try {
        // try안에 작성하는 내용은 서버와 연결하고,
        // 서버에서 받아온 값을 활용하는 내용
        const docRef = await addDoc(collection(db, "readingbooks"), {
          done : false, //고정
          memo : "",  //고정
          startDate : Timestamp.fromDate(new Date()), //고정
          title : title, //입력 받아오는 값
          writer : writer, //입력 받아오는 값
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        // 어떤 오류가 발생했는지, 발생했다면 어떻게 처리할지
        console.error("Error adding document: ", e);
    }
    // try-catch 상관없이 실행될 내용
    setTitle("");
    setWriter("");
  }
  return (
    <div>
        <h3>readingbooks 컬렉션</h3>
        <h3> 책 추가</h3>
        <form onSubmit={ addBook }>
            <label htmlFor="">책 이름</label>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}}/> <br />
            <label htmlFor="">작가 이름</label>
            <input type="text" value={writer} onChange={(e)=>{setWriter(e.target.value)}} /> <br />
            <button type='submit'>추가</button>
        </form>
        <hr />
            <form>
                <input type="text" />
                <button type='submit'>읽은 책 검색하기</button>
            </form>
        <hr />
            <h4>추가한 날짜 책 제목</h4>
            <p>메모없음 또는 메모</p>
        <hr />
            
            <h4>추가날짜~읽는중/느낀점날짜 책 제목</h4>
            <p>메모</p>
            <button>감상문 적기</button>
            <button>X</button>
    </div>
  )
}
