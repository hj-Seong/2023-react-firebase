import React from 'react'

export default function BookComp() {
  return (
    <div>
        <h3>readingbooks 컬렉션</h3>
        <h3> 책 추가</h3>
        <form>
            <label htmlFor="">책 이름</label>
            <input type="text" /> <br />
            <label htmlFor="">작가 이름</label>
            <input type="text" /> <br />
            <button type='submit'>추가</button>
        </form>
        <hr />
            <form>
                <input type="text" />
                <button type='submit'>읽은 책 검색하기</button>
            </form>
        <hr />
            읽은책이 나옵니다
        <hr />
            추가한 책이 나옵니다
    </div>
  )
}
