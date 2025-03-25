import React,{createContext,useState} from "react";


export const AuthContext = createContext();

function AuthProvider ({children}){
    const [loggedUser,setLoggedUser] = useState();

    const savedUser = Json.parse(localStorage.getItem('user'))

    login =(email,password)=>{
        if(email == savedUser.email && savedUser.password){
            setLoggedUser(savedUser.name)
        }
    }
 

logout=() =>{}
return(
    <AuthContext.Provider value={{loggedUser, login}}>
        {children}
    </AuthContext.Provider>
    )
}

export default AuthProvider;