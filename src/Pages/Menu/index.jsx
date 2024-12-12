import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, selectAllProducts } from "../../stores/menu/productsSlice";
import { ProductDetailCard } from "../../Components/ProductDetailCard";
import { addToCart } from "../../stores/cart/cartSlice";
import Tabs from "../../Components/Tabs";

const Menu = () => {
    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const [activeTab, setActiveTab] = useState('');
    const [activeTabIndex, setActiveTabIndex] = useState(0);


    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const onAddProduct = (product) => {
        dispatch(addToCart(product));
    };
    const onTabSwitch = (ActiveTab) => {
        setActiveTab(ActiveTab);
        let categories = products.products.map((product) => product.name.name);
        let index = categories.findIndex(category => ActiveTab === category);

        setActiveTabIndex(index > -1 ? index : 0);
    };
    if (products.status === 'loading') {
        return <div>Loading...</div>;
    }

    if (products.status === 'failed') {
        return <div>Error loading products</div>;
    }

    return (
        <div className="bg-white text-black">
            {
                products.products && products.products.length > 0 ? (
                    <div className="menu-wrapper">
                        <Tabs
                            list={products.products.map((product) => product.name.name)}
                            activeTab={activeTab}
                            onTabSwitch={onTabSwitch}
                        />
                        <div className="flex flex-row mx-4">
                            {
                                products.products[activeTabIndex]?.products.map((product, index) => (
                                    <ProductDetailCard key={product.id} product={product} onAddProduct={onAddProduct} />
                                ))}
                        </div>  
                    </div>
                ) : (
                    <div>No products available</div>
                )}
        </div>
    );
};

export default Menu;