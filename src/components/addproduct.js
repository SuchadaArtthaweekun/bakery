import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/stylesheet.css';


function Upload() {

    const [redirect, setRedirect] = useState("0");
    const [products, setProduct] = useState([]);
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
    


    const sendData = () => {
        if (pname !== "" ) {
            fetch('http://localhost:8081/api/pro/add', {
                method: 'POST',
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
                alert("Save Complete")
                window.location = "/addproduct"
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
        <div className="">
            <div className="head-upload col-6 card container ">
                <h3>Add Product</h3>
            </div>
            <div className="col-6 card container" style={{ marginTop: "10px" }}>
                <div className="card-body">
                    <div style={{ height: "200px", background: "#ccc", marginBottom: "15px", textAlign: "center" }}>
                        <img id=" " src={path} height="200" alt="Image preview..." />
                    </div>
                    <form action="" method="post">
                        <div className="mb-2">
                            <label htmlFor="input_file" className="form-label">เลือกรูป</label>
                            <input type="file" id="input_file" className="form-control" onChange={(e) => changeHandler(e)} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="input_name" className="form-label">ชื่อสินค้า</label>
                            <input type="text" className="form-control" onChange={(e) => setPname(e.target.value)} />
                            <label htmlFor="input_name" className="form-label">คำอธิบาย</label>
                            <textarea type="text" className="form-control" onChange={(e) => setDescript(e.target.value)} />

                            <label htmlFor="input_name" className="form-label">ราคา</label>
                            <input type="text" className="form-control" onChange={(e) => setPrice(e.target.value)} />
                        </div>
                    </form>
                    <button className="btn btn-primary" onClick={sendData}>บันทึก</button>
                    <button className="btn btn-warning"><Link to="/adminhome">ยกเลิก</Link></button>
                </div>
            </div>
            <div className="p-footer">

            </div>
        </div>
    );
}
function Addproduct() {
    return (
        <>
            {/* <Bar /> */}
            <Upload />
        </>
    )
}
export default Addproduct;
