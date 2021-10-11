class TokenAuthenticateService{
    
    getAccessToken () {
        return localStorage.getItem("authJWT")
    };
    
    getRefreshToken() {
        return localStorage.getItem("refreshToken")
    };
    
    updateLocalAccessToken(jwt) {
        return localStorage.setItem("authJWT", jwt)
    }
}

export default new TokenAuthenticateService();