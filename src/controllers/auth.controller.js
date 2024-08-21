import { status } from '../../config/response.status.js';
import { kakaoLoginService } from '../services/auth.service.js';
import { response } from '../../config/response.js';

export const logInKakao = asyncWrap(async(req, res) => {
    const provider = 'kakao';
    const { data, error } = await kakaoLoginService(provider);

    if (data.url) {
        // 카카오 로그인 URL로 리다이렉트
        res.redirect(data.url);
    } else if (error) {
        res.send((response(status.FAIL)));
    }
});

export const authCallback = asyncWrap(async(req, res) => {
    const code = req.query.code;
    const next = req.query.next ?? '/';

    if (code) {
        const supabaseClient = createServerClient(
            process.env.PROJECT_URL,
            process.env.ANON_KEY,
            {
                cookies: {
                    getAll() {
                        return parseCookieHeader(req.headers.cookie ?? '');
                    },
                    setAll(cookiesToSet) {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            res.append('Set-Cookie', serializeCookieHeader(name, value, options))
                        );
                    },
                },
            }
        );

        await supabaseClient.auth.exchangeCodeForSession(code);
    }
    res.redirect(303, `/${next.slice(1)}`);
});