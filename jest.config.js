module.exports = {
  roots: [
    "<rootDir>/test"
  ],
  testRegex: 'test/(.+)\\.test\\.(jsx?|tsx?)$',
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
   // 模块路径别名
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // testMatch: ['<rootDir>/src/components/Field/**/*.test.[jt]s?(x)'],
  // 忽略测试
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/lib/'],
  collectCoverage: false,
  // 测试覆盖率
  coverageThreshold: {
    'global': {
      // 分支覆盖率, 是否测试用例的每个if代码块都执行了
      'branches': 50,
      // 函数覆盖率, 是否测试用例的每一个函数都调用了
      'functions': 50,
      // 行覆盖率, 是否测试用例都每一行都执行了
      'lines': 50,
      // 语句覆盖率, 是否测试用例都每个语句都执行了
      'statements': 50
    }
  },
  // 覆盖率来源
  collectCoverageFrom: [
    '**/src/**',
    '!**/src/**/*.d.ts',
    '!**/src/**/*.less',
    '!**/src/**/*.snap',
    '!**/node_modules/**',
    '!**/build/**',
    '!**/lib/**'
  ],
};