<script lang="ts" setup>
import { UITypes, isSystemColumn } from 'nocodb-sdk'
import type { TableType } from 'nocodb-sdk'
import {
  ActiveViewInj,
  ReloadViewDataHookInj,
  computed,
  iconMap,
  inject,
  onClickOutside,
  ref,
  useFieldQuery,
  useSmartsheetStoreOrThrow,
} from '#imports'

const reloadData = inject(ReloadViewDataHookInj)!

const { meta } = useSmartsheetStoreOrThrow()

const activeView = inject(ActiveViewInj, ref())

const { search, loadFieldQuery } = useFieldQuery()

const isDropdownOpen = ref(false)

const isFocused = ref(false)

const searchDropdown = ref(null)

onClickOutside(searchDropdown, () => (isDropdownOpen.value = false))

const columns = computed(() =>
  (meta.value as TableType)?.columns
    ?.filter((column) => !isSystemColumn(column) && column?.uidt !== UITypes.Links)
    ?.map((column) => ({
      value: column.id,
      label: column.title,
      column,
      primaryValue: column.pv,
    })),
)

watch(
  () => activeView.value?.id,
  (n, o) => {
    if (n !== o) {
      loadFieldQuery(activeView.value?.id)
    }
  },
  { immediate: true },
)

function onPressEnter() {
  reloadData.trigger()
}

const displayColumnLabel = computed(() => {
  if (search.value.field) {
    // use search field label if specified
    return columns.value?.find((column) => column.value === search.value.field)?.label
  }
  // use primary value label by default
  return columns.value?.find((column) => column.primaryValue)?.label
})

watch(
  () => search.value.field,
  () => {
    onPressEnter()
  },
)

watchDebounced(
  () => search.value.query,
  () => {
    onPressEnter()
  },
  {
    debounce: 500,
    maxWait: 600,
  },
)
</script>

<template>
  <div
    class="flex flex-row border-1 rounded-lg h-8 ml-1 border-gray-200 overflow-hidden"
    :class="{ 'border-primary': search.query.length !== 0 || isFocused }"
  >
    <div
      ref="searchDropdown"
      class="flex items-center group relative px-2 cursor-pointer border-r-1 border-gray-200 hover:bg-gray-100"
      :class="{ 'bg-gray-50 ': isDropdownOpen }"
      @click="isDropdownOpen = !isDropdownOpen"
    >
      <GeneralIcon icon="search" class="ml-1 mr-2 h-3.5 w-3.5 text-gray-500 group-hover:text-black" />
      <div class="w-16 group-hover:w-12 text-[0.75rem] font-medium text-gray-400 truncate">
        {{ displayColumnLabel }}
      </div>
      <div class="hidden group-hover:block">
        <component :is="iconMap.arrowDown" class="text-gray-400 text-sm" />
      </div>
      <a-select
        v-model:value="search.field"
        :open="isDropdownOpen"
        size="small"
        :dropdown-match-select-width="false"
        dropdown-class-name="!rounded-lg nc-dropdown-toolbar-search-field-option w-48"
        class="py-1 !absolute top-0 left-0 w-full h-full z-10 text-xs opacity-0"
      >
        <a-select-option v-for="op of columns" :key="op.value" :value="op.value">
          <div class="text-[0.75rem] flex items-center -ml-1 gap-2">
            <SmartsheetHeaderIcon class="text-sm" :column="op.column" />
            {{ op.label }}
          </div>
        </a-select-option>
      </a-select>
    </div>

    <a-input
      v-model:value="search.query"
      size="small"
      class="text-xs"
      :style="{
        width: '10rem',
      }"
      :placeholder="$t('general.search')"
      :bordered="false"
      data-testid="search-data-input"
      @press-enter="onPressEnter"
      @focus="isFocused = true"
      @blur="isFocused = false"
    >
    </a-input>
  </div>
</template>

<style lang="scss">
.nc-dropdown-toolbar-search-field-option {
  .ant-select-item-option {
    @apply !py-2 px-4;
  }
}
</style>

<style scoped>
:deep(input::placeholder) {
  @apply !text-gray-400;
  line-height: 0.8rem !important;
  font-size: 0.8rem !important;
}
</style>
