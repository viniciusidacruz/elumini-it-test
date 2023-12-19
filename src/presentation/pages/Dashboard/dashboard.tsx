import { LogOut } from 'lucide-react';

import sourceImageNotFound from '../../assets/images/not-found.png';
import { Button } from '../../components';
import styles from './dashboard.module.scss';
import { IDashboard } from './dashboard.types';

/**
 * @description Componente final da página de dashboard
 *
 * @param user propriedade para listar dados do usuário logado
 * @param logout propriedade função de deslogar o usuário do sistema
 * @param hasImageProfile propriedade que verifica se ele tem imagem de perfil ou não
 */

export const Dashboard = ({ user, logout, hasImageProfile }: IDashboard) => (
  <main className={styles.wrapper}>
    <section>
      <header className={styles.header}>
        <div>
          <img
            src={hasImageProfile ? user?.image : sourceImageNotFound}
            alt="Foto do perfil do usuário"
          />
        </div>

        <h1>{user?.username}</h1>

        <p>{user?.email}</p>
      </header>

      <div className={styles.table}>
        <div>
          <span className={styles.highlight}>Primeiro nome</span>
          <span>{user?.firstName}</span>
        </div>
        <div>
          <span className={styles.highlight}>Sobrenome</span>
          <span>{user?.lastName}</span>
        </div>
        <div>
          <span className={styles.highlight}>Genero</span>
          <span>{user?.gender}</span>
        </div>
      </div>

      <Button
        type="button"
        onClick={logout}
        aria-label="Botão de encerrar a sessão logada no sistema"
      >
        Sair
        <LogOut />
      </Button>
    </section>
  </main>
);
