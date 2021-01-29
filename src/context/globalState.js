import React,{Component} from "react"
import ContextApi from './contextApi'

class GlobalState extends Component{
    state ={
        login:localStorage.getItem("login")
    }
    loginUser = (token,user)=>{
        this.setState({
            login:true
        })
        const userWebLogin={'token':token,'user':user}
        localStorage.setItem("login",JSON.stringify(userWebLogin))
    }
    logoutUser = ()=>{
        this.setState({
            login:false
        })
        localStorage.removeItem("login")
    }
    render(){
        return(
            <ContextApi.Provider
                value={{
                    login:this.state.login,
                    loginUser:this.loginUser,
                    logoutUser:this.logoutUser
                }}
            >
                {this.props.children}
            </ContextApi.Provider>
        )
    }
}
export default GlobalState