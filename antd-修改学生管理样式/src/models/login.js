import { routerRedux, router } from "dva"
export default {
    state: null,
    reducers: {
        setLoginUsers(state, action) {
            return action.payload
        }

    },
    effects: {
        *loginIn({ payload }, { put }) {
            console.log(payload)
            if (payload === "admin") {
                localStorage.setItem("loginId", payload)
                yield put({ type: "setLoginUsers", payload: payload })
                //判断登录者为admin时，路由仓库派发跳转
                yield put(routerRedux.push("/student/"))

            } else {
                return null
            }

        },
        *loginOut(state, { put }) {
            console.log(111)
            localStorage.removeItem("loginId")
            yield put({ type: "setLoginUsers", payload: null })
            //退出登录之后，使用路由仓库，派发跳转
            yield put(routerRedux.push("/login"))
        }
    },

    subscriptions: {
        //每次运行前自动判断登录状态
        isLoginIn({ dispatch }) {
            let loginId = localStorage.getItem("loginId")
            if (loginId) {
                dispatch({ type: "setLoginUsers", payload: loginId })
                dispatch(routerRedux.push("/student/"))
            } else {
                dispatch(routerRedux.push("/login"))
            }
        }
    }
}