const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

describe('Build Tests', () => {
  // Increase timeout for build operations
  jest.setTimeout(60000);

  it('should successfully build the plugin', () => {
    // Run the build command
    expect(() => {
      execSync('npm run build', { stdio: 'pipe' });
    }).not.toThrow();

    // Verify dist directory exists
    const distPath = path.join(__dirname, '..', 'dist');
    expect(fs.existsSync(distPath)).toBe(true);
  });

  it('should create admin build output', () => {
    const adminDistPath = path.join(__dirname, '..', 'dist', 'admin');
    expect(fs.existsSync(adminDistPath)).toBe(true);
    
    // Check for admin build files
    const adminIndexPath = path.join(adminDistPath, 'index.js');
    expect(fs.existsSync(adminIndexPath)).toBe(true);
  });

  it('should create server build output', () => {
    const serverDistPath = path.join(__dirname, '..', 'dist', 'server');
    expect(fs.existsSync(serverDistPath)).toBe(true);
    
    // Check for server build files
    const serverIndexPath = path.join(serverDistPath, 'index.js');
    expect(fs.existsSync(serverIndexPath)).toBe(true);
  });

  it('should have valid package.json exports', () => {
    const packageJson = require('../package.json');
    
    // Verify exports are properly configured
    expect(packageJson.exports).toBeDefined();
    expect(packageJson.exports['./strapi-admin']).toBeDefined();
    expect(packageJson.exports['./strapi-server']).toBeDefined();
  });

  it('should pass plugin verification', () => {
    // Run the verify command
    expect(() => {
      execSync('npm run verify', { stdio: 'pipe' });
    }).not.toThrow();
  });
});