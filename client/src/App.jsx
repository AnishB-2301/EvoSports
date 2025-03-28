import { Routes, Route } from "react-router-dom"
import AuthLayout from "./components/auth/layout"
import AuthLogin from "./pages/auth/login"
import AuthRegister from "./pages/auth/register"
import AdminLayout from "./components/admin/layout"
import AdminDashboard from "./pages/admin/dashboard"
import AdminFeatures from "./pages/admin/features"
import AdminOrders from "./pages/admin/orders"
import AdminProduts from "./pages/admin/products"
import ShoppingLayout from "./components/shopping/layout"
import NotFound from "./pages/notFound"
import ShoppingHome from "./pages/shopping/home"
import ShoppingListing from "./pages/shopping/listing"
import ShoppingCheckout from "./pages/shopping/checkout"
import ShoppingAccount from "./pages/shopping/account"
import UnauthPage from "./pages/un_auth"
import CheckAuth from "./components/common/check_auth"



function App() {

    const isAuthenticated=true;
    const user={
        name: 'AB',
        role: 'admin'
    };

    return (
        <div className="flex flex-col overflow-hidden bg-white">
            <Routes>
                <Route path="/auth" element={
                    <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                        <AuthLayout/>
                    </CheckAuth>
                }>
                    <Route path="login" element={<AuthLogin/>} />
                    <Route path="register" element={<AuthRegister/>} />
                </Route>
                <Route path="/admin" element={
                    <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                        <AdminLayout/>
                    </CheckAuth>
                }>
                    <Route path="dashboard" element={<AdminDashboard/>}/>
                    <Route path="features" element={<AdminFeatures/>}/>
                    <Route path="orders" element={<AdminOrders/>}/>
                    <Route path="products" element={<AdminProduts/>}/>
                </Route>
                <Route path="shopping" element={
                    <CheckAuth isAuthenticated={isAuthenticated} user={user}>
                        <ShoppingLayout/>
                    </CheckAuth>
                }>
                    <Route path="home" element={<ShoppingHome/>}/>
                    <Route path="listing" element={<ShoppingListing/>}/>
                    <Route path="checkout" element={<ShoppingCheckout/>}/>
                    <Route path="account" element={<ShoppingAccount/>}/>
                </Route>
                <Route path="unauth-page" element={<UnauthPage/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
    )
}


export default App