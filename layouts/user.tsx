import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import PreLoader from "../components/common/preloader";
import {fetchProfile} from "../helpers/backendHelper";
import UserContext from "../contexts/user";
import Header from "../components/common/header";

type Layout = {
    children?: any
}

const UserLayout = ({children}: Layout) => {
    const router = useRouter()
    const [user, setUser] = useState({
        
    })

    useEffect(() => {
       getProfile()
    }, [])

    const getProfile = () => {
        fetchProfile().then(({error, data}) => {
            if (error === false) {
                setUser(data)
            } else {
                router.push('/login')
            }
        })
    }

    if (!user) {
        return <PreLoader/>
    }
    return (
        <UserContext.Provider value={user}>
            <Header/>
            <div className="main-container my-3">
                {children}
            </div>
        </UserContext.Provider>
    )
}
export default UserLayout