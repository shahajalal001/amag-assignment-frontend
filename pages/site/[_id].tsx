import UserLayout from "../../layouts/user";
import { MdCancel, MdSave } from "react-icons/md";
import { Button } from "@mui/material";
import Link from "next/link";
import { Form } from "antd";
import FormInput from "../../components/form/formInput";
import { useAction } from "../../helpers/hooks";
import { getSite, postSite, putSite } from "../../helpers/backendHelper";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import moment from "moment";

const Site = () => {
    const [form] = Form.useForm()
    const router = useRouter()
    const [logs, setLogs] = useState()

    useEffect(() => {
        if (router.query?._id) {
            getSite({ _id: router.query?._id }).then(({ error, data }) => {
                if (error === false) {
                    form.setFieldsValue({
                        ...data,
                    })
                    setLogs(data.logs)
                }
            })
        }
    }, [router.query?._id])



    const handleSubmit = async (values: any) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        await useAction(putSite, values, () => {
            router.push('/')
        })
    }

    const showAuditLogText = (index: any, log: any) => {
        if (index === 0) {
            return `Created by ${log.user.name} on ${moment(log.updatedAt).format('DD/MM/YYYY, h:mm:ss A')}`
        }
        return `Updated by ${log.user.name} on ${moment(log.updatedAt).format('DD/MM/YYYY, h:mm:ss A')}`
    }

    return (
        <div className="card">
            <div className="card-body">

                <Form form={form} onFinish={handleSubmit}>
                    <div className="mb-3 border-bottom pb-2">
                        <Button  type="submit" variant="outlined" style={{ marginRight: 12 }} startIcon={<MdSave />}>
                            Save
                        </Button>
                        <Link href="/">
                            <Button variant="outlined" color="error" type="button" endIcon={<MdCancel />}>
                                Cancel
                            </Button>
                        </Link>
                    </div>
                    <div className="d-none">
                        <FormInput name="_id" label="id" />
                    </div>
                    <FormInput name="name" label="Name" required shrink />
                    <FormInput name="city" label="City" required shrink />
                    <FormInput name="description" label="Description" required shrink />
                    <div className="row">
                        <div className="col-md-6">
                            <FormInput name="lat" label="Lat" type="number" required shrink />
                        </div>
                        <div className="col-md-6">
                            <FormInput name="lng" label="Lng" type="number" required shrink />
                        </div>
                    </div>
                </Form>
                <div className="card">
                    <div className="card-body" style={{ backgroundColor: 'rgba(0,0,0,.01)' }}>
                        <div className="mb-3 border-bottom pb-2">
                            Audit Log
                        </div>
                        {
                            logs?.map((log: any, index: number) => (
                                <div key={index} style={{fontSize: 13}}>{showAuditLogText(index, log)}</div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
Site.layout = UserLayout
export default Site