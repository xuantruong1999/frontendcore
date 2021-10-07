
function ProductDetails({ product }) {
    return (
        <>
            <div id="conver">
                <div className="row">
                    <div id="image" className="col-md-4 col-sm-6">
                        <img src={product.Image} alt="" className="img-fluid" />
                    </div>
                    <div id="product-infor" className="col-md-8 col-sm-6">
                        <div className="name">{product.Name}</div>
                        <div className="rating">{product.Rating}</div>
                        <div className="price">{product.Price}</div>
                    </div>
                </div>
                <div id="description">{product.Description}</div>
            </div>
        </>
    );
}

export default ProductDetails;