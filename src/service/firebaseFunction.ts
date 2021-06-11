import { useAppDispatch } from '../redux/store';
import { Ipsychologist } from './../interfaces/Ipsychologist';
import { firestore } from "./firebase"

//Fetch data from Firebase
export const fetchData=async():Promise<Ipsychologist[]> =>{
    
    const result:any = []
    await firestore.collection('psychologists')
    .get()
    .then(elem=>elem.forEach(doc=>result.push({...doc.data(),...{id:doc.id}})))
    .catch(err=>console.log(err))
    return result
  }

//Change favourite / check disfavourite
  export const favouriteElem=async(id:string,data:Ipsychologist) =>{
    if(!data.favourite && data.disfavourite){
        
    await firestore.collection('psychologists').doc(id).update({disfavourite:!data.disfavourite})
    }
    await firestore.collection('psychologists').doc(id).update({favourite:!data.favourite})

}
//Change disfavourite / check favourite
export const disfavouriteElem=async(id:string,data:Ipsychologist) =>{
    if(data.favourite && !data.disfavourite){
        await firestore.collection('psychologists').doc(id).update({favourite:!data.favourite})
        
        }
        await firestore.collection('psychologists').doc(id).update({disfavourite:!data.disfavourite})

      
}

//Delete psychologyst
export const delElem=async(id:string) =>{
    await firestore.collection('psychologists').doc(id).delete()
      
  }
  
 
