import React from 'react';
import { render } from '@testing-library/react';
import { PluginIcon } from '../PluginIcon';

// Mock the Strapi icons
jest.mock('@strapi/icons', () => ({
  Sparkle: () => <div data-testid="sparkle-icon">Sparkle Icon</div>,
}));

describe('PluginIcon', () => {
  it('should render the Sparkle icon', () => {
    const { getByTestId } = render(<PluginIcon />);
    
    expect(getByTestId('sparkle-icon')).toBeInTheDocument();
  });

  it('should render without crashing', () => {
    const { container } = render(<PluginIcon />);
    
    expect(container).toBeDefined();
  });
});