module.exports = {
  testEnvironment: 'node',
  // Setup different test environments for different file types
  projects: [
    {
      displayName: 'admin',
      testEnvironment: 'jsdom',
      testMatch: ['<rootDir>/admin/**/*.test.js', '<rootDir>/admin/**/*.spec.js'],
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
      transform: {
        '^.+\\.jsx?$': 'babel-jest',
      },
      moduleNameMapper: {
        '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
      },
    },
    {
      displayName: 'server',
      testEnvironment: 'node',
      testMatch: ['<rootDir>/server/**/*.test.js', '<rootDir>/server/**/*.spec.js'],
      transform: {
        '^.+\\.js$': 'babel-jest',
      },
    },
  ],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverageFrom: [
    'admin/src/**/*.{js,jsx}',
    'server/src/**/*.js',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/*.test.{js,jsx}',
    '!**/*.spec.{js,jsx}',
  ],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  clearMocks: true,
};