const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());    // HTML에서 보낸 JSON을 읽기 위해 필수!
app.use(cors());           // CORS 에러 방지

// 4. [중간 다리] 사용자가 정보를 보내면 받아주는 곳 (API)

app.post('/register', (req, res) => {
    console.log(req.body); // 터미널에 데이터가 잘 찍히는지 확인

    // 여기에서 DB에 저장하는 코드 실행 (SQL 등)
    console.log(`DB에 저장 중: ${name}, ${email}`);

    // 응답을 확실히 보내주어야 합니다.
    res.json({ message: '가입 완료되었습니다!' });

    });

    app.listen(3000, () => console.log('서버가 3000번 포트에서 돌아가는 중'));

    // 추가로 설치해야 할 것: npm install mysql2
    const mysql = require('mysql2');

    // DB 접속 정보 (나중에 실제 본인 DB 정보로 수정)
    const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '비밀번호',
    database: 'my_shop_db'
    });

    // app.post 안의 console.log를 지우고 아래 코드로 교체하세요
    app.post('/register', (req, res) => {
        const { name, email } = req.body;
        
        // DB에 실제 데이터 삽입
        db.query('INSERT INTO members (name, email) VALUES (?, ?)', [name, email], (err, result) => {
            if (err) {
                return res.send({ status: 'fail', message: 'DB 저장 실패' });
            }
            res.send({ status: 'success', message: 'DB에 저장 성공!' });
        });
    });
   

    // DB 연결 설정
    const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',      // 보통 root입니다
    password: '0000', // MySQL 설치할 때 설정한 비밀번호
    database: 'shop_db' // 방금 보신 그 데이터베이스 이름
    });

    // 연결 확인
    db.connect((err) => {
    if (err) throw err;
    console.log('MySQL 데이터베이스 연결 성공!');
    });

    // 데이터 저장 API (수정된 부분)
    app.post('/register', (req, res) => {
        const { name, email } = req.body;
        
        // member 테이블에 데이터 넣기
        const sql = 'INSERT INTO member (member_id, member_name, member_email) VALUES (?, ?)';
        db.query(sql, [name, email], (err, result) => {
            if (err) {
                console.error(err);
                return res.send({ status: 'fail', message: '저장 실패' });
            }
            res.send({ status: 'success', message: 'DB 저장 완료!' });
        });
    });

    app.listen(3000, () => console.log('서버가 3000번 포트에서 돌아가는 중'));