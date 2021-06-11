import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonButton, IonItem } from '@ionic/react';
import NavPanel from '../components/NavPanel';
import { Ipsychologist } from '../interfaces/Ipsychologist';





const Analytics= (props:{list:Ipsychologist[]}) => {
  const {list} = props;
  return (
    <IonPage>
    <NavPanel/>

    {/* Specialty block */}
    <IonContent>
        <strong><IonItem>Всех психологов: {list.length}</IonItem></strong>
       <IonItem>Психиологов: {list.filter((elem)=>(elem.type=='Психолог')).length}</IonItem>
       <IonItem>Психиатров: {list.filter((elem)=>(elem.type=='Психиатр')).length}</IonItem>
       <IonItem>Психотерапевт: {list.filter((elem)=>(elem.type=='Психотерапевт')).length}</IonItem>
      </IonContent>
      <IonContent >
          
    {/* Favourite / Disfavourite */}
       <IonItem>Любимых: {list.filter((elem)=>(elem.favourite)).length}</IonItem>
       <IonItem>Не любимых: {list.filter((elem)=>(elem.disfavourite)).length}</IonItem>
      </IonContent>

      
    </IonPage>
  );
};

export default Analytics;
