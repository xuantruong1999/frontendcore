
function ProductDetails({ product }) {

    return (
        <>
            <div id="conver">
                <div className="row">
                    <div id="image" className="col-md-4 col-sm-6">
                        <img src={product.image} alt="product image" className="img-fluid" />
                    </div>
                    <div id="product-infor" className="col-md-8 col-sm-6">
                        <div className="name">{product.name}</div>
                        <div className="rating">{product.rating}</div>
                        <div className="price">{product.price}</div>
                    </div>
                </div>
                <div id="description">{product.description}</div>
            </div>
        </>
    );
}

export default ProductDetails;