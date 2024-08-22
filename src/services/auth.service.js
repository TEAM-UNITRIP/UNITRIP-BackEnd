export const fetchKakaoToken = async (code) => {
    const response = await fetch('https://kauth.kakao.com/oauth/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            client_id: process.env.CLIENT_ID,
            redirect_uri: `${PROJECT_URL}/api/auth/kakao/oidc`,
            code,
            client_secret: process.env.CLIENT_SECRET,
        }),    
    });

    return response.json();
};

export const loginWithIdToken = async (id_token) => {
    const { data: { session } } = await supabase.auth.signInWithIdToken({
        provider: 'kakao',
        token: id_token,
    });

    return session;
};