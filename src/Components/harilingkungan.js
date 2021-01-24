import React, {Component} from "react";
import $ from "jquery";
class haribesar extends Component{
    constructor(){
        super();
        this.state = {
            hb : [
                {tgl:"10 Januari", nama:"Hari perencanaan sejuta pohon",agenda:""},
                {tgl:"2 Februari", nama:"Hari lahan basah sedunia",agenda:""},
                {tgl:"21 Februari", nama:"Hari peduli sampah nasional",agenda:""},
                {tgl:"6 Maret", nama:"Hari strategi konservasi sedunia",agenda:""},
                {tgl:"16 Maret", nama:"Hari bakti rimbawan",agenda:""},
                {tgl:"20 Maret", nama:"Hari kehutanan sedunia",agenda:""},
                {tgl:"22 Maret", nama:"Hari Air",agenda:""},
                {tgl:"22 April", nama:"Hari Bumi",agenda:""},
            ],
            tgl:"",
            nama:"",
            agenda:"",
            action:""
        }
    }
    	render(){  
        	    return (  
        	      <div className="container"> 
				   <br/>
                  <br/>
                   <h3 className="text-center">Hari Lingkungan Hidup</h3> 
                  <br/>
                  <br/> 
        	        <ul className="list-group">  
        	          {this.state.hb.map((item,index) => {  
        	            return (  
        	              <li className="list-group-item" key={index}>  
        	                <h5 className="text-info">{item.nama}</h5>  
        	                <h6>Tanggal: {item.tgl}</h6>  
        	                <h6>Agenda: {item.agenda}</h6>  
        	  
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
        	          Tambah Data  
        	        </button>  
        	  
        	        <div className="modal fade" id="modal">  
        	          <div className="modal-dialog">  
        	            <div className="modal-content">  
        	              <div className="modal-header bg-primary text-white">  
        	                <h5>Hari Lingkungan Hidup</h5>  
        	              </div>  
        	              <form onSubmit={this.SaveHb}>  
        	              <div className="modal-body">  
        	                Tanggal 
        	                <input type="text" name="tgl" className="form-control" onChange={this.bind}  
        	                value={this.state.tgl} />  
        	                Nama  
        	                <input type="text" name="nama" className="form-control" onChange={this.bind}  
        	                value={this.state.nama} />  
        	                Agenda  
        	                <input type="text" name="agenda" className="form-control" onChange={this.bind}  
                            value={this.state.agenda} />  
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
				  this.setState({[event.target.name]: event.target.value});  
				}  
				  
				SaveHb = (event) =>{  
				  event.preventDefault();  
				  let temp = this.state.hb;  
				  
				  if (this.state.action === "insert") {  
				    temp.push({  
					  tgl: this.state.tgl,  
				      nama: this.state.nama,  
				      agenda: this.state.agenda  
				    });  
				  } else if (this.state.action === "update") {  
				    let index = temp.findIndex(item => item.tgl === this.state.tgl);  
				    temp[index].nama = this.state.nama;  
				    temp[index].agenda = this.state.agenda;  
				  }  
				  
				  
				  this.setState({hb: temp});  
				  
				  $("#modal").modal('hide');  
				}  
				  
				Add = () => {  
				  this.setState({  
				    tgl: "",  
				    nama: "",  
				    agenda: "",  
				    action: "insert"  
				  });  
				}  
				  
 				Edit = (item) => {  
			   	  this.setState({  
				    tgl: item.tgl,  
				    nama: item.nama,  
				    action: "update"  
				  });  
				}  
				  
				Drop = (index) => {
				  let temp = this.state.hb;  
				  
				  temp.splice(index,1);  
				  
				  this.setState({hb: temp});  
				}  
} 
export default haribesar;  