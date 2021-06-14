import './NavPanel.css';
import {IonPage,IonProgressBar, IonMenu,IonToolbar,IonTitle,IonContent,IonList ,IonHeader,IonItem,IonRouterOutlet,IonMenuToggle} from '@ionic/react';

interface ContainerProps { }

const NavPanel: React.FC<ContainerProps> = () => {
  return (

    <IonMenu side="start" contentId="main"  className="" >

      <div className="container">
          <IonItem routerLink="/all" className={`link`}>
            <p>Все психологи</p>
          </IonItem>
          <IonItem routerLink="/add" className={`link`}>
            <p>Добавить психолога</p>
          </IonItem>
          <IonItem routerLink="/favourite" className={`link`}>
            <p>Любимые</p>
          </IonItem>
          <IonItem routerLink="/disfavourite" className={`link`}>
            <p>Не Любимые</p>
          </IonItem>
          <IonItem routerLink="/analytics" className={`link`}>
            <p>Аналитика</p>
          </IonItem>
          
    </div>
    </IonMenu>
    



  );
};

export default NavPanel;
