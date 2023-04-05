export const Cart = () => {
    return (
        <section className="cart-section">
            <div className="cart-container">
                <div className="items">
                    <div className="img-price-con">
                        <div className="img-co">
                            <img src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" srcset="" />
                        </div>
                        <h3>Product title</h3>
                        <div className="title-price-con">
                            <div className="add-wish-con">
                                <button>Add to cart</button>
                                <button>Add to Wishlist</button>
                            </div>
                            <div className="price-con">
                                <input type="number" value={1} />
                                <h4 className="item-price">433</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}