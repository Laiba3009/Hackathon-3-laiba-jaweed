import Image from "next/image";
import ShopMensSlider from "../components/ShopMenSlider";
import ShopWomensSlider from "../components/ShopWomenSlider";
import ProductList from "../shose/page";
export default function Hero() {
  return (
    <div className="w-screen py-5 bg-gray-100">
      <div className="max-w-7xl mx-auto text-center">
        <Image
          src="/assests/hero.png" 
          alt="nike"
          width={1200}
          height={600}
          className="rounded-lg mx-auto w-full"
        />
      </div>

      <div className="relative flex flex-col items-center text-center bg-gray-100 py-12">
        <p className="text-sm text-black uppercase tracking-widest mb-2">
          First Look
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl  font-sans font-[500]  mb-4">
          NIKE AIR MAX PULSE
        </h1>

        <p className="text-gray-800 text-lg sm:text-xl md:text-2xl max-w-full sm:max-w-2xl mx-auto mb-6 px-4 sm:px-6">
  Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
  Pulse—designed to push you past your limits and help you go to the max.
</p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Notify Me
          </button>
          <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Shop Air Max
          </button>
        </div>
      </div>

      <div className="bg-white px-6 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl text-black font-sans font-[500]">Best of Air Max</h2>
          <div className="flex space-x-2">
            <button className="px-4 py-2 font-bold rounded-full">Shop</button>
          </div>
        </div>
          <ProductList />
      </div>

      <div className="relative bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <Image
            src="/assests/featured.png"
            alt="Running Man"
            width={1200}
            height={600}
            className="rounded-lg mx-auto w-full"
          />
          <h1 className="mt-8 text-4xl md:text-5xl  font-sans  text-gray-900">
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p className="mt-4 text-lg text-gray-900">
            Cause everyone should know the feeling of running in that perfect
            pair!
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Find Your Shoe
          </button>
        </div>
      </div>


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
          
      <div className="relative bg-white py-16 px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 pt-6 pl-3 sm:pl-4 md:text-4xl lg:text-5xl">
      Dont Miss
</h2>

        <div className="max-w-7xl mx-auto text-center">
          <Image
            src="/assests/flight.png"
            alt="Running Man"
            width={1200}
            height={600}
            className="rounded-lg mx-auto w-full"
          />
          <h1 className="mt-8 text-4xl md:text-5xl  font-sans  text-gray-900">
            FLIGHT ESSENTIALS
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Your built-to-last all-week wears—but with style only Jordan Brand can deliver.
          </p>
          <button className="mt-6 px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
            Shop
          </button>
        </div>
      </div>

      {/* Essentials Section - Single Row Images */}
      <h2 className="text-3xl font-bold text-gray-900 mb-12 pt-6 pl-3 sm:pl-4 md:text-4xl lg:text-5xl">
  ESSENTIALS
</h2>

      <div className="flex flex-wrap justify-center gap-4">
        <div className="flex flex-col items-center">
          <Image
            src="/assests/e1.png"
            alt="Nike Air Max Pulse"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/assests/e2.png"
            alt="Nike Air Max Pulse"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/assests/e3.png"
            alt="Nike Air Max Pulse"
            width={300}
            height={300}
            className="mx-auto"
          />
        </div>
      </div>

      <footer className="bg-white text-gray-900 py-8 w-full">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center pl-12 pr-12 ml-12 mr-12">
          <div className="text-center">
            <h3 className="font-bold mb-4">Icons</h3>
            <ul className="space-y-2 text-sm">
              <li>Air Force 1</li>
              <li>Huarache</li>
              <li>Air Max 90</li>
              <li>Air Max 95</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-4">Shoes</h3>
            <ul className="space-y-2 text-sm">
              <li>All Shoes</li>
              <li>Custom Shoes</li>
              <li>Jordan Shoes</li>
              <li>Running Shoes</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-4">Clothing</h3>
            <ul className="space-y-2 text-sm">
              <li>All Clothing</li>
              <li>Modest Wear</li>
              <li>Hoodies  Pullovers</li>
              <li>Shirts  Tops</li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className="font-bold mb-4">Kids</h3>
            <ul className="space-y-2 text-sm">
              <li>Infant  Toddler Shoes</li>
              <li>Kids Shoes</li>
              <li>Kids Jordan Shoes</li>
              <li>Kids Basketball Shoes</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
