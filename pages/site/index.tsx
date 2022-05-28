import UserLayout from "../../layouts/user";
import {MdCancel, MdSave} from "react-icons/md";
import {Button} from "@mui/material";
import Link from "next/link";
import {Form} from "antd";
import FormInput from "../../components/form/formInput";
import {useAction} from "../../helpers/hooks";
import {postSite} from "../../helpers/backendHelper";
import {useRouter} from "next/router";

const Site = () => {
    const router = useRouter()
    const handleSubmit = async (values: any) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        await useAction(postSite, values, () => {
            router.push('/')
        })
    }

    return (
        <div className="card">
            <div className="card-body">
                <Form onFinish={handleSubmit}>
                <div className="mb-3 border-bottom pb-2">
                    <Button type="submit" variant="outlined" style={{marginRight: 12}} startIcon={<MdSave/>}>
                        Save
                    </Button>
                    <Link href="/">
                        <Button variant="outlined" color="error" type="button" endIcon={<MdCancel/>}>
                            Cancel
                        </Button>
                    </Link>
                </div>
                    <FormInput name="name" label="Name" required/>
                    <FormInput name="city" label="City" required/>
                    <FormInput name="description" label="Description" required/>
                    <div className="row">
                        <div className="col-md-6">
                            <FormInput name="lat" label="Lat" type="number" required/>
                        </div>
                        <div className="col-md-6">
                            <FormInput name="lng" label="Lng" type="number" required/>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}
Site.layout = UserLayout
export default Site