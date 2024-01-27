module.exports = {
  testPathIgnorePatterns: ['/node_modules/', '/prisma/'],
  collectCoverage: true,
  displayName: 'root-tests',
  testMatch: ['<rootDir>/src/**/test.ts'],
  testEnviroment: 'node',
  clearMocks: 'true',
  preset: 'ts-jest'
}
