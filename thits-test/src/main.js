import './style.css'
import {connect, rehost} from "./components/ws/ws.js";
import {treeBox} from "./components/tree/treeBox.js";
import {drawContent} from "./components/ws/drowContent.js";

document.querySelector('#app').innerHTML = `
    <div>
        <div class="box">
            ${treeBox}
            <div class="socket">
            </div>
        </div>    
        <button id="btn" style="margin-top: 50px; margin-left:320px">Войти в новую комнату</button>
    </div>
`
rehost()
drawContent()
connect()



