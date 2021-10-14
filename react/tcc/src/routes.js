import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FaleConosco from './pages/faleConosco';



export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/faleConosco" exact={true} component={FaleConosco} />
                {/* <Route path="/teste" exact={true} component={Teste} /> */}
            </Switch>
        </BrowserRouter>
    )
}