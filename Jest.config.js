 module.exports ={
  testMatch: ['**.test.js'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputDirectory: 'test_results',
        outputName: 'jest-junit.xml',
        suiteName: 'Angular Inventions Tests'
      },
    ],
  ],
}