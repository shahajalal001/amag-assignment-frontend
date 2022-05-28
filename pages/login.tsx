import {Button} from "@mui/material"
import Link from "next/link"
import {Form} from "antd";
import FormInput from "../components/form/formInput";
import {postLogin} from "../helpers/backendHelper";
import {useRouter} from "next/router";
import swalAlert, {swalLoading} from "../components/common/alert";
import swal from 'sweetalert2'

const Login = () => {
    const router = useRouter()
    const handleLogin = async (values: object) => {
        swalLoading()
        const {error, msg, token} = await postLogin(values)
        swal.close()
        if(error === false) {
            localStorage.setItem("token", token)
            await router.push('/')
        } else {
            await swalAlert.error(msg)
        }
    }


    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h3 className="mb-3">Login</h3>
                <Form onFinish={handleLogin}>
                    <FormInput name="email" label="Email" isEmail required/>
                    <FormInput name="password" label="Password" type="password" required/>
                    <div className="d-flex justify-content-between align-items-center">
                        <Button variant="outlined" type="submit">Login</Button>
                        <Link href="/signup">Create acount</Link>
                    </div>
                </Form>
            </div>

        </div>
    )
}

export default Login