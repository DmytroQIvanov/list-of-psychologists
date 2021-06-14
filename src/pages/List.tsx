import {IonPage,IonProgressBar, IonMenu,IonToolbar,IonTitle,IonContent,IonList ,IonHeader,IonItem,IonRouterOutlet,IonMenuToggle} from '@ionic/react';

import PsychologistElemList from '../components/PsychologistElemList';
import { Ipsychologist } from '../interfaces/Ipsychologist';

const List = (props:{list:Ipsychologist[]}) => {
    const {list} = props

    return (
      <IonPage>
        <IonContent >

    

        {/* Psychologist list  or ProgressBar*/}
        {list?.length?
        <IonList>
        {list.map((elem,indx)=>(
            <PsychologistElemList key={elem.id} psyhologist={elem} indx={indx}/>
      ))} </IonList>: 
      <IonProgressBar type="indeterminate"></IonProgressBar>}
      
    
      

        </IonContent>
      </IonPage>
    );
  };
  
  export default List;
  