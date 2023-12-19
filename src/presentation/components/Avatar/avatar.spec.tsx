import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { Avatar } from '.';
import { IAvatar } from './avatar.types';

const sut = ({ email = '', imageProfile = '', name = '' }: IAvatar) => (
  <Avatar email={email} imageProfile={imageProfile} name={name} />
);

describe('Avatar', () => {
  it('should be correct render component', () => {
    const { getByAltText, queryByTestId } = render(sut({}));

    const thumbnailElement = getByAltText('Foto de perfil do usuário');
    const informationElements = queryByTestId('informations');

    expect(thumbnailElement).toBeTruthy();
    expect(informationElements).toBeNull();
  });

  it('should be correct render component with name', () => {
    const { getByText } = render(sut({ name: 'Example name' }));

    const labelName = getByText(/example na.../i);

    expect(labelName).toBeTruthy();
  });

  it('should be correct render component with email', () => {
    const { getByText } = render(sut({ email: 'example_full@example.com' }));

    const labelEmail = getByText(/example_full@ex.../i);

    expect(labelEmail).toBeTruthy();
  });

  it('should be correct render component with default image', () => {
    const { getByAltText } = render(sut({}));

    const thumbnailElement = getByAltText('Foto de perfil do usuário');

    expect(thumbnailElement).toHaveAttribute('src', 'test-file-stub');
  });

  it('should be correct render image with params imageProfile', () => {
    const { getByAltText } = render(sut({ imageProfile: 'example.png' }));

    const thumbnailElement = getByAltText('Foto de perfil do usuário');

    expect(thumbnailElement).toHaveAttribute('src', 'example.png');
  });
});
