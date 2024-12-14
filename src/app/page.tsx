import OrderPage from "./checkout/page";
import ShopMensSlider from "./components/ShopMenSlider";
import Hero from "./hero/page";
import Singnup from "./join-us/page";
import ShoppingCart from "./shoping-card/page";

export default function Home() {
  return (
    
        
         <div>

        <OrderPage />
          <Hero />
          <ShopMensSlider />
          <ShoppingCart/>
          <Singnup />
         </div>
        
         
  );
}
