'use client'
import React, { useState } from 'react';

// 공지사항 타입 정의
interface NoticeItem {
  id: number;
  title: string;
  date: string;  // 글 적은 날짜
  content: string;
}

//따로 컴포넌트 분리 예정
const Notice = () => {
  // 공지사항 목록 상태
  const [notices, setNotices] = useState<NoticeItem[]>([
    { id: 1, title: '동아리실 위치&비밀번호', date: '2023-03-01', content: '2024년 상반기는 지금 보시는 탑스핀 사이트를 이용하여 더욱 더 편리한 편의를 제공하기 위해 운영 중입니다. 탑스핀 내에서 발생하는 공지나 활동 기록 등 거의 모든 활동들을 한 눈에 보실수 있습니다.' },
    { id: 2, title: '2024 상반기 공지', date: '2023-03-02', content: '공지 내용 2' },
    { id: 3, title: '팀 미션 조편성', date: '2023-03-03', content: '공지 내용 3' },
    { id: 4, title: '살려주세요', date: '2023-03-04', content: '공지 내용 4' },
    { id: 5, title: '버거킹', date: '2023-03-05', content: '공지 내용 5' },
  ]);

  // 선택된 공지사항 상태
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);

  return (
    <div>
      <div className="notice-list p-4">
        <h2>공지사항 목록</h2>
        <table className='justigy-between w-full' >
          <thead>
            <tr>
              <th className='text-left'>글 제목</th>
              <th className='text-right'>작성일</th>
            </tr>
          </thead>
          <tbody className='w-full'>
            {notices.map((notice) => (
              <tr key={notice.id} onClick={() => setSelectedNotice(notice)} style={{ cursor: 'pointer' }}>
                <td className='text-left'>{notice.title}</td>
                <td className='text-right'>{notice.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="notice-detail">
        {selectedNotice && (
          <div>
            <h2>{selectedNotice.title}</h2>
            <p>{selectedNotice.content}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notice;
