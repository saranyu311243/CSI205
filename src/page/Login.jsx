import React, { useRef } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { verifyUser } from '../data/users';
import '../styles/Login.css'
const Login = ({ setToken, setRole }) => {
    const userRef = useRef()
    const passRef = useRef()
    return (
        <div className='login-container'>
            <div >
                <img src="https://no-cdn.shortpixel.ai/client/to_avif,q_lossy,ret_wait/https://shortpixel.com/blog/wp-content/uploads/2023/12/nyan-cat.gif"
                    alt=""
                    style={{ width: '100%', height: '300px' }}
                />
            </div>
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
                type="text"
                id="username"
                placeholder='user'
                ref={userRef}
                title='type "user"'
            />


            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
                type="password"
                id="password"
                placeholder='pass'
                ref={passRef}
                title='type "pass"'
            />

            <div className='d-flex gap-2'>

                <Button
                    variant="danger"
                    className="btn btn-danger mt-3"
                    onClick={() => {
                        userRef.current.value = ''
                        passRef.current.value = ''
                    }}
                >
                    Clear
                </Button>

                <Button className='btn btn-success mt-3' onClick={() => {
                    const user = userRef.current.value.trim()
                    const pass = passRef.current.value.trim()
                    userRef.current.value = ''
                    passRef.current.value = ''
                    const userinfo = verifyUser(user, pass)
                    if (userinfo === null) {
                        alert('Login เข้าสู่ระบบก่อน !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
                        userRef.current.focus()
                    } else {
                        setToken(userinfo.token)
                        setRole(userinfo.role)
                    }
                }}>Login</Button>
            </div>


        </div>
    )
}

export default Login
