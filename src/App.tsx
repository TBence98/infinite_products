import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import RootLayout from "./pages/RootLayout/RootLayout";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Error from "./pages/Error/Error";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<RootLayout />}
                    errorElement={<Error />}
                >
                    <Route
                        index
                        element={<Navigate replace to="/products" />}
                    />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/*" element={<h2>Page not found!</h2>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
