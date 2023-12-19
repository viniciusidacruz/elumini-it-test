import sourceImageNotFound from '../../assets/images/not-found.png';
import { limitText } from '../../utils';
import styles from './avatar.module.scss';
import { IAvatar } from './avatar.types';

export function Avatar({
  email = 'viniciusitalodacruz@gmail.com',
  name = 'Vinicius Italo',
  imageProfile = '',
}: IAvatar) {
  const hasName = !!name.length;
  const hasEmail = !!email.length;
  const hasUserInformations = hasEmail || hasName;

  const formattedName = name.length > 10 ? `${limitText(name)}...` : name;
  const formattedEmail = email.length > 15 ? `${limitText(email, 15)}...` : email;

  const hasImageProfile = !!imageProfile.length;

  return (
    <div className={styles.container}>
      {hasUserInformations && (
        <div data-testid="informations" className={styles.informations}>
          {hasName && (
            <span title={name} className={styles.name}>
              {formattedName}
            </span>
          )}

          {hasEmail && (
            <span title={email} className={styles.email}>
              {formattedEmail}
            </span>
          )}
        </div>
      )}

      <div className={styles.thumbnail}>
        <img
          alt="Foto de perfil do usuário"
          title={`Foto de perfil do usuário ${name}`}
          src={hasImageProfile ? imageProfile : sourceImageNotFound}
        />
      </div>
    </div>
  );
}
