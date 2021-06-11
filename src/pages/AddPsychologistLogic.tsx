import { Ipsychologist } from "../interfaces/Ipsychologist"
import { firestore } from "../service/firebase"


/*Correctness processing and data provision*/
export const addElem=async(data:Ipsychologist,setErrorMessage:Function,setMessage:Function)=>{
    if(!data.email){
      setErrorMessage('Введите емейл')
      return
    }
    if(!data.name){
      setErrorMessage('Введите имя')
      return
    }
    if(!data.type){
      setErrorMessage('Выберите специальность')
      return
    }
    firestore.collection('psychologists').add(data)
    setErrorMessage('')
    setMessage('Добавлено')
  
  }