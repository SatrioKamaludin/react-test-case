module.exports = {
    testEnvironment: 'jsdom',
    testMatch: ['**/*.test.tsx'],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.tsx?$': 'babel-jest',
    },
};