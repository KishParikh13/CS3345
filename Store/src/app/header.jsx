import { Link } from "react-router-dom";

export const Header = (props) => <>
    <div className="breadcrumbs-main">
        <Link className="text-white" to="/">Store</Link>
        <Link className="button yellow-btn ml-auto mt-auto" to="/cart">View Cart</Link>
    </div>
</>