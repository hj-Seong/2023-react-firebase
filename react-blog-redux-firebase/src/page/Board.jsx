import { Timestamp, collection, getDocs, orderBy, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { db } from '../database/firebase';

export default function Board() {
  const user = useSelector((state)=>state.user);

  const [boards, setBoards] = useState();

  useEffect(()=>{
    // boards 컬랙션의 값을 가져와서 사용
    const getBoards = async () => {
        const q = query(collection(db, "boards"), orderBy("writeTime","desc"));
        const querySnapshot = await getDocs(q);

        // state사용하지 않은 값들은 업데이트시 화면에 표시X
        let dataArray = [];
        querySnapshot.forEach((doc) => {
            let data = {
                id : doc.id,
                email : doc.data().email,
                title : doc.data().title,
                writeTime : doc.data().writeTime
            }
            dataArray.push(data)
            console.log(doc.id, " => ", doc.data());
        });
        setBoards(dataArray)

    }
    getBoards();

  },[])

  return (
    <div>
        <h3>게시물</h3> 
        {
            user.uid && <Link to='/board-write-form'>글 작성하기</Link>
        }
        <ul>
            <Link to =''>
                <li>게시물 이름, 작성자, 시간</li>
            </Link>
            {
                boards && boards.map((board)=>(
                    <Link to ={`/board/${board.id}`} key={board.id}>
                        <li>{board.title}, {board.email}, {board.writeTime.toDate().getHours()}:{board.writeTime.toDate().getMinutes()}</li>
                    </Link>
                ))
            }
        </ul>
    </div>
  )
}
