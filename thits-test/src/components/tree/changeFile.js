import {renderTree} from "./TreeRender.js";
import {files} from "../files.js";

export let changFile = ""

export const treeChange = (filesObj) => {

    const onlyFile = filesObj.filter(file => {
        if (file.type === "file") {
            return file
        }
    })

    const randomNumber = Math.ceil(Math.random() * (onlyFile.length - 1))
    const changingFile = onlyFile[randomNumber].path
    filesObj.map(file => {
        if (file.path === changingFile) {
            file.content = `${file.content};`
            changFile = file.path.slice(1).split("/")
        }
    })

    return renderTree(filesObj)
}
