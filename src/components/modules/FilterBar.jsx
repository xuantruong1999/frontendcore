import '../../Sass/components/filterbar.scss';
import { useDispatch } from 'react-redux';
import * as actions from '../../actions/Action';
import { useState } from 'react';

export default function FilterBar() {
    const dispatch = useDispatch();
    var [sortPrice, setSortPrice] = useState('');
    const handelChangePriceFilter = (event) => {
        if (event.target.value) {
            setSortPrice(event.target.value);
            dispatch(actions.sortByPrice(event.target.value));
        }
        event.preventDefault();
    };

    const handleFilterLatest = (event) => {
        dispatch(actions.sortByDate())
        event.preventDefault();
    }

    return <>
        <form id="filter" className="py-2">
            <div className="row">
                <div className="mr-2 my-auto">Sắp xếp theo</div>
                <div className="mr-2">
                    <select value={sortPrice} className="form-control"   onChange={handelChangePriceFilter}>
                        <option value="increasing">Thấp đến cao</option>
                        <option value="descreasing">Cao đến thấp</option>
                    </select>
                </div>
                <div className=""><button className="btn btn-primary mr-2" onClick={handleFilterLatest}>Mới Nhất</button></div>
            </div>
        </form>
    </>
}

