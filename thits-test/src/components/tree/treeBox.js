import {files} from "../files.js";
import {drowTree} from "./drowTree.js";
import {renderTree} from "./TreeRender.js";
import {folderSvg} from "../../../public/svg/svg.js";
import {treeChange} from "./changeFile.js";

const projectName = "Project 1";
const tree = renderTree(files);

console.log(tree)
export const treeBox =
    `<div class="folder-box">
        <p class="folder">${folderSvg}${projectName}</p>
        <div style="margin-left: 20px" id="new-render"> ${drowTree(tree)} </div>
     </div>`



setInterval(() => {
    const newRender = document.getElementById("new-render");
    const Tree = treeChange(files)
    newRender.innerHTML = `${drowTree(Tree)}`
}, 2000)
