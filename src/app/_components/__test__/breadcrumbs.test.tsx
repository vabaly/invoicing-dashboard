import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AppBreadcrumbs from '../breadcrumbs';

describe('AppBreadcrumbs', () => {
  it('should render the breadcrumbs correctly', () => {
    render(<AppBreadcrumbs />);

    // Verify that the breadcrumbs are rendered
    const breadcrumbs = screen.getByRole('navigation');
    expect(breadcrumbs).toBeInTheDocument();

    // Verify that the home breadcrumb is rendered
    const homeBreadcrumb = screen.getByText('breadcrumbs.home');
    expect(homeBreadcrumb).toBeInTheDocument();

    // Verify that the other breadcrumbs are rendered
    const otherBreadcrumbs = screen.getAllByText(/path segment/);
    expect(otherBreadcrumbs).toHaveLength(2);
  });

  it('should navigate to the correct page when a breadcrumb is clicked', async () => {
    render(<AppBreadcrumbs />);

    // Click on the second breadcrumb
    const secondBreadcrumb = screen.getByText('path segment 2');
    await userEvent.click(secondBreadcrumb);

    // Verify that the page has navigated to the correct path
    expect(window.location.pathname).toEqual('/path/path segment 2');
  });
});
