import { z } from 'zod';

export const schema = z.object({
  username: z
    .string()
    .min(3, 'Por favor insira um usuário valido')
    .refine((value) => !/\s/.test(value), 'Usuário inválido, remova os espaçamentos!'),

  password: z.string().min(6, 'Precisa no minímo conter 6 digitos'),
});

export type TData = z.infer<typeof schema>;

export const initialValues = {
  username: '',
  password: '',
};
