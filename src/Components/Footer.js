import React from 'react';
import '../Sass/components/footer.scss';
class Footer extends React.Component{
    render(){
        return(
            <footer className="page-footer container-fluid" id="footer">
                <div className="d-flex flex-wrap justify-content-center">
                    <ul className="p-2 flex-fill ">
                        <li>Về momyandbaby</li>
                        <li>Giới thiệu về momyandbaby</li>
                        <li>Tuyển dụng khối Văn phòng</li>
                        <li>Tuyển dụng Khối siêu thị</li>
                        <li>Chính sách bảo mật</li>
                        <li>Điều khoản sử dụng</li>
                    </ul>   
                
                    <ul className="p-2 flex-fill ">
                        <li>HỖ TRỢ KHÁCH HÀNG</li>
                        <li>Hotline miễn phí</li>
                        <li>CSKH: 1800 6703 (8h-22h)*</li>
                        <li>Mua hàng: 1800 6609 (7h:30-22h)*</li>
                        <li>(Tất cả các ngày trong tuần)</li>
                    </ul>
                    <ul className="p-2 flex-fill ">
                        <li>CHÍNH SÁCH LIÊN QUAN KHÁC</li>
                        <li>Tra cứu hoá đơn</li>
                        <li>Mua & giao nhận Online</li>
                        <li>Qui định & hình thức thanh toán</li>
                        <li>Bảo hành & Bảo trì</li>
                        <li>Đổi trả & Hoàn tiền</li>
                    </ul>
                    <ul className="p-2 flex-fill ">
                        <li>ĐƠN VỊ VẬN CHUYỂN</li>
                        <li><img src="../images/grap-express.png" alt="grap express" /></li>
                    </ul>
                    <ul className="p-2 flex-fill ">
                        <li>CÁCH THỨC THANH TOÁN</li>
                    </ul>
                </div>
            </footer>
        );
    };
}

export default Footer;