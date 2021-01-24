import React, { Component } from "react";
import $ from "jquery";
class Daftar extends Component {
	constructor() {
		super();
		this.state = {
			produk: [
				{ nama: "RAM", harga: 300_000, jumlah: "16", total: "" },
				{ nama: "Monitor", harga: 5_000_000, jumlah: "2", total: "" },
				{ nama: "Keyboard", harga: 2_000_000, jumlah: "3", total: "" },
				{ nama: "Mouse", harga: 600_000, jumlah: "1", total: "" },
				{ nama: "Harddisk", harga: 2_000_000, jumlah: "1", total: "" },
				{ nama: "VGA", harga: 16_000_000, jumlah: "1", total: "" },
				{ nama: "SSD", harga: 3_000_000, jumlah: "32", total: "" },
				{ nama: "Headset", harga: 1_200_000, jumlah: "1", total: "" },
			],
			harga: "",
			nama: "",
			jumlah: "",
			total:"",
			action: ""
		}
	}
	render() {
		return (
			<div className="container">
				<br />
				<br />
				<h3 className="text-center">Daftar Belanja</h3>
				<br />
				<br />
				<ul className="list-group">
					{this.state.produk.map((item, index) => {
						return (
							<li className="list-group-item" key={index}>
								<h5 className="text-info">{item.nama}</h5>
								<h6>Harga: {item.harga}</h6>
								<h6>Jumlah Barang: {item.jumlah}</h6>
								<h6>Total: {item.total}</h6>

								<button className="btn btn-sm btn-primary m-1" onClick={() => this.Edit(item)}
									data-toggle="modal" data-target="#modal">
									Edit
        	                </button>
								<button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(index)}>
									Hapus
        	                </button>
							</li>
						);
					})}
				</ul>
				<button className="btn btn-sm btn-primary m-3" onClick={this.Add}
					data-toggle="modal" data-target="#modal">
					Tambah Daftar Belanja
        	        </button>

				<div className="modal fade" id="modal">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header bg-primary text-white">
								<h5>Daftar Belanja</h5>
							</div>
							<form onSubmit={this.SaveProduk}>
								<div className="modal-body">
									Harga
        	                <input type="text" name="harga" className="form-control" onChange={this.bind}
										value={this.state.harga} />
        	                Nama
        	                <input type="text" name="nama" className="form-control" onChange={this.bind}
										value={this.state.nama} />
        	                Jumlah Barang
        	                <input type="text" name="jumlah" className="form-control" onChange={this.bind}
										value={this.state.jumlah} />
							Total
        	                <input type="text" name="total" className="form-control" onChange={this.bind}
										value={this.state.total} />
								</div>
								<div className="modal-footer">
									<button type="submit" className="btn btn-primary">
										Simpan
        	                </button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
	bind = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	}

	SaveProduk = (event) => {
		event.preventDefault();
		let temp = this.state.produk;

		if (this.state.action === "insert") {
			temp.push({
				harga: this.state.harga,
				nama: this.state.nama,
				jumlah: this.state.jumlah,
				total: this.state.total
			});
		} else if (this.state.action === "update") {
			let index = temp.findIndex(item => item.harga === this.state.harga);
			temp[index].nama = this.state.nama;
			temp[index].jumlah = this.state.jumlah;
			temp[index].total = this.state.total;
		}

		this.setState({ produk: temp });

		$("#modal").modal('hide');
	}

	Add = () => {
		this.setState({
			harga: "",
			nama: "",
			jumlah: "",
			total: "",
			action: "insert"
		});
	}

	Edit = (item) => {
		this.setState({
			harga: item.harga,
			nama: item.nama,
			total: item.total,
			action: "update"
		});
	}

	Drop = (index) => {
		let temp = this.state.produk;
		temp.splice(index, 1);
		this.setState({ produk: temp });
	}
	
}
export default Daftar;  