import {Login} from './styled'

export default function Index() {
    return(
            <Login>
                <div class="f1-container">
                    <div class="conteudo">
                        <div class="cabecalho-login">
                            <img src={'../../assets/images/icon-login.svg'} alt="" class="icon-login"/>
                            <div class="login">Login</div>
                        </div>
                        <input class="input-email" type="text" placeholder="Digite seu e-mail"/>
                        <div class="linha-email"></div>
                        <input class="input-senha" type="text" placeholder="Digite sua senha"/>
                        <div class="linha-senha"></div>
                        <button class="esqueceu-senha"> <a href="http://127.0.0.1:5500/html/esqueceu%20_senha/index.html">Esqueceu sua senha?</a></button>
                        <button class="botao-logar">Entrar</button>
                    </div>
                </div>
            </Login>
    )
}