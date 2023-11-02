import styles from './Login.module.css'

export const Login = () => {
    return (
        <div className={styles.container}>
            <h2>Login</h2>
            <div className={styles['form-group']}>
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" />
            </div>
            <div className={styles['form-group']}>
                <label>Password:</label>
                <input type="password" placeholder="Enter your password" />
            </div>
            <button type="submit">Login</button>
        </div>
    );
}