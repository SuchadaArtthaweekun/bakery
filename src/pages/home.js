import '../css/stylesheet.css';
import Bar from "../components/navbar";
import React, { useEffect, useState } from "react";




function Home() {
    const [Product, setProduct] = useState([]);
    useEffect(() => {
        async function showProduct() {
            const res = await fetch("http://localhost:8081/api/pro/all");
            res.json()
                .then((res) => setProduct(res));
        }
        showProduct()
    })
    return (
        <div className='home'>
            <Bar />
            <div className='background-home'>  </div>
            <div className="container time">
                <ul>
                    <li className='time-img'></li>
                    <h3>Opening Hours</h3>
                </ul>
                <p>เปิดทุกวัน </p>
                <p>10.00 - 22.00 น.</p>
                <p>ตั้งอยู่ที่ 103/4 ต.อิสาณ อ.เมือง จ.บุรีรัมย์ </p>
                <p></p>
            </div>

            <div className="container head-store">
                <ul>
                    <li className="store"></li>
                    <li className="store1"></li>
                </ul>
                <div className="store2">
                </div>
            </div>
            <div className="head-product container">
                <h3>รายการสินค้าแนะนำ</h3>
                <div className="container All-product">
                <div className="row producthome">

                    {Product.map((val) => {
                        const imgs = "http://localhost:8081/api/pro/img/"+ val.picture
                        return (

                            <div className="show-p">
                                <div className="img-product"><img src={ imgs } /></div>
                                <div className="content-product">
                                    <div className="product-show">{val.pname}</div>
                                    <div className="product-show2">{val.descript}</div>
                                    <div className="product-show3">{(val.price) + " .-"}</div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
            </div>
            <br />
            <br />
            <div className='promote container'>

                <div className="row promote">
                    <div className="col-6">
                        <div className="promote-img">
                        </div>
                    </div>

                    <div className="col-6">

                        <div className="promote-text">
                            <h3>พาย พัฟ</h3>
                            <p> พัฟสับปะรด, พายไก่, พายเห็ด, พายทูน่า, กะหรี่พัฟไก่, พายคาโบนาร่า, พายไส้หมูแดง รสขาติหอม มัน กรอบ กลมกล่อม</p>
                            <h4>ราคาเริ่มต้นที่ 199</h4>
                        </div>
                    </div>
                </div>
                <div className="row promote2">
                    <div className="col-6 ">
                        <div className="promote-text1">
                            <h3>เค้กวันเดอร์ฟูล-เฟลเวอร์</h3>
                            <p> เค้กวันเดอร์ฟูล-เฟเวอร์ ประกอบด้วยออเรนจ์เลเยอร์เค้ก ฮอกไกโดมิลค์เค้ก เค้กช็อกโกแลตฟัดจ์ ซอฟท์ช็อกโกแลตเค้ก</p>
                            <h4>ราคาเริ่มต้นที่ 129</h4>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="promote-img1"></div>

                    </div>
                </div>
            </div>
            <div className="footer">
           
            </div>
        </div>

    );
}

export default Home;