import { useParams,Link } from "react-router-dom";
import { useState, useEffect } from "react";
import '../css/stylesheet.css'

const Update = () => {
    let params = useParams();
    const [product, setProduct] = useState([]);
    const [pname, setPname] = useState("");
    const [descript, setDescript] = useState("");
    const [price, setPrice] = useState("");
    const [picture, setPicture] = useState("");
    const [selectedFile, setSelected] =useState();
    const [path, setPath] = useState("");

    const changeHandler = (event) => {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0])
        setSelected(event.target.files[0]);
        setPicture(event.target.files[0].name);      
        reader.onload = (_event) => {
            setPath(reader.result);
          }
    };
    

    const getData = () => {
        fetch(`http://localhost:8081/api/pro/find/${params.id}`, {
            method: "GET"
        })
            .then((res) => res.json())
            .then((json) => setProduct(json))
    }
    getData();


    const sendData = () => {
        if (pname !== "") {
            fetch(`http://localhost:8081/api/pro/edit/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify({
                    pname,
                    descript,
                    price,
                    picture
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {

                // window.location = "/adminhome"
                alert("Update Compiete")
            }).catch((err) => {
                console.log(err);
            })
        } else {
            alert("Input data please !!")
        }
        const formData = new FormData();
        formData.append("file", selectedFile);
        fetch("http://localhost:8081/api/pro/file", {
            method: "POST",
            body: formData
        }).then((Response) => {
            console.log(Response)
        })
    }

    return (
        <div>
            {/* <h1>{params.id}</h1> */}
            {product.map((val) => {
                return (

                    <div className="">
                        <dir key={val.pid}>
                            <div className="container col-5 card" style={{ marginTop: "10px" }}>
                                <div className="card-body">
                                    <div className="fram-edit">
                                        <img id=" " src={path} height="200" alt="Image preview..." ></img>
                                    </div>
                                    <form action="" method="post">
                                        <div className="mb-2">
                                            <label htmlFor="input_file" className="form-label">เลือกรูป</label>
                                            <input type="file" id="input_file" className="form-control"  onChange={(e) => changeHandler(e)} />
                                        </div>
                                        <div className="mb-2">
                                            <label htmlFor="input_name" className="form-label">ชื่อสินค้า</label>
                                            <input type="text" className="form-control" defaultValue={val.pname} onChange={(e) => setPname(e.target.value)} />
                                            <label htmlFor="input_name" className="form-label">คำอธิบาย</label>
                                            <input type="text" className="form-control" defaultValue={val.descript} onChange={(e) => setDescript(e.target.value)} />

                                            <label htmlFor="input_name" className="form-label">ราคา</label>
                                            <input type="text" className="form-control" defaultValue={val.price} onChange={(e) => setPrice(e.target.value)} />
                                        </div>
                                    </form>
                                    <button className="btn btn-primary updaate-btn" onClick={sendData} >บันทึก</button>
                                    <button className="btn btn-primary back-btn" ><Link to="/adminhome">กลับ</Link></button>
                                </div>
                            </div>
                        </dir>
                    </div>
                )
            })}
        </div>
    )
}

export default Update;