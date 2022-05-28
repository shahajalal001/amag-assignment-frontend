import {Button} from "@mui/material"
import Link from "next/link"
import {Form} from "antd";
import FormInput from "../components/form/formInput";
import {postLogin, postRegister} from "../helpers/backendHelper";
import {useRouter} from "next/router";
import swalAlert, {swalLoading} from "../components/common/alert";
import swal from 'sweetalert2'

const SignUp = () => {
    const router = useRouter()
    const handleRegister = async (values: object) => {
        swalLoading()
        const {error, msg, token} = await postRegister(values)
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
                <h3 className="mb-3">Signup</h3>
                <Form onFinish={handleRegister}>
                    <FormInput name="name" label="Name" required/>
                    <FormInput name="email" label="Email" isEmail required/>
                    <FormInput name="password" label="Password" type="password" required/>
                    <div className="d-flex justify-content-between align-items-center">
                        <Button variant="outlined" type="submit">Signup</Button>
                        <Link href="/login">Login</Link>
                    </div>
                </Form>
            </div>

        </div>
    )
}

export default SignUp