//@ts-ignore
import { Effect, Reducer, Subscription } from 'umi';

export interface modelState {
    indexName: string;
}

export interface IndexModalType {
    nameSpace: string;
    state: modelState;
    effects: {
        query: Effect;
    },
    redcuers: {
        save: Reducer<modelState>
    },
    subscriptions: { setup: Subscription };
}

const IndexModel: IndexModalType = {
    nameSpace: 'index',
    state: {
        indexName: ''
    },
    effects: {
        //@ts-ignore
        *updateName({ payload }, { call, put }) {
            yield put({ type: 'saveName', data: payload })
        },
        //@ts-ignore
        *clearName({ payload }, { put }) {
            yield put({ type: 'saveName', data: {} })
        }
    },
    redcuers: {
        //@ts-ignore
        save(state, { data }) {
            return {
                ...state,
                indexName: data,
            }
        }
    }

}

export default IndexModel;