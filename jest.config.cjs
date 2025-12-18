module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '\\.(css|scss|sass)$': '<rootDir>/test/__mocks__/styleMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
};
