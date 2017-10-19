const path = require('path');
const chai = require('chai');

const {expect} = chai;

describe('Read binary path from local package metadata', () => {
  const {getBinFilePath} = require('../lib/metadata');

  it('With single entry', () => {
    const mockPath = path.join(__dirname, 'mock' ,'single');

    expect(getBinFilePath(mockPath))
      .to.be.eq(path.join(mockPath, 'program.js'));
  });

  it('With multiple entries', () => {
    const mockPath = path.join(__dirname, 'mock' ,'multiple');

    expect(getBinFilePath(mockPath, 'program'))
      .to.be.eq(path.join(mockPath, 'program.js'));
  });
});
