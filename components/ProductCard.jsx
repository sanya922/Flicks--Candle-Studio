import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="product-card overflow-hidden cursor-pointer h-full flex flex-col">
        <div className="relative h-48 bg-gray-100 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          {product.originalPrice > product.price && (
            <div className="absolute top-2 right-2 bg-candle-rose text-white px-3 py-1 rounded-full text-sm font-bold">
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </div>
          )}
          <div className="absolute top-2 left-2 bg-candle-gold text-candle-dark px-3 py-1 rounded-full text-xs font-semibold">
            {product.material}
          </div>
        </div>

        <div className="p-4 flex-grow flex flex-col justify-between">
          <div>
            <p className="text-xs text-candle-rose font-semibold mb-1">
              {product.category}
            </p>
            <h3 className="text-lg font-bold text-candle-dark mb-2 line-clamp-2">
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <span className="text-yellow-400">⭐</span>
            <span className="text-sm font-semibold">{product.rating}</span>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>

          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-2xl font-bold text-candle-gold">₹{product.price}</span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-400 line-through">₹{product.originalPrice}</span>
            )}
          </div>

          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></div>
            <span className="text-xs font-semibold text-gray-600">
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>

        <button className="w-full btn-primary mt-2">
          Add to Cart
        </button>
      </div>
    </Link>
  );
}
