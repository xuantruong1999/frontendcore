import '../Sass/components/ShoppingCartItem.scss';

export default function ShoppingCart({ item, quantity }) {
    return (
        <div className="border p-2 rounded mt-2">
            <div className="row">
                <div className="col-2 image">
                    <img className="img-responsive" alt={item.Name} src={item.Image} />
                </div>
                <div className="col-4 name">
                    <div className="center"><span className="font-weight-bold">{item.Name}</span></div>
                    <div className="center">{item.Description}</div>
                </div>
                <div className="col-2 quantity">{quantity}</div>
                <div className="col-2 unit-price">{item.Price}</div>
                <div className="col-2 total">{parseInt(quantity) * parseFloat(item.Price)}</div>
            </div>
        </div>
    );
}

