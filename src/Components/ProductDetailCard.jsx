import Button from './Elements/Button';

export const ProductDetailCard = ({ product, onAddProduct }) => {
    return (
        <div className="p-2 ml-4 rounded-lg bg-slate-500">
            <div className="flex flex-col items-center justify-between">
                <h2 className="text-2xl text-black  font-serif">{product.name}</h2>
                <p className="text-2xl text-gray-300 m-1 font-serif">
                    {product.description}
                </p>
                <div className="flex items-center justify-between">
                    <div className="text-2xl text-black font-mono">Rs.{product.price}</div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center">
                <img src={product.imageUrl} className="w-24 h-24 rounded-xl object-cover p-1" alt={product.name} />
            </div>
            <div className="w-full flex items-center justify-center">
                <Button
                    onClick={() => onAddProduct(product)}
                    className="m-2 px-4 py-2 bg-yellow-500 text-white rounded-full"
                >
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}

