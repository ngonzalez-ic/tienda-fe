import React,{Component} from "react"
import ContextApi from './contextApi'

class GlobalState extends Component{
    state ={
        login:localStorage.getItem("login")
    }
    loginUser = token=>{
        this.setState({
            login:true
        })
        localStorage.setItem("login",true);
        localStorage.setItem("token",token)
    }
    logoutUser = ()=>{
        this.setState({
            login:false
        })
        localStorage.removeItem("login")
        localStorage.removeItem("token")
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