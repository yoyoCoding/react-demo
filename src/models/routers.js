// 引入以及路由组件
import Home from '../components/Home'
import News from '../components/News'
import NewsDetail from '../components/NewsDetail'
import Form from '../components/Form'
import User from '../components/Nest_user'
// 引入二级路由组件
import UserMain from '../components/Nest_user/Main'
import UserInfo from '../components/Nest_user/Info'

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/news',
        component: News
    },
    {
        path: '/newsDetail/:id',
        component: NewsDetail
    },
    {
        path: '/form',
        component: Form
    },
    {
        path: '/user',
        component: User,
        routes: [
            {
                path: '/user/',
                component: UserMain,
                exact: true
            },
            {
                path: '/user/main',
                component: UserMain
            },
            {
                path: '/user/info',
                component: UserInfo
            }
        ]
    }
]

export default routes