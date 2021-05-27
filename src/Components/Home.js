import React from 'react';
import Slider from "./Slider";
import Banner from './modules/Banner';
import "../Sass/components/home.scss";
import cate1 from "../images/cate-1.png";
import cate2 from "../images/cate-3.png";
import cate3 from "../images/cate-4.png";
import cate4 from "../images/cate-5.png";
import cate5 from "../images/cate-6.png";
import banner from "../images/banner.jpg";
import brand from "../images/hang-hieu.jpg";

class Home extends React.Component {
    render() {
        return (
            <>
                <div className="p-3 h-100 w-100" id="banner"> 
                    <div className="h-100 w-100 d-flex">
                        <div className="col-7 mr-1 p-0">
                            <Slider /> 
                        </div>
                        <div className="col-5 p-0">
                            <div className="d-flex flex-column align-items-stretch h-100">
                                <div className="banner-image-up mb-1 rounded"></div>
                                <div className="banner-image-down rounded"></div>
                            </div>
                        </div>
                    </div>
                    <Category />
                    <Banner image={banner} alt={"Đại giảm giá duy nhất trong năm"}/>
                    <ListProduct/>             
                </div>
            </>
        );
    }
}
export default Home;

function Category(){
        return(
            <>
                <div className="d-flex wrapper">
                    <div className="d-flex flex-column flex-fill">
                        <div className="category flex-fill justify-content-center "
                            style={{backgroundImage: `url(${cate1})`, 
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}>
                        </div>
                        <div className="text-center">Sản phẩm cho bé </div>
                    </div>

                    <div className="d-flex flex-column flex-fill">
                        <div className="category flex-fill justify-content-center "
                            style={{backgroundImage: `url(${cate2})`, 
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}></div>
                        <div className="text-center">Thương Hiệu Tin Dùng</div>
                    </div>
                   
                    <div className="d-flex flex-column flex-fill">
                        <div className="category  justify-content-center "
                            style={{backgroundImage: `url(${cate3})`, 
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}></div>
                        <div className="text-center">Mua Hàng Trúng Xu Lớn</div>
                    </div>

                    <div className="d-flex flex-column flex-fill">
                        <div className="category  justify-content-center "
                            style={{backgroundImage: `url(${cate4})`, 
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}></div>
                        <div className="text-center">Có Hàng Quốc Tế</div>
                    </div>
                    <div className="d-flex flex-column flex-fill">
                        <div className="category  justify-content-center "
                            style={{backgroundImage: `url(${cate5})`, 
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                        }}></div>
                        <div className="text-center">Giá Cả Phải Chăng</div>
                    </div>
                </div>
            </>
        );
}

function ListProduct(){
    return(
        <section>
            <div className="brand"><img src={brand} alt=""/></div>
            <div className="list-product">
                <h3 className="">Sản Phẩm Hàng Hiệu</h3>
            </div>
        </section>
    );
}

