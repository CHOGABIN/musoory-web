import React from 'react';

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>머수리</h1>
      <p>수입차 공식 정비 O2O 플랫폼</p>

      <section>
        <h2>1. 사고 접수</h2>
        <input placeholder="차량 번호 입력" /><br/>
        <input placeholder="사고 위치 입력" /><br/>
        <input placeholder="사진 업로드 (URL)" /><br/>
        <button>접수 완료</button>
      </section>

      <section>
        <h2>2. 정비소 찾기</h2>
        <input placeholder="지역 입력" />
        <button>검색</button>
      </section>

      <section>
        <h2>3. 정비 예약</h2>
        <input placeholder="정비소 이름" /><br/>
        <input placeholder="예약 날짜" /><br/>
        <input placeholder="차량 증상" /><br/>
        <button>예약 신청</button>
      </section>

      <section>
        <h2>4. 리워드 확인</h2>
        <p>누적 포인트: 3,200P</p>
        <button>포인트 사용</button>
      </section>
    </div>
  );
}