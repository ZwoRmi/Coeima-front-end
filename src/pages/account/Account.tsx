import { useContext } from 'react';
import { Admin } from '../../components/userConnect/admin/Admin';
import { UserHome } from '../../components/userConnect/userHome/UserHome';
import { CardMessage } from '../../components/userConnect/userMessage/message/CardMessage';
import { UserProfil } from '../../components/userConnect/userProfil/UserProfil';
import { AuthContext } from '../../context/AuthContext';
import './Account.css';

export const Account = () => {
  const { connectedUser } = useContext(AuthContext);

  //--contexte pour déterminer si l'utilisateur est authentifié ou non. Il récupère les propriétés onAuthChange et savedToken---//

  //-- pour déterminer si l'utilisateur est authentifié ou non. Il récupère les propriétés onAuthChangeet savedToken---//

  /** --------Si valeur de savedToken ou onAuthChange est modifiée,
   * le useEffect est appelé, ce qui permet d'exécuter la fonction onAuthChange(savedToken)
   * et de mettre à jour l'état de l'application en conséquence-------------*/

  return (
    <>
      <div className='tabset'>
        {/* <!-- Tab 1 --> */}
        <input type='radio' name='tabset' id='tab1' aria-controls='accueil' />
        <label htmlFor='tab1'>Accueil</label>
        {/* <!-- Tab 2 --> */}
        <input
          type='radio'
          name='tabset'
          id='tab2'
          aria-controls='message'
          value='message'
        />
        <label htmlFor='tab2'>Messages</label>
        {/* <!-- Tab 3 --> */}
        <input
          type='radio'
          name='tabset'
          id='tab3'
          aria-controls='profil'
          value='profil'
        />
        <label htmlFor='tab3'>Profil</label>
        {/* <!-- Tab 4 --> */}
        {connectedUser?.role === 'admin' && (
          <>
            {' '}
            <input
              type='radio'
              name='tabset'
              id='tab4'
              aria-controls='admin'
              value='admin'
            />
            <label htmlFor='tab4'>Admin</label>
          </>
        )}

        <div className='tab-panels'>
          <section id='accueil' className='tab-panel'>
            <h2>Accueil</h2>
            <UserHome />
          </section>
          <section id='message' className='tab-panel'>
            <h2>Messages</h2>
            <CardMessage id={''} body={''} url={''} sender={''} receiver={''} />
          </section>
          <section id='profil' className='tab-panel'>
            <h2>Profil</h2>
            <UserProfil />
          </section>
          <section id='admin' className='tab-panel'>
            <h2>Paramètres</h2>
            <Admin />
          </section>
        </div>
      </div>
    </>
  );
};
