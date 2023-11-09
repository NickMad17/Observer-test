import {changeCircle, fileSvg, folderSvg} from "../../../public/svg/svg.js";

export const drowTree = (tree) => {
    let html = ``
    const newTree = tree
    let files = newTree.files
    let folders = newTree.dirs

    const folderOpen = (folder) => {
        const filesInFolder = newTree[folder].files
        const html = []
        filesInFolder.forEach(file => {
            if (file.type === "file") {
                html.push(`<p class="file" style="margin-left: 20px">${fileSvg}${file.name}${file.change ? changeCircle : ""}</p>`)
            } else {
                folderOpen(file.type)
            }
        })
        return html.join("")

    }

    const levelOne =
        `${files.map(file => {
            if (file.type === "file") {
                return `<p class="file">${fileSvg}${file.name}${file.change ? changeCircle : ""}</p>`
            } else {
                const folder = `<p class="folder">${folderSvg}${file.name}</p>`
                return `
                    ${folder}
                    ${folderOpen(file.name)}
                `
            }
        }).join("")
        }`

    html += levelOne

    return html
}