const fs = require('fs');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);

    list.forEach((file) => {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            /* Recurse into a subdirectory */
            results = results.concat(walk(file));
        } else {
            /* Is a file */
            results.push(file);
        }
    });
    return results;
}

function say(type, string) {
    if (type === 'alert') {
        console.log('\u001b[' + 32 + 'm' + `✅ ${string}` + '\u001b[0m');
    } else if (type === 'error') {
        console.log('\u001b[' + 31 + 'm' + `❌ ${string}` + '\u001b[0m');
    }
}

module.exports = { walk, say };
