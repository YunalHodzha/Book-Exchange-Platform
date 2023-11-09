import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <h2 className={styles.loginTitle}>Login</h2>
            <form>
                <div className={styles.loginFormGroup}>
                    <label className={styles.loginLabel} htmlFor="email">Email:</label>
                    <input className={styles.loginInput} type="email" id="email" name="email" />
                </div>
                <div className={styles.loginFormGroup}>
                    <label className={styles.loginLabel} htmlFor="password">Password:</label>
                    <input className={styles.loginInput} type="password" id="password" name="password" />
                </div>
                <button className={styles.loginButton} type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;