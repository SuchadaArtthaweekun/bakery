import '../css/stylesheet.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';




const LogBtn = (props) => {

	// alert(props.name)
	const logout = () => {
		alert("ออกจากระบบแล้ว")
	}
	if (props.name === undefined) {
		return <Link to="/login">Login</Link>
	}
	if (props.name != null) {
		return <Link to="/adminhome" onClick={logout}>Loguot</Link>
	}
};


function Navbar(props) {
	const [name, setName] = useState("");
	return (
		<div className='navb'>
			<div className='nav-h'>
				<Link to="/">Home</Link>
			</div>
			<div className='nav-h'>
				<Link to="/product">Product</Link>
			</div>
			<div className='nav-last'>
				<LogBtn name={props.name} />
			
			</div>
			<div class="animation start-home"></div>
		</div>
	);
}

export default Navbar;