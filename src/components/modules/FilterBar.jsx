import '../../Sass/components/filterbar.scss';
import { useDispatch } from 'react-redux';
import * as actions from '../../actions/Action';

export default function FilterBar(){
    const dispatch = useDispatch();

    const handelChangePriceFilter = (event) => {
        if(event.target.value){
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
                    <select className="form-control" onChange={handelChangePriceFilter}>
                        <option value="none" selected disabled hidden>
                            Giá
                        </option>
                        <option value="increasing">Thấp đến cao</option>
                        <option value="descreasing">Cao đến thấp</option>
                    </select>
                </div>
                <div className=""><button className="btn btn-primary mr-2" onClick={handleFilterLatest}>Mới Nhất</button></div>
            </div>
        </form>
    </>
}

