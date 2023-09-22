
import React, { useEffect } from 'react';
import { ModalForm, ProFormSelect, ProFormText, ProFormRadio } from '@ant-design/pro-components';
import { Form } from 'antd';
import { UserInfoTableListItem } from '../data';
import { phoneReg, emailReg, nameReg } from '@/utils/reg';

type Iprops = {
    visible: boolean;
    record?: UserInfoTableListItem,
    schoolList: any;
    callBack: (flag: boolean, currentRow?: any) => void
}
const formItemLayout = { labelCol: { xs: { span: 24 }, sm: { span: 6 }, }, wrapperCol: { xs: { span: 24 }, sm: { span: 18 }, }, };

export default (props: Iprops) => {
    const { visible, record, schoolList, callBack } = props;
    const [form] = Form.useForm();

    const { setFieldsValue, resetFields } = form;

    const onFinish = (values: any) => {
        callBack(true, record ? { ...record, ...values } : { ...values, gender: values.gender ? values.gender : 0 })
    }

    useEffect(() => {
        if (visible) {
            setFieldsValue({ ...record })
        }
    }, [visible])

    return (
        <ModalForm
            visible={visible}
            form={form}
            title={record ? "编辑" : "新增"}
            width={600}
            layout="horizontal"
            {...formItemLayout}
            modalProps={{
                onCancel: () => {
                    callBack(false);
                    !record && resetFields();
                },
                destroyOnClose: true,
                maskClosable: false,
            }}
            onFinish={onFinish}
        >
            <ProFormText width="md" name="name" label="姓名" placeholder="请输入" rules={[{ required: true, message: '请输入姓名' }, { pattern: nameReg.reg, message: nameReg.msg }]} />
            <ProFormText width="md" name="mobile" disabled={record ? true : false} label="手机号码" placeholder="请输入" rules={[{ required: true, message: '请输入手机号码' }, { pattern: phoneReg.reg, message: phoneReg.msg }]} />
            <ProFormRadio.Group
                name="gender"
                label="性别"
                fieldProps={{ defaultValue: 0 }}
                options={[{ label: '男', value: 0, }, { label: '女', value: 1, }]}
            />
            <ProFormSelect
                width="md"
                name="schoolId"
                label="学校"
                options={schoolList}
                placeholder="请输入"
                fieldProps={{
                    showSearch: true,
                }}
                rules={[{ required: true, message: '请选择学校' }]}
            />
            <ProFormText width="md" name="email" label="邮箱" placeholder="请输入" rules={[{ pattern: emailReg.reg, message: emailReg.msg }]} />
        </ModalForm>
    );
};
