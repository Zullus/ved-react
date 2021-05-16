import  React, {Component} from 'react';
import { fetchRepos } from '../../services/repos';
import ReposList from './ReposList';

class ReposContainer extends Component{

    constructor(props){

        super(props);

        this.state = {

            repos: [],
            username: '',
        }
        //Bind para jogar o this dentro das funções de handler
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    //
    componentDidMount(){

        //fetchRepos('zullus').then( res => window.console.log(res.data) );
        fetchRepos('zullus').then( res => this.setState({repos: res.data}) );
    
    };

    //
    onChangeHandler(evento){

        //window.console.log(evento.target.value);
        this.setState({username: evento.target.value}) 
    }

    //
    submitHandler(evento){

        evento.preventDefault(); //Não envia formulários
        fetchRepos(this.state.username).then( res => this.setState({repos: res.data}) );

    }   

    //
    render(){

        return (
            
            <>
                <h1>Repos</h1>

                <form 
                    action=""
                    onSubmit={this.submitHandler}
                    >
                    <input 
                        onChange={ this.onChangeHandler}
                        style={{width: '350px'}}
                        type="text" 
                        name="search" 
                        placeholder="Informe o usuário do GitHub e tecle ENTER"

                    />
                </form>
                    
                <ReposList repos={this.state.repos}></ReposList>
            </>
        )
    };

}

export default ReposContainer