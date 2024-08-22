import { status } from '../../config/response.status.js';
import { kakaoLoginService } from '../services/auth.service.js';
import { response } from '../../config/response.js';

export const logInKakao = async(req, res) => {
    const provider = 'kakao';
    const { data, error } = await kakaoLoginService(provider);

    if (data.url) {
        // 카카오 로그인 URL로 리다이렉트
        res.redirect(data.url);
    } else if (error) {
        res.send((response(status.FAIL)));
    }
};

export const authCallback = async(req, res) => {
    //카카오 인증 코드
    const code = req.query.code;
    //리다이렉트 경로
    const next = req.query.next ?? '/';

    if (code) {
        // 토큰 요청
        const tokenResponse = await fetchKakaoToken(code);
        const { id_token } = tokenResponse;

        // ID 토큰으로 로그인 요청
        const session = await loginWithIdToken(id_token);

        if (!session) {
            return res.send(response(status.FAIL)); // 로그인 실패 처리
        }
    }
    //카카오 서버로 로그인 POST 과정이 잘 마무리되면 지정해준 페이지로 리다이렉트    
    res.redirect(303, `/${next.slice(1)}`);
};