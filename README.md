# spawn-package

[![npm version](https://badge.fury.io/js/spawn-package.svg)](https://badge.fury.io/js/spawn-package)

Spawns executables registered by `package.json`.
Works with both global and local packages, on any package managers.

## Install

```sh
$ npm install spawn-package
```

## Usage

```javascript
var spawnPackage = require('spawn-package');

spawnPackage({
  package: ['gulp'],
});

spawnPackage({
  package: ['webpack'],
  args: ['--env.production'],
})
```

## API

### `spawnPackage(options)`

Spawns executables registered by `package.json`.

#### options.package

Required, `string`

The name of the package where the executable to run belongs

#### options.bin

Optional, `string`

The name of binary defined in `package.json`.
This will be set to `package` if not specified.

#### options.args

Optional, `string[]`

List of string arguments passed to the spawned process

#### options.cwd

Optional, `string`

Current working directory of the spawned process

#### options.env

Optional, `Object`

Environment key-value pairs

#### options.argv0

Optional, `string`

Explicitly sets the value of `argv[0]` sent to the child process.
This will be set to the full path of the executable if not specified.

#### options.stdio

Optional, `Array | string`

Child's stdio configuration
(see Node.js [docs](https://nodejs.org/docs/latest/api/child_process.html#child_process_options_stdio))

#### options.detached

Optional, `boolean`

Prepares child to run independently of its parent process
(see Node.js [docs](https://nodejs.org/docs/latest/api/child_process.html#child_process_options_detached)).

#### options.uid

Optional, `number`

Sets the user identity of the process
(see [setuid(2)](http://man7.org/linux/man-pages/man2/setuid.2.html)).

#### options.gid

Optional, `number`

Sets the group identity of the process
(see [setuid(2)](http://man7.org/linux/man-pages/man2/setuid.2.html)).

#### options.shell

Optional, `boolean | string`

If `true`, runs command inside of a shell. Uses `'/bin/sh'` on UNIX, and `process.env.ComSpec` on Windows.
A different shell can be specified as a string. See Shell Requirements and Default Windows Shell.

## License

MIT
