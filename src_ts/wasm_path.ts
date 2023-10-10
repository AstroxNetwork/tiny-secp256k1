export function path(wasmFilename) {
    const path = require('path').join(__dirname, `${wasmFilename}`);
    return path;
}
