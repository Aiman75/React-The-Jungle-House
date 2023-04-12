import { useState, useEffect } from 'react'
import '../styles/App.css';
import Banner from './Banner';
import Cart from './Cart';
// import Description from './Description';
import ShoppingList from './ShoppingList';
import Footer from './Footer';


function App() {
	const savedCart = localStorage.getItem('cart')
	const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart))
	}, [cart])
    
    return (
        <div>
            <Banner />
            <div className='lmj-layout-inner'>
                <Cart cart={cart} updateCart={updateCart} />
                <ShoppingList cart={cart} updateCart={updateCart} />
            </div>
            <Footer />
        </div>
    )
}

export default App
