import fetchStu from "@/Utils/fetchStu"
import { fetchByPage, fetchBySearch } from "../Utils/fetchStu"


export default {
    state: {
        conditions: {
            searchVal: "",
            limit: 10,
            sex: -1,
            page: 1,
            panelNumber: 5
        },
        result: {
            datas: [],
            count: 0
        }
    },
    reducers: {
        setConditions(state, { payload }) {
            return {
                ...state,
                conditions: {
                    ...state.conditions,
                    ...payload
                }
            }

        },
        setResult(state, { payload }) {
            console.log(payload)
            return {
                ...state,
                result: {
                    datas: payload.findByPage,
                    count: payload.cont
                }
            }
        },
        setPage(state, { payload }) {
            console.log(payload)

            return {
                ...state,
                conditions: {
                    ...state.conditions,
                    page: payload
                }
            }
        }
    },
    effects: {
        //获取到信息后使用reducer提交
        *getPageInfo({ payload }, { put, call }) {
            const list = yield call(fetchByPage, payload)

            yield put({ type: "setResult", payload: list })
            console.log("数据获取完成")
        },

        //获取搜索的数据
        *getSearch({ payload }, { put, call }) {
            let list = yield call(fetchBySearch, payload)
            console.log(list.cont)

            yield put({
                type: "setResult",
                payload: {
                    findByPage: list.searchList,
                    cont: list.cont
                }
            })
            console.log("数据获取完成")
        },

        //更改页码,重新获取数据
        *pageChange({ payload }, { put }) {
            yield put({
                type: "setPage",
                payload: payload
            })
            yield put({
                type: "getPageInfo",
                payload: payload
            })
        }
    },
    subscriptions: {
        update({ dispatch }) {

            dispatch({ type: "getPageInfo" })
        }
    }
}
