import { IonContent,IonPage, 
    IonList,IonProgressBar,  } from '@ionic/react';

import NavPanel from '../components/NavPanel';
import PsychologistElemList from '../components/PsychologistElemList';
import { Ipsychologist } from '../interfaces/Ipsychologist';

const List = (props:{list:Ipsychologist[]}) => {
    const {list} = props

    return (
      <IonPage>
        <IonContent >
        <NavPanel/> 

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
  