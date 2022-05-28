import {useEffect, useState} from 'react';
import swalAlert, {swalLoading} from "../components/common/alert";
import {notification} from 'antd'
import swal from 'sweetalert2'

export const useFetch = (func: any, query?: any, load = true) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [params, setParams] = useState({
        ...query,
        page: query?.page || 1,
        size: query?.size || 10,
    })
    useEffect(() => {
        if(load) {
            getData(params)
        }
    }, []);

    const getData = (query: any) => {
        setLoading(true)
        setError(false)
        setParams({...params, ...query})
        func({...params, ...query}).then(({error, data, msg}: any) => {
            setLoading(false)
            if(error === false) {
                setData(data)
            } else {
                setError(true)
                setErrorMessage(msg)
            }
        }).catch((e: any) => {
            console.log(e)
        })
    }
    return [data, getData, {query: params, loading, error, errorMessage}];
}

export const useAction = async (func: any, data: any, reload: any) => {
    swalLoading()
    const {error, msg} = await func(data)
    swal.close()
    if(error === false) {
        if(reload) {
            reload()
        }
        await swalAlert.success(msg)
    } else {
        await swalAlert.success(error)
    }
}

export const useActionConfirm = async (func: any, data: any, reload: any, message: string, confirmText: string) => {
    const {isConfirmed} = await swalAlert.confirm(message, confirmText)
    if(isConfirmed) {
        swalLoading()
        const {error, msg} = await func(data)
        swal.close()
        if(error === false) {
            if(reload) {
                reload()
            }
            await swalAlert.success(msg)
        } else {
            await swalAlert.success(error)
        }
    }
}


