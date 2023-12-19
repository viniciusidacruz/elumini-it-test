import '@testing-library/jest-dom';

import { act, fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { UserEntity } from '../../../domain/entities/user';
import { IUserEntity } from '../../../domain/entities/user/user.entity.types';
import { Dashboard } from './dashboard';

const mockFn = jest.fn();

const sut = (user: IUserEntity, hasImageProfile: boolean = false) => (
  <BrowserRouter>
    <Dashboard logout={mockFn} user={user} hasImageProfile={hasImageProfile} />
  </BrowserRouter>
);

describe('Dashboard', () => {
  it('should be correct render component', () => {
    const user = new UserEntity({
      id: 1,
      image: '',
      gender: '',
      lastName: '',
      firstName: 'First',
      token: 'exampletoken',
      email: 'example@gmail.com',
      username: 'exampleusername',
    });

    const { getByText } = render(sut(user, false));

    const username = getByText(/exampleusername/i);
    const firstName = getByText(/first/i);
    const lastName = getByText(/desconhecido/i);
    const email = getByText(/example@gmail.com/i);
    const gender = getByText(/outro/i);

    expect(email).toBeTruthy();
    expect(gender).toBeTruthy();
    expect(username).toBeTruthy();
    expect(lastName).toBeTruthy();
    expect(firstName).toBeTruthy();
  });

  it('should be call to logout', () => {
    const user = new UserEntity({
      id: 1,
      image: '',
      gender: '',
      lastName: '',
      firstName: 'First',
      token: 'exampletoken',
      email: 'example@gmail.com',
      username: 'exampleusername',
    });

    const { getByTestId } = render(sut(user, false));

    const signOutElement = getByTestId('button');

    act(() => {
      fireEvent.click(signOutElement);
    });

    expect(mockFn).toHaveBeenCalled();
  });
});
