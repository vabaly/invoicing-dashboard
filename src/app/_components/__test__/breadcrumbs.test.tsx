import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import AppBreadcrumbs from '../breadcrumbs';
import i18n from '~/i18n';

jest.mock('next/navigation', () => ({
  usePathname: () => '/path/path segment 1/path segment 2',
}));

describe('AppBreadcrumbs', () => {
  it('should render the breadcrumbs correctly', () => {
    const { asFragment } = render(<AppBreadcrumbs />);

    // Snapshot test
    expect(asFragment().children[0]).toMatchSnapshot();

    // Verify that the breadcrumbs are rendered
    const breadcrumbs = screen.getByRole('navigation');
    expect(breadcrumbs).toBeInTheDocument();

    // Verify that the home breadcrumb is rendered
    const homeBreadcrumb = screen.getByText(i18n.t('breadcrumbs.home'));
    expect(homeBreadcrumb).toBeInTheDocument();

    // Verify that the other breadcrumbs are rendered
    const otherBreadcrumbs = screen.getAllByText(/path segment/);
    expect(otherBreadcrumbs).toHaveLength(2);
  });
});
