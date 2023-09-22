// @ts-ignore
/* eslint-disable */
import { request } from 'umi';
import { ResponseCommon } from '@/utils/common';
// 获取列表
export async function findList(data: any) {
    return request<ResponseCommon>('/api/find-list', {
      method: 'POST',
      data,
    });
  }
  // 获取学校
export async function findSchoolList(data: any) {
    return request<ResponseCommon>('/api/find-schools', {
        method: 'POST',
      data,
    });
  }
  