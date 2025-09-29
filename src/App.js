import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { CartProvider } from "./utils/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
