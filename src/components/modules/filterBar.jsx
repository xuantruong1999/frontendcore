import '../../Sass/components/filterbar.scss';

export default function filterBar(){
    return <>
        <form id="filter" className="py-2">
            <div class="row">
                <div className="mr-2 my-auto">Sắp xếp theo</div>
                <div className="mr-2">
                    <select className="form-control">
                        <option value="none" selected disabled hidden>
                            Giá
                        </option>
                        <option value="increasing">Thấp đến cao</option>
                        <option value="decreasing">Cao đến thấp</option>
                    </select>
                </div>
                <div className=""><button className="btn btn-primary mr-2">Mới Nhất</button></div>
                <div className=""><button className="btn btn-success">Bán Chạy</button></div>
            </div>
        </form>
    </>
}

