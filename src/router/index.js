import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout'
import store from '@/store'
import router_json from '@/assets/json/dict/router_test.js'
Vue.use(Router)
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: 'dashboard',
    meta: { 
      title: '首页', 
      icon: 'mdi-home-circle', 
      noCache: true, 
      affix: true
    },
    children: [
      {
        path: '/dashboard',
        component: () => import('@/views/dashboard/index')
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    hidden: false,
    redirect: 'noredirect',
    children: [
      {
        path: 'profile',
        component: () => import('@/views/system/user/profile/index'),
        name: '个人中心',
        meta: { title: '个人中心', icon: 'user' }
      }
    ]
  },
  {
    "alwaysShow": true,
    "children": [
      {
        "component": () => import('@/views/system/dict/index'),
        "hidden": false,
        "iframe": false,
        "meta": {
          "icon": "mdi-youtube-gaming",
          "title": "字典管理"
        },
        "name": "字典管理",
        "path": "/system/dict"
      }
    ],
    "meta": {
      "title": "系统管理",
      "icon": "mdi-credit-card-minus"
    },
    component: Layout,
    "icon": "mdi-credit-card-minus",
    "title": "系统管理",
    "name": "系统管理",
    "path": "/system"
  },
  {
    alwaysShow: true,
    children: [
      {
        component: () => import('@/views/system/user/index'),
        hidden: false,
        iframe: false,
        meta: {
          title: "用户管理",
          icon: "mdi-account"
        },
        icon: "mdi-account",
        title: "用户管理",
        name: "用户管理",
        path: "/auth/user"
      },
      {
        component: () => import('@/views/system/role/index'),
        hidden: false,
        iframe: false,
        meta: {
          title: "角色管理",
          icon: "mdi-account-box-multiple-outline"
        },
        icon: "mdi-account-box-multiple-outline",
        title: "角色管理",
        name: "角色管理",
        path: "/system/role"
      },
      {
        component: () => import('@/views/system/menu/index'),
        hidden: false,
        iframe: false,
        meta: {
          title: "菜单管理",
          icon: "mdi-view-list"
        },
        icon: "mdi-view-list",
        title: "菜单管理",
        name: "菜单管理",
        path: "/auth/menu"
      },
      {
        component: () => import('@/views/system/dept/index'),
        hidden: false,
        iframe: false,
        meta: {
          title: "部门管理",
          icon: "mdi-account-tie"
        },
        icon: "mdi-account-tie",
        title: "部门管理",
        name: "部门管理",
        path: "/auth/dept"
      },
      {
        component: () => import('@/views/system/post/index'),
        hidden: false,
        iframe: false,
        meta: {
          title: "岗位管理",
          icon: "mdi-account-box-outline"
        },
        icon: "mdi-account-box-outline",
        title: "岗位管理",
        name: "岗位管理",
        path: "/auth/post"
      }
    ],
    hidden: false,
    iframe: false,
    meta: {
      title: "权限管理",
      icon: "mdi-account-group"
    },
    component: Layout,
    icon: "mdi-account-group",
    title: "权限管理",
    name: "权限管理",
    path: "/auth"
  },
  
  {
    path: '/gen',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/gen/:sourceId(\\w+)/:tableName(\\w+)',
        component: () => import('@/views/tool/gen/eidt'),
        name: '修改代码生成',
        meta: { title: '修改代码生成', icon: '' }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login'),
    hidden: true
  }
]

const createRouter = () => new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
// router.beforeEach(async(to, from, next) => {
//           const accessRoutes = await store.dispatch('permission/generateRoutes', router_json)
//           console.log(accessRoutes);
//           // 动态添加菜单
//           router.addRoutes(accessRoutes)
//           next()
// })


// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
