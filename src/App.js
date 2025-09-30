import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./utils/CartContext";
import { AuthProvider } from "./utils/AuthContext";  

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AuthProvider>  
          <AppRoutes />
        </AuthProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
