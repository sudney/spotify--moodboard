import React from 'react'

import {Route, Redirect} from 'react-router-dom'


export const ProtectedRoute = ({component: Component,isAuth: isauthor ,changeAuth: isauth,componentProps:music_info, moodtheme:theme,...rest}) => {
    return(
        <Route {...rest} 
        render={() => {
            if(isauthor && theme.font != null){
                return <Component spotify={music_info} theme={theme} isauth={isauth} />
            }
            else{
                return <Redirect path to="/"/>
            }   
        }}
        />
    )
}