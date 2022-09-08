import React, {Fragment} from "react";
import LoginForm from "../../components/form/form"
import Navbar from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Login = () => {
    return(
    <Fragment>
        <Navbar/>
        <LoginForm/>
        <Footer/>
    </Fragment>

)
}


export default Login