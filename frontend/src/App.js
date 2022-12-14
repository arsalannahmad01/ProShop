import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/placeorder' element={<PlaceOrderScreen />} />
            <Route path='/register' element={<RegisterScreen />} />
            <Route path='/payment' element={<PaymentScreen />} />
            <Route path='/shipping' element={<ShippingScreen />} />
            <Route path='/login' element={<LoginScreen />} />
            <Route path='/product/:id' element={<ProductScreen />} />
            <Route path='/cart/:id' element={<CartScreen />} />
            <Route path='/' element={<HomeScreen/>} exact />
            <Route path='/profile' element={<ProfileScreen/>} exact />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App
