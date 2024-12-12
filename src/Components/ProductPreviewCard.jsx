import AddProduct from "./AddProduct"

export const ProductPreviewCard = ({ product, onAddProduct }) => {

    const addProduct = () => {
        onAddProduct(product)
    }

    return (
        
        <div className="w-48 p-2 rounded text-white bg-gradient-to-b from-slate-400 to-transparent text-center">
            <img src={product.imageUrl} alt={product.name} />
            <h2 className="pb-2 text-xl font-serif">{product.name}</h2>
            <p className=" h-10 line-clamp-4 font-serif">{product.description}</p>
            <AddProduct onAddProduct={addProduct} />
        </div>
    )
}