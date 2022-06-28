import AllProduct from "../components/allproduct";
import { Link,useParams } from 'react-router-dom';
import { useState } from "react";



const AdminH = (props) => {
	// const param = useParams();
	// const [name ,setName] = useState(param.id);
	// console.log(name);

    return(
        <>
		<div className='navb'>
			
			<div className='nav-h'>
				
			</div>
			<div className='nav-h'>
			
			</div>
			<div className='nav-last'>
            <Link to="/">Logout</Link>
			
			</div>
			<div class="animation start-home"></div>
		</div>

        <h3 className="h">Admin</h3>
        </>
    );
}

function AdminHome(){
	return(
		<>
		<AdminH />
		<AllProduct />
		</>
	)
}
export default AdminHome;