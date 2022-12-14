import React, {useState, useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux' 
import Message from '../components/Message'
import Loader from '../components/Loader'
import { getUserDetails, updateUserProfile } from '../actions/userActions'

const ProfileScreen = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails


    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const { success } = userUpdateProfile


    const location = useLocation()
    const navigate = useNavigate()

    const redirect = location.search ? location.search.split('=')[1] : '/'

    useEffect(() => {
        if(!userInfo) {
            navigate('/login')
        }else {
            if(!user.name) {
                dispatch(getUserDetails('profile'))
            }else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch, navigate, userInfo, redirect, user])


    const submitHandler = (e) => {
        e.preventDefault()

        if(password !== confirmPassword) {
            setMessage('Password do not match')
        }else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }

    }

        // console.log(error)
    return <Row>
        <Col md={3} >
        <h1>Sign Up</h1>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}
        {success && <Message variant='success'>Profile Updated</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler} >
 
        <Form.Group controlId='name'>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    type='name' 
                    placeholder='Enter name' 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                ></Form.Control>
            </Form.Group>
 
            <Form.Group controlId='email'>
                <Form.Label>Email Address</Form.Label>
                <Form.Control 
                    type='email' 
                    placeholder='Enter email' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type='password' 
                    placeholder='Enter password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Form.Group controlId='confirmPassword'>
                 <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                    type='confirmPassword' 
                    placeholder='Confirm Password' 
                    value={confirmPassword} 
                    onChange={(e) => setConfirmPassword(e.target.value)}
                ></Form.Control>
            </Form.Group>

            <Button type='submit'variant='primary' >
                Update
            </Button>

        </Form>
        </Col>
        <Col md={9} >
            <h2>My Orders</h2>
        </Col>
    </Row>
}

export default ProfileScreen