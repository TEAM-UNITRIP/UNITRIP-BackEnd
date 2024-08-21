import dotenv from 'dotenv';
import mysql from 'mysql2/promise';

dotenv.config();

export const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost', // mysql의 hostname
  user: process.env.DB_USER || 'root', // user 이름
  port: process.env.DB_PORT || 3306, // 포트 번호
  database: process.env.DB_TABLE || 'umc_wb', // 데이터베이스 이름
  password: process.env.DB_PASSWORD || 'password', // 비밀번호

  /* Pool에 획득할 수 있는 connection이 없을 때,
  true면 요청을 queue에 넣고 connection을 사용할 수 있게 되면 요청을 실행하며,
  false이면 즉시 오류를 내보내고 다시 요청*/
  waitForConnections: true,
  //최대 커넥션 수
  connectionLimit: 10, 
  //대기열에 넣을 수 있는 요청의 제한
  queueLimit: 0, 
});