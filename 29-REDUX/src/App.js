import React from "react";
import './App.css'
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction } from "./store/customerReducer";
import { removeCustomerAction } from "./store/customerReducer";

const App = () => {

    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash.cash)
    const customers = useSelector(state => state.customers.customers)
    
    const addCash = (cash) => {
        dispatch({type:'ADD_CASH', payload: cash})
    }

    const getCash = (cash) => {
        dispatch({type:'GET_CASH', payload: cash})
    }

    const addCustomer = (name) => {
        const customer = {
            name,
            id:Date.now(),
        }
        dispatch(addCustomerAction(customer))
    }

    const removeCustomer = (customer) => {
        dispatch(removeCustomerAction(customer.id))
    }

    return(
        <div className="App">
            <div style={{display: "flex"}}>
                <button onClick={() => addCash(Number(prompt()))}>Пополнить счёт</button>
                <div style={{fontSize:"3em"}}>{cash}</div>
                <button onClick={() => getCash(Number(prompt()))}>Снять со счёта</button>
                <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
                <button>Удалить клиента</button>
            
        </div>
        {customers.length > 0 ? 
            <div>
                {customers.map(customer => 
                    <div 
                    style={{
                        fontSize:"2em",
                        marginTop:"10px",
                        margin:"20px",
                        border:"2px solid white", 
                        padding:"10px", 
                        display:"inline-block",
                        borderRadius:"20px",
                        flexDirection:"column",
                    }} onClick={() => removeCustomer(customer)}>
                        {customer.name}
                    </div>
                )}
            </div>
            :
            <div style={{fontSize:"2rem", marginTop:"20"}}>
                Клиенты отсутствуют!
            </div>
        }

    </div>
    )
}

export default App;