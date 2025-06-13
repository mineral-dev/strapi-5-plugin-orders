import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Status } from '../Status';

// Mock the Strapi design system
jest.mock('@strapi/design-system', () => ({
  Badge: ({ children }) => <span data-testid="badge">{children}</span>,
}));

describe('Status Component', () => {
  it('should display "Pending Payment" for status 0', async () => {
    const { getByTestId } = render(<Status data={0} />);
    
    await waitFor(() => {
      expect(getByTestId('badge')).toHaveTextContent('Pending Payment');
    });
  });

  it('should display "Paid" for status 1', async () => {
    const { getByTestId } = render(<Status data={1} />);
    
    await waitFor(() => {
      expect(getByTestId('badge')).toHaveTextContent('Paid');
    });
  });

  it('should display "Shipped" for status 2', async () => {
    const { getByTestId } = render(<Status data={2} />);
    
    await waitFor(() => {
      expect(getByTestId('badge')).toHaveTextContent('Shipped');
    });
  });

  it('should display "Canceled" for status 3', async () => {
    const { getByTestId } = render(<Status data={3} />);
    
    await waitFor(() => {
      expect(getByTestId('badge')).toHaveTextContent('Canceled');
    });
  });

  it('should display "Expired" for status 4', async () => {
    const { getByTestId } = render(<Status data={4} />);
    
    await waitFor(() => {
      expect(getByTestId('badge')).toHaveTextContent('Expired');
    });
  });

  it('should display "Canceled by Admin" for status 5', async () => {
    const { getByTestId } = render(<Status data={5} />);
    
    await waitFor(() => {
      expect(getByTestId('badge')).toHaveTextContent('Canceled by Admin');
    });
  });

  it('should display "Need Verification" for status 999', async () => {
    const { getByTestId } = render(<Status data={999} />);
    
    await waitFor(() => {
      expect(getByTestId('badge')).toHaveTextContent('Need Verification');
    });
  });

  it('should display empty string for unknown status', async () => {
    const { getByTestId } = render(<Status data={100} />);
    
    await waitFor(() => {
      expect(getByTestId('badge')).toHaveTextContent('');
    });
  });
});