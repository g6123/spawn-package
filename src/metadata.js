const path = require('path')
const isString = require('lodash.isstring')

const getBinInfo = moduleName => {
  const info = require(path.join(moduleName, 'package.json')).bin

  if (!info) {
    throw new Error(`Cannot find binaries from '${moduleName}'`)
  }

  return info
}

const getBinFileName = (moduleName, binName) => {
  const binInfo = getBinInfo(moduleName)

  if (isString(binInfo)) {
    return binInfo
  } else if (binInfo && isString(binInfo[binName])) {
    return binInfo[binName]
  } else {
    throw new Error(`Cannot find binary '${binName}'`)
  }
}

const getBinFilePath = (moduleName, binName) => {
  const binFileName = getBinFileName(moduleName, binName)

  if (path.isAbsolute(binFileName)) {
    return binFileName
  } else {
    return require.resolve(path.join(moduleName, binFileName))
  }
}

exports.getBinInfo = getBinInfo
exports.getBinFileName = getBinFileName
exports.getBinFilePath = getBinFilePath
