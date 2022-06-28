import React, { useEffect, useState } from "react";
import '../css/stylesheet.css';
import NavBar from './navbar';

function ProductU() {
    const [Product, setProduct] = useState([]);
    const [pname, setPname] = useState("");
    const [sh, setSh] = useState("All");
    const search = async (e) => {
        e.preventDefault();
        setSh(pname);
    };

    useEffect(() => {
         function showProduct() {
            const res =  fetch("http://localhost:8081/api/pro/all");
            res.json()
                .then((res) => setProduct(res));
        }
        showProduct()
    })
    return (
        <>
            <NavBar />
            <div className="container All-product">
                <div className="row producthome">
                    <div className="searchu">
                        <div class="wrap">
                            <div class="search">
                                <input type="text" class="searchTerm" placeholder="ค้นหา" onChange={(e) => setPname(e.target.value)} />
                                <button type="submit" class="searchButton" onClick={search}>
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {Product.map((val) => {
                        const imgs = "http://localhost:8081/api/pro/img/"+ val.picture
                        if (val.pname == sh) {
                            return (
                                <div className="show-p">
                                    <div className="img-product"><img src={ imgs }/></div>
                                    <div className="content-product">
                                        <div className="product-show">{val.pname}</div>
                                        <div className="product-show2">{val.descript}</div>
                                        <div className="product-show3">{(val.price) + " .-"}</div>
                                    </div>

                                </div>
                            )
                        } else if (sh === "All") {
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
                        }
                    })}

                </div>
                <div className="p-footer">

                </div>
            </div>
        </>

    )
}

export default ProductU;

