export class AuthService {
    logged = false;

    isAuthenticaded() {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.logged);
            }, 800);
        });
        return promise;
    }

    logIn() {
        this.logged = true;
    }

    logOut() {
        this.logged = false;
    }
}