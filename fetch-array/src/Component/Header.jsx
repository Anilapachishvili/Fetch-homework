import "./header.css";

function Header () {
    return (
        <div>
         <div className="customers"><h1>All Customers</h1></div>
         <div>
            <ul className="row">
                <li>Customer Name</li>
                <li>Company</li>
                <li>Phone Number</li>
                <li>Email</li>
                <li>Street</li>
            </ul>
         </div>
        </div>
    )
}
export default Header;