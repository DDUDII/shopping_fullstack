import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage/index';
// import ProtectRoutes from './conponents/ProtectRoutes';
//import NotAuthRoutes from './conponents/NotAuthRoutes';
import LoginPage from './pages/LoginPage/index';
import RegisterPage from './pages/RegisterPage/index';
import Navbar from './layout/NavBar/index';
import Footer from './layout/Footer';

// outlet은 자식 컴포넌트 경로에 따라 바뀜 (밑에 layout으로 넘겨주고 loginpage registerpage 이런식으로)
function Layout(){
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />  
      </main>
      <Footer/>
    </div>
  )
}

function App() {


  return (
    <Routes>
      <Route path='/' element={<Layout />}>

     {/* 로그인과 상관없이 갈 수 있는 경로 */}
      <Route index element={<LandingPage/>}/>

     {/* 로그인 한 사람은 갈 수 없는 경로 */}
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/register' element={<RegisterPage/>} />


{/* 
      로그인 한 사람만 갈 수 있는 경로
      <Route element={<ProtectRoutes />}>
        <Route path="/product/upload" element={<UploadProductPage />} />
        <Route path='product/:productId' element={<DetailProductPage />} />
        <Route path='/user/cart' element={<CartPage/>}/>
        <Route path='/history' element={<HistoryPage/>}/>

      </Route> */}

      </Route>
    </Routes>
  )
}


export default App
