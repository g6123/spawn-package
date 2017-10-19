const {spawn} = require('child_process')

const spawnBinFile = (binFilePath, args, options) => {
  if (binFilePath.endsWith('.js')) {
    return spawn(process.execPath, [binFilePath, ...args], options)
  } else {
    return spawn(binFilePath, args, options)
  }
}

exports.spawnBinFile = spawnBinFile
