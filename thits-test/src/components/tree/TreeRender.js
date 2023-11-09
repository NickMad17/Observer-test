import {changFile} from "./changeFile.js";

class Tree {
    constructor(dirs, files, allFiles) {
        this.dirs = dirs
        this.files = files
        this.allFiles = allFiles
    }
}

export const renderTree = (files) => {
    const tree = new Tree([], []);
    files.forEach((file) => {
        const path = file.path.slice(1).split("/");
        const flag = path.at(-1) === changFile.at(-1);

        if (path.length === 1 && file.type === "file") {
            const newFile = {
                name: path[0],
                type: "file",
                change: flag,
                content: file.content,
                path: file.path,
            };

            tree.files.push(newFile);
            return;
        }

        for (let i = 0; i < path.length - 1; i++) {
            if (!tree.dirs.includes(path[i])) {
                tree.dirs.push(path[i]);
                tree.files.push({
                    name: path[i],
                    type: "folder",
                });
                tree[path[i]] = {
                    files: [],
                };
            }
        }

        if (path.length !== 1) {
            const newFile = {
                name: path[path.length - 1],
                type: "file",
                change: flag,
                content: file.content,
                path: file.path,
            };

            tree[path[path.length - 2]].files.push(newFile);
        }
    });

    return tree;


}