import { render, screen } from '@testing-library/react';
import Hotel from './Hotel';

describe('Hotel component', () => {
  const mockHotel = {
    id: 'cxd650nuyo',
    property: {
      propertyId: 'P107801',
      title: 'Courtyard by Marriott Sydney-North Ryde',
      address: ['7-11 Talavera Rd', 'North Ryde'],
      previewImage: {
        url: 'https://unsplash.it/145/125/?random',
        caption: 'Image of Courtyard by Marriott Sydney-North Ryde',
        imageType: 'PRIMARY',
      },
      rating: {
        ratingValue: 4.5,
        ratingType: 'self',
      },
    },
    offer: {
      promotion: {
        title: 'Exclusive Deal',
        type: 'MEMBER',
      },
      name: 'Deluxe Balcony Room',
      displayPrice: {
        amount: 329.0,
        currency: 'AUD',
      },
      savings: {
        amount: 30.0,
        currency: 'AUD',
      },
      cancellationOption: {
        cancellationType: 'NOT_REFUNDABLE',
      },
    },
  };

  test('renders the correct hotel name, address, offername, currency & savings', () => {
    render(<Hotel hotel={mockHotel} />);
    const hotelNameElement = screen.getByText(
      'Courtyard by Marriott Sydney-North Ryde',
      { exact: true }
    );
    expect(hotelNameElement).toBeInTheDocument();

    const addressElement = screen.getByText('7-11 Talavera Rd, North Ryde', {
      exact: true,
    });
    expect(addressElement).toBeInTheDocument();

    const offernameElement = screen.getByText('Deluxe Balcony Room', {
      exact: true,
    });
    expect(offernameElement).toBeInTheDocument();

    const currencyElement = screen.getByText('1 night total (AUD)', {
      exact: true,
    });
    expect(currencyElement).toBeInTheDocument();

    const savingsElement = screen.getByText('Save $30', {
      exact: false,
    });
    expect(savingsElement).toBeInTheDocument();
  });

  test('does not render Free cancellation', () => {
    render(<Hotel hotel={mockHotel} />);
    const freeCancellationElement = screen.queryByText('Free Cancellation', {
      exact: false,
    });
    expect(freeCancellationElement).toBeNull();
  });
});
