import { ComponentProps } from 'react';

export interface ITextField extends ComponentProps<'input'> {
  label?: string;
  message?: string;
  isPassword?: boolean;
}

export type TTestTextField = Pick<ITextField, 'label' | 'message' | 'isPassword'>;
