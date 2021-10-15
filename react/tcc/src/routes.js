import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Cadastro from './pages/cadastro'
import Login from './pages/login';
import EsqueceuSenha from './pages/esqueceuSenha';
import Codigo from './pages/codigo';
import Inicial from './pages/turispace';
import FaleConosco from './pages/faleConosco';



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/cadastrar" exact={true} component={Cadastro} />
                <Route path="/login" exact={true} component={Login} />
                <Route path="/esqueceuSenha" exact={true} component={EsqueceuSenha} />
                <Route path="/codigo" exact={true} component={Codigo} />
                <Route path="/turispace" exact={true} component={Inicial} />
                <Route path="/faleConosco" exact={true} component={FaleConosco} />
                {/* <Route path="/teste" exact={true} component={Teste} /> */}
            </Switch>
        </BrowserRouter>
    )
}