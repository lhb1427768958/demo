
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { PageContainer, ProTable, ProColumns, ActionType } from '@ant-design/pro-components';
import { Button, App, message, Modal } from 'antd';
import { findSchoolList, findList } from '@/services/data';
import { UserInfoTableListItem, dataList } from './data.d';
import FormModal from './components/FormModal';
import moment from 'moment';

const HomePage: React.FC = () => {

    const actionRef = useRef<ActionType>();
    const [visible, setVisible] = useState<boolean>(false);
    const [record, setRecord] = useState<any>(undefined);
    const [schoolList, setSchoolList] = useState([]);
    const [dataSource, setDataSource] = useState<UserInfoTableListItem[]>(dataList);

    // 获取列表
    const getSchoolList = async () => {
        const res = await findSchoolList({ pageSize: 999 });
        const list = res.data.map((item: any) => (
            {
                key: item.schoolId,
                label: item.schoolName,
                value: item.schoolId,
            }
        ))
        setSchoolList(list)
        return list
    }

    const columns: ProColumns<UserInfoTableListItem>[] = [
        {
            title: '序号',
            dataIndex: 'id',
            align: 'center',
            search: false,
            width: 70,
            render: (r, d, index, { pageInfo: { current, pageSize } }: any) => {
                return `${(current - 1) * pageSize + index + 1}`
            },
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '性别',
            dataIndex: 'gender',
            key: 'gender',
            search: false,
            render: (_, data) => <>{data.gender === 0 ? '男' : '女'}</>
        },
        {
            title: '手机号码',
            dataIndex: 'mobile',
            key: 'mobile',
        },
        {
            title: '毕业院校',
            dataIndex: 'schoolId',
            key: 'schoolId',
            valueType: 'select',
            request: getSchoolList
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
            search: false,
            ellipsis: true,
        },
        {
            title: '更新时间',
            dataIndex: 'updateTime',
            key: 'updateTime',
            valueType: 'dateTimeRange',
            search: { transform: value => ({ startTime: value[0], endTime: value[1] }) },
            render: (_, record) => <>{record.updateTime}</>
        },
        {
            title: '操作',
            valueType: 'option',
            dataIndex: 'id',
            width: 180,
            render: (text, record) => linkAuth(record),
        },
    ];

    // 页面操作
    const clickOperate = useCallback((type: string, text?: number, record?: any) => {
        switch (type) {
            case 'add':
                setVisible(true);
                setRecord(undefined)
                break;
            case 'edit':
                setVisible(true);
                setRecord(record);
                break;
            case 'del':
                delConfirm(text)
                break;
        }
    }, []);

    // 删除
    const delConfirm = (id: number) => {
        Modal.confirm({
            title: '请求删除接口',
            content: '确认要删除该条数据？',
            okText: '确认',
            cancelText: '取消',
            onOk: () => {
                setDataSource([...dataSource.filter(item => item.id !== id)])
                actionRef.current.reloadAndRest();
            }
        });
    };

    const closeModal = () => {
        setVisible(false);
        setRecord(undefined)
    }
    // 弹窗回调
    const modalCallBack = (flag: boolean, currentRow: any) => {
        if (flag) {
            const updateTime: number = moment(new Date().getTime()).format('YYYY-MM-DD hh:mm:ss');
            if (currentRow?.id) { // 编辑
                message.success('请求编辑接口后重新获取列表数据')
                setDataSource([{ ...currentRow, updateTime, }, ...dataSource.filter(item => item.id !== currentRow.id)])
                closeModal()
            } else { // 新增
                if (dataSource.findIndex(item => item.mobile === currentRow.mobile) !== -1) {
                    message.warning('手机号已注册')
                    return
                }
                message.success('请求新增接口后重新获取表格数据')
                setDataSource([{ id: new Date().getTime(), ...currentRow, updateTime, createTime: updateTime, }, ...dataSource])
                closeModal()
            }
            actionRef.current.reloadAndRest();
            return
        }
        closeModal()
    }

    const linkAuth = (record: UserInfoTableListItem) => [
        <Button key="edit" type="link" onClick={() => clickOperate('edit', record.id, record)}>编辑</Button>,
        <Button key="del" type="link" onClick={() => clickOperate('del', record.id, record)}>删除</Button>,
    ];

    const toolBarRender = () => {
        return (
            <Button type="primary" onClick={() => { clickOperate('add') }}>新增</Button>
        )
    }

    const onSelect = useCallback((params: any) => {
        let list: any = dataSource
        if (params?.name) {
            list = list.filter(item => item.name.includes(params?.name))
        }
        if (params?.mobile) {
            list = list.filter(item => item.mobile.includes(params?.mobile))
        }
        if (params?.schoolId) {
            list = list.filter(item => item.schoolId === params.schoolId)
        }
        if (params?.startTime) {
            list = list.filter(item => new Date(item.updateTime).getTime() < new Date(params?.endTime).getTime() && new Date(item.updateTime).getTime() > new Date(params?.startTime).getTime())
        }
        return list
    }, [dataSource])

    return (
        <PageContainer>
            <ProTable<UserInfoTableListItem>
                columns={columns}
                actionRef={actionRef}
                cardBordered
                toolBarRender={toolBarRender}
                // request={findList} 有接口时请求接口
                request={async (params = {}, sort, filter) => {
                    return {
                        data: onSelect(params),
                        success: true
                    }
                }}
                rowKey="id"
                pagination={{
                    defaultPageSize: 10
                }}
                dateFormatter="string"
                headerTitle="用户管理"
            />
            {
                <FormModal
                    visible={visible}
                    record={record}
                    schoolList={schoolList}
                    callBack={modalCallBack}
                />
            }
        </PageContainer>
    );
};

export default HomePage;
