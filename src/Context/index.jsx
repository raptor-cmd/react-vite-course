import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

    // Product Detail · Increment quantity

    const [count, setCount] = useState(0)

    // Product Detail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product Detail · Show Product
    const [productToShow, setProductToShow] = useState({})

    // Shopping Cart · Add Product
    const [cartProducts, setCartProducts] = useState([])

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )


}

ShoppingCartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};