import {TextField} from "@mui/material"
import {Form} from "antd"

type InputType = {
    name: any,
    label: string,
    type?: string,
    rules?: any
    isEmail?: boolean,
    required?: boolean,
    shrink?: any,
    initialValue?: any
}

const FormInput = ({name, label, type = "text", rules, isEmail, required = false, shrink, initialValue=""} : InputType) => {
    let allRules: any[] = []
    if(isEmail) {
        allRules = [
            {type: 'email', message: 'Please provide valid email.'},
            ...(rules || [])
        ]
    }

    return (
        <Form.Item
            initialValue={initialValue}
            name={name}
            className="mb-4"
            rules={[
                {required, message: 'Please provide a value'},
                ...allRules,
            ]}>
            <TextField
                className="w-100"
                label={label}
                type={type}
                InputLabelProps={{
                    shrink
                }}
            />
        </Form.Item>
    )
}
export default FormInput