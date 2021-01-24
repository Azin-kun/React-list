import react from "react"
import Alert from "./components/alert"
import Coun from "./components/counter"
class Main extends react.Component{
    constructor(){
        super()
        this.state = {
            judul:"judul alert",
            pesan:"pesan alert"
        }
    }
    render(){
        let data =[
            {color: 'success', title: 'head success', isi: 'selamat'},
            {color: 'dark', title: 'head dark', isi: 'hae'},
            {color: 'primary', title: 'head primary', isi: 'hola'}
        ]
        return(
            <div className="container">
               {/* <Alert color="success" title="sukses" >haloo<Alert color="dark" title="anakni">anak anak</Alert></Alert>
               <Alert color="danger" title="bahaya">haee</Alert>
               <Alert color="info" title="informasi">hulaa</Alert>
               <Alert color="dark" title="gelap">hopplaaa</Alert> */}
                {/* <Coun/> */}

                { data.map(item => (
                    <Alert color={item.color} title={item.title}>
                        {item.isi}
                    </Alert>
                )) }


                <div className="card col-12">
                    <div className="card-title bg-success text-white">
                        <h3>Contoh Manipulasi State</h3>
                    </div>
                    <div className="card-body">
                        <Alert background="primary" title={ this.state.judul }>
                            { this.state.pesan }
                        </Alert>
                    </div>
                    <div className="card-footer">
                        Judul
                        <input type="text" className="form-control mb-2"
                        value={ this.state.judul }
                        onChange={ (ev) => this.setState({judul : ev.target.value}) } />
                        Pesan
                        <input type="text" className="form-control mb-2"
                        value={ this.state.pesan }
                        onChange={ (ev) => this.setState({pesan : ev.target.value}) } />
                    </div>
                </div>
            </div>
        )
    }
}

export default Main;