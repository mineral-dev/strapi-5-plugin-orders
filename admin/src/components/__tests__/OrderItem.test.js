import React from 'react';
import { render } from '@testing-library/react';
import OrderItem from '../OrderItem';

// Mock the Strapi design system
jest.mock('@strapi/design-system', () => ({
  Box: ({ children, style, ...props }) => <div style={style} {...props}>{children}</div>,
  Flex: ({ children, style, ...props }) => <div style={style} {...props}>{children}</div>,
  Typography: ({ children, as, style, ...props }) => {
    const Tag = as || 'span';
    return <Tag style={style} {...props}>{children}</Tag>;
  },
}));

// Mock the money utility
jest.mock('../../utils/money', () => ({
  __esModule: true,
  default: (value) => `$${value.toFixed(2)}`,
}));

describe('OrderItem Component', () => {
  const baseData = {
    name: 'Test Product',
    sku: 'TEST-SKU-123',
    regular_price: 100,
    qty: 2,
    options: [],
  };

  it('should render product name and SKU', () => {
    const { getByText } = render(<OrderItem data={baseData} />);
    
    expect(getByText('Test Product')).toBeInTheDocument();
    expect(getByText('SKU : TEST-SKU-123')).toBeInTheDocument();
  });

  it('should calculate and display subtotal correctly', () => {
    const { getByText } = render(<OrderItem data={baseData} />);
    
    // Regular price: $100
    expect(getByText('$100.00')).toBeInTheDocument();
    // Quantity: 2
    expect(getByText('2')).toBeInTheDocument();
    // Subtotal: $200
    expect(getByText('$200.00')).toBeInTheDocument();
  });

  it('should display sale price when different from regular price', () => {
    const dataWithSale = {
      ...baseData,
      sale_price: 80,
    };
    const { getByText } = render(<OrderItem data={dataWithSale} />);
    
    // Regular price
    expect(getByText('$100.00')).toBeInTheDocument();
    // Sale price (should show with minus sign and parentheses)
    expect(getByText('- ($80.00)')).toBeInTheDocument();
    // Subtotal should use sale price: 80 * 2 = 160
    expect(getByText('$160.00')).toBeInTheDocument();
  });

  it('should not display sale price when same as regular price', () => {
    const dataWithSameSale = {
      ...baseData,
      sale_price: 100,
    };
    const { queryByText } = render(<OrderItem data={dataWithSameSale} />);
    
    // Should not show the sale price in parentheses
    expect(queryByText(/- \(/)).not.toBeInTheDocument();
  });

  it('should render product options', () => {
    const dataWithOptions = {
      ...baseData,
      options: [
        { attribute: 'color', option: { name: 'red' } },
        { attribute: 'size', option: { name: 'medium' } },
      ],
    };
    const { getByText } = render(<OrderItem data={dataWithOptions} />);
    
    expect(getByText('color : red')).toBeInTheDocument();
    expect(getByText('size : medium')).toBeInTheDocument();
  });

  it('should apply custom styles', () => {
    const customStyle = { backgroundColor: 'blue' };
    const { container } = render(<OrderItem data={baseData} style={customStyle} />);
    
    const flexElement = container.firstChild;
    expect(flexElement).toHaveStyle('backgroundColor: blue');
  });

  it('should handle empty options array', () => {
    const { container } = render(<OrderItem data={baseData} />);
    
    // Should render without errors
    expect(container).toBeDefined();
  });

  it('should handle missing sale_price', () => {
    const dataWithoutSale = { ...baseData };
    delete dataWithoutSale.sale_price;
    
    const { getByText } = render(<OrderItem data={dataWithoutSale} />);
    
    // Subtotal should use regular price
    expect(getByText('$200.00')).toBeInTheDocument();
  });
});