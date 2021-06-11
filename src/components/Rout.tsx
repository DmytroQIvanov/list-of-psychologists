import { IonApp, IonButton, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { useEffect, useState } from "react";
import { Provider, useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { Ipsychologist } from "../interfaces/Ipsychologist";
import AddPsychologist from "../pages/AddPsychologist";
import Analytics from "../pages/Analytics";
import List from "../pages/List";
import { RootState } from "../redux";
import { useAppDispatch } from "../redux/store";
import { addUsers } from "../redux/users";
import { fetchData } from "../service/firebaseFunction";



const Rout= (props:any) => {
    const dispatch = useAppDispatch();

    // ***fetching initial data***
    useEffect(()=>{
        fetchData().then(elem=>{
            dispatch(
              {type:addUsers,payload:elem}
              )
            })},[])  
      const data:Ipsychologist[] = useSelector(
        (state:{users:Ipsychologist[]}):Ipsychologist[] => state.users
    );
    
    
  return (

      <IonApp>
    <IonReactRouter>

      <IonRouterOutlet>
          {/* Psychologist adding block */}
        <Route exact path="/add">
          <AddPsychologist />
        </Route>

            {/* Psychologist list */}
        <Route exact path="/all">
          <List list={data} />
        </Route>

            {/* Favourite psychologists */}
        <Route exact path="/favourite">
          <List list={data.filter(elem=>elem.favourite)} />
        </Route>

            {/* Disfavourite psychologists */}
        <Route exact path="/disfavourite">
          <List list={data.filter(elem=>elem.disfavourite)} />
        </Route>

            {/* Analytics block */}
        <Route exact path="/analytics">
          <Analytics list={data} />
        </Route>

            {/* Or redirect to page: 'Psychologist list' */}
          <Redirect to="/all" />
        
      </IonRouterOutlet>
    </IonReactRouter>

  </IonApp>

  )};


export default Rout