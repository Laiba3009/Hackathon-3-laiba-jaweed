import OrderPage from "./checkout/page";
import ShopMensSlider from "./components/ShopMenSlider";
import ShopWomensSlider from "./components/ShopWomenSlider";
import Hero from "./hero/page";
import Singnup from "./join-us/page";
import ShoppingCart from "./shoping-card/page";

export default function Home() {
  return (
    
        
         <div>

        <OrderPage />
          <Hero />
          {/* Section for men's and women's shop sliders */}
      <section className="px-10">
        <h2 className="font-bold">Gear Up</h2>
        <div className="grid grid-cols-12">
          {/* Men's products displayed in a slider */}
          <div className="col-span-12 md:col-span-6">
            <ShopMensSlider/>
          </div>
          {/* Women's products displayed in a slider */}
          <div className="col-span-12 md:col-span-6">
            <ShopWomensSlider/>
          </div>
        </div>
      </section>
          
          <ShoppingCart/>
          <Singnup />
         </div>
        
         
  );
}
