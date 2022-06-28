import { BrowserRouter, Route, Switch } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


import Login from './pages/login';
import Home from "./pages/home";
import AdminHome from "./pages/adminhome"
import ProductAll from "./components/allproduct";
import Product from "./components/product";
import Update from "./components/edit";
import Addproduct from "./components/addproduct";
import Upload from "./pages/upload";



function App() {


    return (
        <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home }/>
          {/* <Route path="/home/:id" component={Home } /> */}
          <Route path="/login" component={Login } />
          <Route path="/adminhome" component={AdminHome } />

          <Route path="/product" component={Product } />
          <Route path="/allproduct" component={ProductAll } />
          <Route path="/addproduct" component={Addproduct } />
          <Route path="/edit/:id" component={Update } />
          <Route path="/upload" component={Upload} />
          
        </Switch>
      </BrowserRouter>
  
    );
}

export default App;