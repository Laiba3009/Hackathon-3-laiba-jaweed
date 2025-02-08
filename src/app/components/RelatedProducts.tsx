import { useState, useEffect } from "react";

const RelatedProducts = ({ currentProductCategory }: { currentProductCategory: string }) => {
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const response = await fetch("https://template-03-api.vercel.app/api/products");
        const data = await response.json();
        const related = data.filter((product: any) => product.category === currentProductCategory);
        setRelatedProducts(related);
      } catch (error) {
        setError("Failed to fetch related products.");
        console.error("Error fetching related products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedProducts();
  }, [currentProductCategory]);

  if (loading) return <div>Loading related products...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {relatedProducts.map((product) => (
        <div key={product.id} className="border border-gray-200 rounded-md p-4 bg-white shadow-lg hover:shadow-xl">
          <img
            src={product.image}
            alt={product.productName}
            className="w-full h-48 object-cover mb-4 rounded-md"
          />
          <h3 className="text-lg text-gray-800 font-semibold">{product.productName}</h3>
          <p className="text-sm text-gray-600">{product.description}</p>
          <p className="text-xl text-green-600 font-bold">{product.price} PKR</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default RelatedProducts;
