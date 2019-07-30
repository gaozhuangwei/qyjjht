import Loadable from 'react-loadable';
import Loading from '@common/loading';


const Home = Loadable({
    //home--首页
    loader: () => import('./home'),
    loading: Loading,
});

const Brand = Loadable({
    //Brand--品牌中心
    loader: () => import('./brand'),
    loading: Loading,
});

const Contact = Loadable({
    //Contact--联系我们
    loader: () => import('./contact'),
    loading: Loading,
});

const Fjmd = Loadable({
    //Fjmd--附近门店
    loader: () => import('./fjmd'),
    loading: Loading,
});

const Ws = Loadable({
    //ws--产品中心->卧室
    loader: () => import('./Product/ws'),
    loading: Loading,
});

const Lssmg = Loadable({
    //ws--产品中心->绿色睡眠馆
    loader: () => import('./Product/lssmg'),
    loading: Loading,
});

const Kct = Loadable({
    //ws--产品中心->馨动客餐厅
    loader: () => import('./Product/kct'),
    loading: Loading,
});

const Qsn = Loadable({
    //ws--产品中心->梦想世界青少年生活馆
    loader: () => import('./Product/qsn'),
    loading: Loading,
});

const Wy = Loadable({
    //ws--产品中心->卫浴
    loader: () => import('./Product/wy'),
    loading: Loading,
});

const Sf = Loadable({
    //ws--产品中心->书房
    loader: () => import('./Product/sf'),
    loading: Loading,
});

const Ztcg = Loadable({
    //ws--产品中心->整体橱柜
    loader: () => import('./Product/ztcg'),
    loading: Loading,
});

const Xxjj = Loadable({
    //ws--产品中心->休闲家具
    loader: () => import('./Product/xxjj'),
    loading: Loading,
});

const Gcjj = Loadable({
    //ws--产品中心->卧室
    loader: () => import('./Product/gcjj'),
    loading: Loading,
});

const Content_footer = Loadable({
    //Content_footer--公共底部
    loader: () => import('./content_footer'),
    loading: Loading,
});



const Login = Loadable({
    loader: () => import('./login'),
    loading: Loading,
});

const Users = Loadable({
    loader: () => import('./users'),
    loading: Loading,
});


export {
    Home,
    Brand,
    Contact,
    Fjmd,
    Ws,
    Lssmg,
    Kct,
    Qsn,
    Wy,
    Sf,
    Ztcg,
    Xxjj,
    Gcjj,
    Content_footer,
    Login,
    Users
}