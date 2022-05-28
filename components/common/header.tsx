import { Button } from "@mui/material";
import {useUserContext} from "../../contexts/user";
import {useRouter} from "next/router";
import Link from "next/link";

const Header = () => {
    const router = useRouter()
    const user: any = useUserContext()

    return (
        <header className="header">
            <div className="main-container py-2 d-flex justify-content-between align-items-center">
                <Link href="/">
                    <h4 role="button">AMAG Assignment</h4>
                </Link>
                <div>
                    <span className="mx-2">{user?.name}</span>
                    <Button variant="outlined"  color="error" size="small" onClick={ async () => {
                        localStorage.removeItem('token')
                        if(router) {
                            await router.push('/login')
                        } else {
                            window.location.href = '/login'
                        }
                    }}>Logout</Button>
                </div>
            </div>
        </header>
    )
}
export default Header