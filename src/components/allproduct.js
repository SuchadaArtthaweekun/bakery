import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import '../css/stylesheet.css';

const Delete = async (credentials) => {
    return fetch("http://localhost:8081/api/pro/delete", {
        method: "Delete",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
    }).then((data) => data.json());
}

// Show Product
const ProductA = () => {
    const [Product, setProduct] = useState([]);
    const [pname, setPname] = useState("");
    const [sh, setSh] = useState("All");
    const search = async (e) => {
      e.preventDefault();
      setSh(pname);
    };

    const del = (e, id) => {
        const pid = id + ""
        e.preventDefault();
        Delete({
            pid
        })
        alert("Confirm delete ?")
    }

        async function showProduct() {
            const res = await fetch("http://localhost:8081/api/pro/all");
            res.json()
                .then((res) => setProduct(res));
        } 
        showProduct()
    

    return (
        <div className="container All-product">
            <button type="button" class="btn btn-info"><Link to="/addproduct">Add Product</Link></button>
            <div class="wrap">
                <div class="search">
                    <input type="text" class="searchTerm" placeholder="ค้นหา" onChange={(e) => setPname(e.target.value)} />
                    <button type="submit" class="searchButton" onClick={search}>
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
            <br />
            <br />
            <div className=" col-12">

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Price</th>
                            <th scope="col">Picture</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {Product.map((val) => {
                             const imgs = "http://localhost:8081/api/pro/img/"+ val.picture
                            if (val.pname == sh){
                               
                                return (
                                    <tr>
                                        <td>{val.pname}</td>
                                        <td>{val.descript}</td>
                                        <td>{val.price}</td>
                                        <td className="img-prod"><img src={ imgs } /></td>
                                        <td><button type="button" class="btn btn-danger">
                                            <Link to={`/edit/${val.pid}`}>EDIT</Link>
                                        </button></td>
                                        <td><button type="button" class="btn btn-danger" onClick={(e) => del(e, val.pid)}>DELETE</button></td>
                                    </tr>
                                )
                            } else if (sh === "All") {
                                return (
                                    <tr>
                                        <td>{val.pname}</td>
                                        <td>{val.descript}</td>
                                        <td>{val.price}</td>
                                        <td className="img-prod"><img src={ imgs } /></td>
                                        <td><button type="button" class="btn btn-danger edit-btn">
                                            <Link to={`/edit/${val.pid}`}>EDIT</Link>
                                        </button></td>
                                        <td><button type="button" class="btn btn-danger delete-btn" onClick={(e) => del(e, val.pid)}>DELETE</button></td>
                                    </tr>
                                )
                            }


                        })}
                    </tbody>
                </table>
            </div>
        </div>

    )
}
function ProductAll() {
    return (
        <div className="all">
            <ProductA />
        </div>
    )
}
export default ProductAll;
