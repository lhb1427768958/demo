export interface UserInfoRequest {
    pageNum?: number;
    pageSize?: number;
    name?: string;
    mobile?: string;
    schoolId?: string;
    startTime?:number;
    endTime?:number;
  }
  
  export interface UserInforUpdate extends UserInfoRequest {
    id?: number;
    gender?: number;
    email?: any;
  }
  
  export interface UserInfoTableListItem extends UserInforUpdate {
    createTime?: string;
  }

  export interface schoolItem {
    id: number;
    schoolName: string;
    schoolId: string;
  }

  export const dataList: UserInfoTableListItem [] = [
    {
        "id": "1",
        "createTime": "2023-09-22 20:00:00",
        "updateTime": "2023-09-22 20:00:00",
        "mobile": "15111111111",
        "name": "诺手",
        "gender": 0,
        "schoolId": "52",
        "email": '15111111111@163.com'
    },
    {
        "id": "2",
        "createTime": "2023-09-21 20:00:00",
        "updateTime": "2023-09-21 20:00:00",
        "mobile": "15122222222",
        "name": "盖伦",
        "gender": 0,
        "schoolId": "53",
        "email": '15122222222@163.com'
    },
    {
        "id": "3",
        "createTime": "2023-09-20 20:00:00",
        "updateTime": "2023-09-20 20:00:00",
        "mobile": "15133333333",
        "name": "皇子",
        "gender": 0,
        "schoolId": "53",
        "email": '15133333333@163.com'
    },
    {
        "id": "4",
        "createTime": "2023-09-20 20:00:00",
        "updateTime": "2023-09-20 20:00:00",
        "mobile": "15144444444",
        "name": "艾克",
        "gender": 0,
        "schoolId": "53",
        "email": '15144444444@163.com'
    },
    {
        "id": "5",
        "createTime": "2023-09-20 20:00:00",
        "updateTime": "2023-09-20 20:00:00",
        "mobile": "15155555555",
        "name": "寒冰",
        "gender": 1,
        "schoolId": "56",
        "email": '15155555555@163.com'
    },
    {
        "id": "6",
        "createTime": "2023-09-19 20:00:00",
        "updateTime": "2023-09-19 20:00:00",
        "mobile": "15166666666",
        "name": "蛮王",
        "gender": 0,
        "schoolId": "56",
        "email": '15166666666@163.com'
    },
    {
        "id": "7",
        "createTime": "2023-09-18 20:00:00",
        "updateTime": "2023-09-18 20:00:00",
        "mobile": "15177777777",
        "name": "卡莎",
        "gender": 1,
        "schoolId": "55",
        "email": '15177777777@163.com'
    },
    {
        "id": "8",
        "createTime": "2023-09-18 20:00:00",
        "updateTime": "2023-09-18 20:00:00",
        "mobile": "15188888888",
        "name": "劫",
        "gender": 0,
        "schoolId": "54",
        "email": '15188888888@163.com'
    },
    {
        "id": "9",
        "createTime": "2023-09-17 20:00:00",
        "updateTime": "2023-09-17 20:00:00",
        "mobile": "15199999999",
        "name": "盲僧",
        "gender": 0,
        "schoolId": "51",
        "email": '15199999999@163.com'
    },
    {
        "id": "10",
        "createTime": "2023-09-16 20:00:00",
        "updateTime": "2023-09-16 20:00:00",
        "mobile": "15100000000",
        "name": "亚索",
        "gender": 0,
        "schoolId": "51",
        "email": '15100000000@163.com'
    },
    {
        "id": "11",
        "createTime": "2023-09-16 20:00:00",
        "updateTime": "2023-09-16 20:00:00",
        "mobile": "15211111111",
        "name": "锐雯",
        "gender": 1,
        "schoolId": "52",
        "email": '15133334444@163.com'
    },
    {
        "id": "12",
        "createTime": "2023-09-16 20:00:00",
        "updateTime": "2023-09-16 20:00:00",
        "mobile": "15222222222",
        "name": "卡特",
        "gender": 1,
        "schoolId": "52",
        "email": '15222222222@163.com'
    },
] 

export const colleageList: schoolItem [] =  [
    {
        "id": "1",
        "schoolName": "艾欧尼亚",
        "schoolId": "51",
    },
    {
        "id": "2",
        "schoolName": "诺克萨斯",
        "schoolId": "52",
    },
    {
        "id": "3",
        "schoolName": "德玛西亚",
        "schoolId": "53",
    },
    {
        "id": "4",
        "schoolName": "影流",
        "schoolId": "54",
    },
    {
        "id": "5",
        "schoolName": "虚空之地",
        "schoolId": "55",
    },
    {
        "id": "6",
        "schoolName": "弗雷尔卓德",
        "schoolId": "56",
    },
    {
        "id": "7",
        "schoolName": "祖安",
        "schoolId": "57",
    },
]