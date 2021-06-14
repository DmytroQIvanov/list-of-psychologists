import { IonItem, IonLabel, IonIcon,IonButton } from '@ionic/react';
import {trash,heart} from 'ionicons/icons';
import { Ipsychologist } from '../interfaces/Ipsychologist';
import { useAppDispatch } from '../redux/store';
import {addUsers,} from '../redux/users'
import { delElem, disfavouriteElem, favouriteElem, fetchData } from '../service/firebaseFunction';


const PsychologistElemList = (props:{psyhologist:Ipsychologist,indx:number}) => {
    const {psyhologist,indx} = props;
    const dispatch = useAppDispatch();
  return (
      <>
    {/* ///Information block/// */}
    <>
        <IonItem>
        Имя: {psyhologist.name} <br />
        Фото: {psyhologist.photo}
        </IonItem>
        
        <IonItem>Электронная почта: {psyhologist.email} <br/>
        Специальность: {psyhologist.type}
        </IonItem>
    </>
    {/* ///Block buttons/// */}
    <>

        {/* Add to favourite button */}
        <IonButton color='success' onClick={()=>{
        favouriteElem(psyhologist.id,psyhologist).then(()=>{
            fetchData().then(elem=>dispatch({type:addUsers,payload:elem}))})
        }}>
            {psyhologist.favourite?<>Unfavourite</>:<>Favourite</>} 
            <IonIcon icon={heart}/>
        </IonButton>

        {/* Add to disfavourite button */}
        <IonButton color="warning" onClick={()=>{
        disfavouriteElem(psyhologist.id,psyhologist).then(()=>{
            fetchData().then(elem=>dispatch({type:addUsers,payload:elem}))})
         }}>
        {psyhologist.disfavourite?<>Remove from disfavourite</>:<>Disfavourite</>}
            </IonButton>

            {/* Delete button */}
        <IonButton color="danger" onClick={()=>{
        delElem(psyhologist.id).then(()=>{
        fetchData().then(elem=>dispatch({type:addUsers,payload:elem}))})

        }}>Delete <IonIcon icon={trash}></IonIcon></IonButton>
    </>
    </>

  );
};

export default PsychologistElemList;
