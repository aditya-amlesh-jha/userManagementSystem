import { Link } from "react-router-dom";

const Navigation = () => {
    return (  
        <> 
        <div className="container-fluid p-3 bg-dark text-center">
                <Link className="nav-link text-white" to="/">User Management System</Link>
            </div>
        </>
    );
}
 
export default Navigation;
