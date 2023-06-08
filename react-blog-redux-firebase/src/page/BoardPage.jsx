import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../database/firebase';

export default function BoardPage() {

  // 화면에 출력하기 위한 state
  const [board, setBoard] = useState();

  // 주소창의 params 값 가져옴
  const params = useParams();
  
  // 주소창에서 가져옴 params.id를 이용해서 firebase의 문서 가져옴
  // 화면이 보이자마자 들고옴
  useEffect(()=>{
    const getBoard = async() => {
        // firestore에서 저장된 값을 가져옴
        const docSnap = await getDoc( doc(db, "boards", params.id) );
        // state에서 화면에 출력
        setBoard({
            ...docSnap.data()
        })
    }
    getBoard();

  },[])

  return (
    <div>
        {   // 처음에 값이 비어있을 경우는 항상 &&를 통해서 
            // 값이 있을때만 보이게 하기
            board && 
            <div>
                <h3>{board.title}</h3>
                <p>{board.email} / {board.writeTime.toDate().getHours()}: </p>
                <hr />
                <p>{board.content}</p>
            </div>
        }

    </div>
  )
}
