export default [
      {
        "alwaysShow": true,
        "children": [
          {
            "component": "/system/dict/index",
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
        "icon": "mdi-credit-card-minus",
        "title": "系统管理",
        "name": "系统管理",
        "path": "/system"
      },
      {
        "alwaysShow": true,
        "children": [
          {
            "component": "/system/user/index",
            "hidden": false,
            "iframe": false,
            "meta": {
              "title": "用户管理",
              "icon": "mdi-account"
            },
            "icon": "mdi-account",
            "title": "用户管理",
            "name": "用户管理",
            "path": "/auth/user"
          },
          {
            "component": "/system/role/index",
            "hidden": false,
            "iframe": false,
            "meta": {
              "title": "角色管理",
              "icon": "mdi-account-box-multiple-outline"
            },
            "icon": "mdi-account-box-multiple-outline",
            "title": "角色管理",
            "name": "角色管理",
            "path": "/system/role"
          },
          {
            "component": "/system/menu/index",
            "hidden": false,
            "iframe": false,
            "meta": {
              "title": "菜单管理",
              "icon": "mdi-view-list"
            },
            "icon": "mdi-view-list",
            "title": "菜单管理",
            "name": "菜单管理",
            "path": "/auth/menu"
          },
          {
            "component": "/system/dept/index",
            "hidden": false,
            "iframe": false,
            "meta": {
              "title": "部门管理",
              "icon": "mdi-account-tie"
            },
            "icon": "mdi-account-tie",
            "title": "部门管理",
            "name": "部门管理",
            "path": "/auth/dept"
          },
          {
            "component": "/system/post/index",
            "hidden": false,
            "iframe": false,
            "meta": {
              "title": "岗位管理",
              "icon": "mdi-account-box-outline"
            },
            "icon": "mdi-account-box-outline",
            "title": "岗位管理",
            "name": "岗位管理",
            "path": "/auth/post",
          }
        ],
        "component": "Layout",
        "hidden": false,
        "iframe": false,
        "meta": {
          "title": "权限管理",
          "icon": "mdi-account-group"
        },
        "icon": "mdi-account-group",
        "title": "权限管理",
        "name": "权限管理",
        "path": "/auth"
      },
      {
        "alwaysShow": true,
        "children": [
          {
            "component": "/permission/page",
            "hidden": true,
            "iframe": false,
            "meta": {
              "title": "数据监控",
              "icon": "brightness_auto"
            },
            "icon": "brightness_auto",
            "title": "数据监控",
            "name": "数据监控",
            "path": "http://localhost:8011/druid/index.html"
          },
          {
            "component": "/permission/page",
            "hidden": true,
            "iframe": false,
            "meta": {
              "title": "注册中心",
              "icon": "healing"
            },
            "icon": "healing",
            "title": "注册中心",
            "name": "注册中心",
            "path": "http://47.52.79.108:8848/nacos/index.html#/login"
          }
        ],
        "component": "Layout",
        "hidden": true,
        "iframe": false,
        "meta": {
          "title": "系统监控",
          "icon": "mdi-account-clock"
        },
        "name": "系统监控",
        "path": "/monitor"
      },
      {
        "alwaysShow": true,
        "children": [
          {
            "component": "/tool/gen/index",
            "hidden": false,
            "iframe": false,
            "meta": {
              "title": "代码生成",
              "icon": "mdi-vote"
            },
            "icon": "mdi-vote",
            "title": "代码生成",
            "name": "代码生成",
            "path": "/tool/gen"
          },
          {
            "component": "http://106.54.176.188:30341/doc.html",
            "hidden": false,
            "iframe": true,
            "meta": {
              "title": "系统接口",
              "icon": "mdi-view-grid-outline"
            },
            "icon": "mdi-view-grid-outline",
            "title": "系统接口",
            "name": "系统接口",
            "path": "/tool/interface"
          }
        ],
        "component": "Layout",
        "hidden": false,
        "iframe": false,
        "meta": {
          "title": "系统工具",
          "icon": "mdi-toolbox"
        },
        "icon": "mdi-toolbox",
        "title": "系统工具",
        "name": "系统工具",
        "path": "/tool"
      }
    ]

