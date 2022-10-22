import React, { Component } from 'react';
import axios from 'axios';

const URLapiGatinho= "https://api.thecatapi.com/v1/images/search";
const initialState = {
    imagem: { id: '', url: '', width: 0, height: 0 },
    lista: [],
    // Novo estado para definir quando eu estou atualizando e vise versa
}

export default class PerfilImagem extends Component {
    state = { ...initialState }

    componentDidMount() {
        axios(URLapiGatinho).then(resp => {
            this.setState({ lista: resp.data })

        })
    }

    render() {
        return (
           <div>
               {this.state.lista.map(
                   (e) =>
                   <img style={{width: "150px"}} src={e.url}/>
               )}
           </div>

        )
    }
}