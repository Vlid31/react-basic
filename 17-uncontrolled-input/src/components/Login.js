const Login = () => {
    const handleFormSubmit = (event) => {
        event.preventDefault()
        const userData = {
            username: event.target.username.value,
            password: event.target.password.value
        }
        console.log(userData)
        alert(JSON.stringify(userData))
    };
    return(
        <>
            <h1>Login form
                <form onSubmit={handleFormSubmit}>
                    <label>Login:
                        <input type="text" name="username" />
                    </label>
                    <label>Password:
                        <input type="password" name="password" />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </h1>
        </>
    );
};

export default Login