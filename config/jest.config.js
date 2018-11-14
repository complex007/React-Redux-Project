const path = require('path');
 
module.exports = {
  rootDir: path.resolve(__dirname, '../'),
  collectCoverage: true, 
  collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,mjs}'], 
  coverageDirectory: '<rootDir>/test/coverage', 
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/src/index.js'], 
  moduleNameMapper: { 
    '^src(.*)$': '<rootDir>/src$1',
    '^util(.*)$': '<rootDir>/src/util$1',
    '^assets(.*)$': '<rootDir>/src/assets$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^containers(.*)$': '<rootDir>/src/containers$1'
  },
  setupFiles: ['<rootDir>/test/setup.js'],
  testMatch: [
    '<rootDir>/test/**/?(*.)(spec|test).{js,jsx,mjs}',
    '<rootDir>/src/**/tests/**/*.{js,jsx,mjs}',
  ],
  testURL: 'https://test.com?empty=&num=0&str=str&cstr=中文&encode=%e4%b8%ad%e6%96%87', // 运行环境下的url，默认about:blank
  transform: {
    '^.+\\.(js|jsx|mjs)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.(css|less)$': '<rootDir>/test/cssTransform.js',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/fileTransform.js',
  },
  transformIgnorePatterns: [ 
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$',
  ],
};
