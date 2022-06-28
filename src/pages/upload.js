import { useState } from 'react';

function Upload() {

    const [selectedFile, setSelected] =useState();
    const changeHandler = (event) => {
        setSelected(event.target.files[0]);
    };

    const Up = () => {
        const formData = new FormData();
        formData.append("file", selectedFile);
        fetch("http://localhost:8081/api/pro/file", {
            method: "POST",
            body: formData
        }).then((Response) => {
            console.log(Response)
        })
    }
    return(
        <>
            <div className="up">
                <form>
                    <div className="upl">
                        <h1>Upload Image</h1>
                        <input type='file' name='file' onChange={changeHandler}></input>
                    </div>
                    <button onClick={Up} >Upload</button>
                </form>
            </div>
        </>
    )
}

export default Upload;