import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductListPage from './pages/ProductListPage'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:variantSlug" element={<ProductPage />} />
        <Route path="/" element={<Navigate to="/products" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
