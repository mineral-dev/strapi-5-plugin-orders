# Testing Guide for Strapi 5 Orders Plugin

This guide explains how to run and write tests for the Strapi 5 Orders Plugin.

## Test Setup

The project uses Jest as the testing framework with the following additional libraries:
- **React Testing Library** for testing React components
- **Babel** for transpiling modern JavaScript/JSX
- **Supertest** for API testing (when needed)

## Running Tests

### Install Dependencies
First, install all dependencies:
```bash
npm install
```

### Run All Tests
```bash
npm test
```

### Run Tests in Watch Mode
```bash
npm run test:watch
```

### Run Tests with Coverage
```bash
npm run test:coverage
```

### Run Build Test
This runs the build process and then runs all tests:
```bash
npm run build:test
```

### CI Testing
For continuous integration:
```bash
npm run test:ci
```

## Test Structure

The project has separate test configurations for:
- **Admin (Frontend)**: React component tests using jsdom environment
- **Server (Backend)**: Controller and service tests using node environment

### Test File Locations

- Frontend tests: `admin/src/components/__tests__/`
- Backend tests: `server/src/controllers/__tests__/`, `server/src/services/__tests__/`
- Build tests: `__tests__/build.test.js`

## Writing Tests

### React Component Tests

Example test for a functional React component:

```javascript
import React from 'react';
import { render } from '@testing-library/react';
import { YourComponent } from '../YourComponent';

describe('YourComponent', () => {
  it('should render correctly', () => {
    const { getByText } = render(<YourComponent prop="value" />);
    expect(getByText('Expected Text')).toBeInTheDocument();
  });
});
```

### Backend Controller Tests

Example test for a Strapi controller:

```javascript
const controller = require('../controller').default;

describe('Controller', () => {
  let strapi;
  let ctx;

  beforeEach(() => {
    // Setup mocks
    strapi = {
      plugin: jest.fn(() => ({
        service: jest.fn(() => mockService),
      })),
    };
    
    ctx = {
      body: null,
      request: { query: {} },
      params: {},
    };
  });

  it('should handle request', async () => {
    const controllerInstance = controller({ strapi });
    await controllerInstance.methodName(ctx);
    expect(ctx.body).toBeDefined();
  });
});
```

## Mocking

### Mocking Strapi Components
The tests include mocks for:
- `@strapi/design-system` components
- `@strapi/icons`
- Strapi plugin services

### Style Mocks
CSS imports are mocked using `__mocks__/styleMock.js` to prevent issues during testing.

## Coverage Reports

After running tests with coverage, reports are generated in the `coverage/` directory:
- HTML report: `coverage/lcov-report/index.html`
- Coverage summary in the console

## CI/CD Integration

The project includes a GitHub Actions workflow (`.github/workflows/test.yml`) that:
- Runs tests on Node.js 18.x and 20.x
- Generates coverage reports
- Uploads coverage to Codecov (if configured)
- Runs build tests

## Best Practices

1. **Keep tests focused**: Each test should verify one specific behavior
2. **Use descriptive test names**: Test names should clearly describe what is being tested
3. **Mock external dependencies**: Mock Strapi services, APIs, and external libraries
4. **Test edge cases**: Include tests for error handling and edge cases
5. **Maintain test coverage**: Aim for at least 80% code coverage

## Troubleshooting

### Common Issues

1. **Import errors**: Ensure all imports are properly mocked in the test setup
2. **Async issues**: Use `async/await` or return promises in async tests
3. **Component not rendering**: Check if all required props and context are provided

### Debugging Tests

Run tests with additional output:
```bash
npm test -- --verbose
```

Run a specific test file:
```bash
npm test -- OrderItem.test.js
```

Run tests matching a pattern:
```bash
npm test -- --testNamePattern="should render"
```