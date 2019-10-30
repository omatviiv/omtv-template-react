module.exports = {
  verbose: true,
  moduleNameMapper: {
    '^src(.*)$': '<rootDir>/src$1',
    '^assets(.*)$': '<rootDir>/src/assets$1',
  },
  setupFiles: [
    './jestsetup.js',
  ],
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
};
