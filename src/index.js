const {getBinFilePath: getFilePath} = require('./metadata')
const {spawnBinFile: spawn} = require('./spawn')

const spawnLocal = ({
  package: moduleName,
  bin: binName = moduleName,
  args: spawnArgs = [],
  cwd,
  env,
  argv0,
  stdio,
  detached,
  uid,
  gid,
  shell,
}) => (
  spawn(getFilePath(moduleName, binName), spawnArgs, {
    cwd, env, argv0, stdio, detached, uid, gid, shell,
  })
)

module.exports = spawnLocal
