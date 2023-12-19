import { FieldErrors, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';

import { TData } from './sign-in.utils';

export interface ISignIn {
  isLoading: boolean;
  errors: FieldErrors<TData>;
  register: UseFormRegister<TData>;
  onSubmit: (data: TData) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<TData, undefined>;
}
