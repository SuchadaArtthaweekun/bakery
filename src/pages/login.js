import '../css/stylesheet.css';
import { Redirect, Link } from "react-router-dom";
import React, { useState } from "react";


async function LoginAddmin(credentials) {
    return fetch("http://localhost:8081/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    }).then((data) => data.json());
}


const Logform = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState("0");
    const submit = async (e) => {
        e.preventDefault();
        const response = await LoginAddmin({
            name,
            password,
        });
        if (response.Name != null) {
            setRedirect("admin")
        }
        if (response.message === "Incorrect Password") {
            alert("รหัสผานไม่ถูกต้อง");
        }
        if (response.message === "User Not Found") {
            alert("ไม่พบชื่อผู้ใช้");
        }
    }
    if (redirect === "admin") {
        return <Redirect to={`/adminhome/${name}`}  />;
    }
    return (
        <>
            <form className='form-login' onSubmit={submit} >
                <h3>Login Here</h3>
                <label htmlFor="username">Username</label>
                <input type="text" placeholder="User Name" id="username" required autoFocus onChange={(e) => setName(e.target.value)} />

                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Password" id="password" required onChange={(e) => setPassword(e.target.value)} />

                <button className='btn-log' type="submit">Log In</button>
                <button className='btn-log'><Link to="/">Cancel</Link></button>

            </form>
        </>
    )
}

function Login() {

    return (
            <>
            <Logform />
            </>
                
            

    );
}

export default Login;