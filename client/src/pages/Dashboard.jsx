import React, { Component } from 'react'
import { connect } from "react-redux";
import Navbar from "../components/Navbar/DashNav";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";

class Dashboard extends Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<div className="container-fluid">
					<div className="row">
					<Sidebar />	
					    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
							<div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
								<h1 className="h2">Dashboard</h1>
								<div className="btn-toolbar mb-2 mb-md-0">
								<div className="btn-group me-2">
									<button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
									<button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
								</div>
								<button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
									<span data-feather="calendar"></span>
									This week
								</button>
								</div>
							</div>

							<h2>Section title</h2>
							<div className="table-responsive">
								<table className="table table-striped table-sm">
								<thead>
									<tr>
									<th>#</th>
									<th>Header</th>
									<th>Header</th>
									<th>Header</th>
									<th>Header</th>
									</tr>
								</thead>
								<tbody>
									<tr>
									<td>1,001</td>
									<td>Lorem</td>
									<td>ipsum</td>
									<td>dolor</td>
									<td>sit</td>
									</tr>
									<tr>
									<td>1,002</td>
									<td>amet</td>
									<td>consectetur</td>
									<td>adipiscing</td>
									<td>elit</td>
									</tr>
									<tr>
									<td>1,003</td>
									<td>Integer</td>
									<td>nec</td>
									<td>odio</td>
									<td>Praesent</td>
									</tr>
									<tr>
									<td>1,003</td>
									<td>libero</td>
									<td>Sed</td>
									<td>cursus</td>
									<td>ante</td>
									</tr>
									<tr>
									<td>1,004</td>
									<td>dapibus</td>
									<td>diam</td>
									<td>Sed</td>
									<td>nisi</td>
									</tr>
									<tr>
									<td>1,005</td>
									<td>Nulla</td>
									<td>quis</td>
									<td>sem</td>
									<td>at</td>
									</tr>
									<tr>
									<td>1,006</td>
									<td>nibh</td>
									<td>elementum</td>
									<td>imperdiet</td>
									<td>Duis</td>
									</tr>
									<tr>
									<td>1,007</td>
									<td>sagittis</td>
									<td>ipsum</td>
									<td>Praesent</td>
									<td>mauris</td>
									</tr>
									<tr>
									<td>1,008</td>
									<td>Fusce</td>
									<td>nec</td>
									<td>tellus</td>
									<td>sed</td>
									</tr>
									<tr>
									<td>1,009</td>
									<td>augue</td>
									<td>semper</td>
									<td>porta</td>
									<td>Mauris</td>
									</tr>
									<tr>
									<td>1,010</td>
									<td>massa</td>
									<td>Vestibulum</td>
									<td>lacinia</td>
									<td>arcu</td>
									</tr>
									<tr>
									<td>1,011</td>
									<td>eget</td>
									<td>nulla</td>
									<td>className</td>
									<td>aptent</td>
									</tr>
									<tr>
									<td>1,012</td>
									<td>taciti</td>
									<td>sociosqu</td>
									<td>ad</td>
									<td>litora</td>
									</tr>
									<tr>
									<td>1,013</td>
									<td>torquent</td>
									<td>per</td>
									<td>conubia</td>
									<td>nostra</td>
									</tr>
									<tr>
									<td>1,014</td>
									<td>per</td>
									<td>inceptos</td>
									<td>himenaeos</td>
									<td>Curabitur</td>
									</tr>
									<tr>
									<td>1,015</td>
									<td>sodales</td>
									<td>ligula</td>
									<td>in</td>
									<td>libero</td>
									</tr>
								</tbody>
								</table>
							</div>
						</main>
					</div>
				</div>
				<Footer />
			</React.Fragment>
		);
	}
}

export default Dashboard
