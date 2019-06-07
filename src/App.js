import React, {Component } from 'react';
import Header from "./component/Header";
import Formulario from './component/Formulario';
import Error from './component/Error'
import Clima from './component/Clima'



class App extends Component {

  state = {
    error: '',
    consulta: {},
    resultado:{}
  }

  componentDidUpdate(prevProps, prevState){

    if(prevState.consulta != this.state.consulta){
      this.consultarApi();
    }
    
  }

  componentDidMount(){
    this.setState({
      error: false
    })
  
  }

  consultarApi = () =>{
    const {ciudad, pais} = this.state.consulta;
    if(!ciudad || !pais) return null

    const appId = '4e337dd2646e358599aed6a69c223967';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;
    //console.log(url)

    // query con fetch
    fetch(url)
      .then( response => {
        return response.json()
      })
      .then(datos => {
        console.log(datos)
        this.setState({
          resultado : datos
        })
      })
      .catch( error => {
        console.log(error)
      })
    
    // leer la url y agregar el api key
    
    // consultar con fetch
  }


  datosConsulta = respuesta => {
    
    if(respuesta.ciudad === '' || respuesta.pais === ''){
      this.setState({
        error: true
      })
    } else{
      this.setState({
        consulta : respuesta,
        error : false
      })
    }
  }

  render(){

    const error = this.state.error;
    let resultado

    if(error){
      resultado = <Error mensaje="Ambos campos son obligatorios" />
    } else {
      resultado = <Clima resultado = {this.state.resultado} />
    }

    return (
      <div className="app">
        
          <Header
            titulo="Clima React"
          />
          <Formulario 
            datosConsulta={this.datosConsulta}
          />
        {resultado}
      </div>
    )
  }
  
}

export default App;
