import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
	return (
		<nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
			<div className="position-sticky pt-3">
				<ul className="nav flex-column">
				<li className="nav-item">
					<Link className="nav-link active" to="/dashboard">Dashboard</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link " to="/users">Users</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link " to="/products">Products</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link " to="/sales">Sales</Link>
				</li>
				<li className="nav-item">
					<Link className="nav-link " to="/settings">Settings</Link>
				</li>
				</ul>
			</div>
		</nav>
	);
}
