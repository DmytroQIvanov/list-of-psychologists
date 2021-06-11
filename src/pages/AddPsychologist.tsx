import { IonContent, IonHeader, IonPage, 
    IonTitle, IonToolbar, IonButton,
    IonList, IonItem, IonLabel,IonProgressBar,
    IonItemDivider,IonInput,IonSelect,IonSelectOption,IonChip} from '@ionic/react';
import { useState } from 'react';
import NavPanel from '../components/NavPanel';
import { Ipsychologist } from '../interfaces/Ipsychologist';
import { useAppDispatch } from '../redux/store';
import { addUsers } from '../redux/users';
import { firestore } from '../service/firebase';
import { fetchData } from '../service/firebaseFunction';
import { addElem } from './AddPsychologistLogic';



const AddPsychologist = () => {
  const [email,setEmail] =useState('');
  const [name,setName] =useState('');
  const [type, setType] = useState<string>('');
  const [errorMessage,setErrorMessage] = useState('')
  const [message,setMessage] = useState('')

  const dispatch = useAppDispatch();
      
     

    return (
      <IonPage>
        <NavPanel/>

        {/* ///Error panel/// */}
        {errorMessage&&
        <IonChip>
          <IonLabel color="danger">{errorMessage}</IonLabel>
        </IonChip>
        }

        {/* ///Message panel/// */}
        {message&&
        <IonChip>
          <IonLabel color="success">{message}</IonLabel>
        </IonChip>
        }

        {/* ///Email input block/// */}
        <IonContent>
        <div>
        <IonItemDivider>Емейл</IonItemDivider>
          <IonItem>
            <IonInput value={email} placeholder="jsmith@example.com" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
          </IonItem>
        </div>


        {/* ///Name input block// */}
        <div>
        <IonItemDivider>Имя</IonItemDivider>
          <IonItem>
            <IonInput value={name} placeholder="Дмитрий Иванов" onIonChange={e => setName(e.detail.value!)}></IonInput>
          </IonItem>
        </div>


        {/* ///Specialty input block/// */}
        <IonItem>
            <IonLabel>Специальность</IonLabel>
            <IonSelect value={type} placeholder="Выберите специальность" onIonChange={e => setType(e.detail.value)}>
              <IonSelectOption value="Психолог">Психолог</IonSelectOption>
              <IonSelectOption value="Психотерапевт">Психотерапевт</IonSelectOption>
              <IonSelectOption value="Психиатр">Психиатр</IonSelectOption>
            </IonSelect>
          </IonItem>

        {/* ///Register button/// */}
        <IonButton color="success" onClick={()=>{
          addElem({
            email,photo:'null',
            type,name,favourite:false,
            disfavourite:false,id:'null'},setErrorMessage,setMessage).then(()=>{
              fetchData().then(elem=>dispatch({type:addUsers,payload:elem}))})

            
          }}>Отправить</IonButton>
        </IonContent>
      </IonPage>
    );
  };
  
  export default AddPsychologist;
  