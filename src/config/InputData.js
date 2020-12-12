import Axios from 'axios';
import React, { useEffect, useState } from 'react'
const { createContext } = require("react");

export const InputDataContext = createContext()

const InputDataProvider = ({ children }) => {

    const [getData, setGetData] = useState([])

    const getApi = () => {
        Axios.get('http://localhost:3005/pegawai/')
            .then(res => {
                const respon = res.data
                setGetData(respon)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getApi()
    }, [])

    return (
        <InputDataContext.Provider value={[getData, setGetData]}>
            {children}
        </InputDataContext.Provider>
    )
}

export default InputDataProvider