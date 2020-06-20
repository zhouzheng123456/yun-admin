<template>
  <v-select
    v-model="value"
    :items="items"
    v-bind="$attrs"
    item-text="dictLabel"
    item-value="dictValue"
    :label="dictName"
    :menu-props="{ offsetY: true }"
    v-on="$listeners"
  />
</template>

<script>
import { dictDataList, dictType } from '@/api/system/dict'
import dictTypeData from '@/assets/json/dict/dict_status.js'
import dictTypeListPage from '@/assets/json/dict/dictTypeListPage.js'

export default {
  name: 'Dict',
  inheritAttrs: false,
  props: {
    dictValue: {
      type: String,
      default: null
    },
    dictType: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      items: [],
      dictName: null,
      value: null
    }
  },
  watch: {
    dictValue(newVal, oldVal) {
      this.value = newVal
    }
  },
  created() {
    this.value = this.dictValue
    this.getDictDataList()
    this.getDictType()
  },
  methods: {
    getDictDataList() {
      dictDataList({ dictType: this.dictType }).then(res => {
        res = dictTypeListPage
        // this.items = res.data
      })
    },
    getDictType() {
      dictType(this.dictType).then(res => {
        res =  dictTypeData;
        // this.dictName = res.data.dictName
      })
    }
  }
}
</script>

<style scoped>

</style>
