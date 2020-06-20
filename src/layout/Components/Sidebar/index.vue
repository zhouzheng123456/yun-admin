<template>
  <div
    class="yun-sidebar bg-img4"
    :class="[collapsed?'ys_collapsed':'ys_expanded',$vuetify.theme.dark?'':navColor.class]"
    :style="[{'max-width': sidebarWidth}]"
    @mouseenter="mouseEnter"
    @mouseleave="mouseLeave"
  >
    <div class="ys--header">
      <img src="../../../assets/img/logo.svg">
      <span v-if="!collapsed">
        哈尔滨残联
      </span>
    </div>
    <div>
      <sidebar-item v-for="(route,index) in menus" :key="index" :item="route" />
    </div>
  </div>
</template>
<script>
import SidebarItem from "./SidebarItem.vue";
import Layout from "@/layout";
import { mapGetters } from "vuex";
export default {
  name: "Sidebar",
  components: {
    SidebarItem
  },
  props: {
    width: {
      type: String,
      default: "250px"
    },
    collapsed: {
      type: Boolean,
      default: true
    },
    test11: {
      type: Boolean,
      default: false
    },
    widthCollapsed: {
      type: String,
      default: "60px"
    },
    theme: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      menus: [
        {
          path: "/",
          component: Layout,
          redirect: "dashboard",
          meta: {
            title: "首页",
            icon: "mdi-home-circle",
            noCache: true,
            affix: true
          },
          children: [
            {
              path: "/dashboard",
              component: () => import("@/views/dashboard/index")
            }
          ]
        },
        {
          path: "/user",
          component: Layout,
          hidden: false,
          redirect: "noredirect",
          children: [
            {
              path: "profile",
              component: () => import("@/views/system/user/profile/index"),
              name: "个人中心",
              meta: { title: "个人中心", icon: "user" }
            }
          ]
        },
        {
          alwaysShow: true,
          children: [
            {
              component: "/system/dict/index",
              hidden: false,
              iframe: false,
              meta: {
                icon: "mdi-youtube-gaming",
                title: "字典管理"
              },
              name: "字典管理",
              path: "/system/dict"
            }
          ],
          meta: {
            title: "系统管理",
            icon: "mdi-credit-card-minus"
          },
          component: Layout,
          icon: "mdi-credit-card-minus",
          title: "系统管理",
          name: "系统管理",
          path: "/system"
        },
        {
          alwaysShow: true,
          children: [
            {
              component: "/system/user/index",
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
              component: "/system/role/index",
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
              component: "/system/menu/index",
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
              component: "/system/dept/index",
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
              component: "/system/post/index",
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
          alwaysShow: true,
          children: [
            {
              component: "/permission/page",
              hidden: true,
              iframe: false,
              meta: {
                title: "数据监控",
                icon: "brightness_auto"
              },
              icon: "brightness_auto",
              title: "数据监控",
              name: "数据监控",
              path: "http://localhost:8011/druid/index.html"
            },
            {
              component: "/permission/page",
              hidden: true,
              iframe: false,
              meta: {
                title: "注册中心",
                icon: "healing"
              },
              icon: "healing",
              title: "注册中心",
              name: "注册中心",
              path: "http://47.52.79.108:8848/nacos/index.html#/login"
            }
          ],
          component: Layout,
          hidden: true,
          iframe: false,
          meta: {
            title: "系统监控",
            icon: "mdi-account-clock"
          },
          name: "系统监控",
          path: "/monitor"
        }
      ]
    };
  },
  computed: {
    sidebarWidth() {
      return this.collapsed ? this.widthCollapsed : this.width;
    },
    ...mapGetters({
      sidebarMini: "app/sidebarMini",
      navColor: "app/navColor",
      // menus: 'permission/routes',
      sidebarDrawer: "app/sidebarDrawer",
      sidebarMobile: "app/sidebarMobile"
    })
  },
  mounted() {
    console.log("=======:");
    // this.
  },
  methods: {
    mouseEnter() {
      this.$emit("sidebarEnter");
    },
    mouseLeave() {
      this.$emit("sidebarLeave");
    }
  }
};
</script>

<style scoped>
</style>
