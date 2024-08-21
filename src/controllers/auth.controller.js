import { status } from '../../config/response.status.js';
import { getKakaoToken } from '../services/temp.service.js';
import { response } from '../../config/response.js';

export const logInKakao = asyncWrap(async(req, res, next) => {
    const headers = req.headers["authorization"];
    const kakaoToken = headers.split(" ")[1];

    const accessToken = await getKakaoToken(kakaoToken);

    res.send(response(status.SUCCESS, {accessToken}));
});