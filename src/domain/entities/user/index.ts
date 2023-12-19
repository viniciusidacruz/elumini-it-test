import { IUserEntity } from './user.entity.types';

export class UserEntity {
  private _id: number;
  private _image: string;
  private _email: string;
  private _token: string;
  private _gender: string;
  private _username: string;
  private _lastName: string;
  private _firstName: string;

  constructor({ id, image, gender, email, token, firstName, lastName, username }: IUserEntity) {
    this._id = id;
    this._token = token;
    this._image = image;
    this._email = email;
    this._gender = gender;
    this._username = username;
    this._lastName = lastName;
    this._firstName = firstName;
    this.validate();
  }

  get id(): number {
    return this._id;
  }

  get token(): string {
    return this._token;
  }

  get image(): string {
    return this._image;
  }

  get email(): string {
    return this._email;
  }

  get gender(): string {
    return this._gender;
  }

  get username(): string {
    return this._username;
  }

  get lastName(): string {
    return this._lastName;
  }

  get firstName(): string {
    return this._firstName;
  }

  validate(): void {
    if (this._id === 0) {
      throw new Error('Id is required');
    }

    if (this._username.length === 0) {
      throw new Error('Username is required');
    }

    if (this._token.length === 0) {
      throw new Error('Token is required');
    }

    if (this._email.length === 0) {
      throw new Error('Email is required');
    }

    if (this._firstName.length === 0) {
      this._firstName = 'Desconhecido';
    }

    if (this._gender.length === 0) {
      this._gender = 'Outro';
    }

    if (this._lastName.length === 0) {
      this._lastName = 'Desconhecido';
    }
  }
}
