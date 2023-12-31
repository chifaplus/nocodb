<script lang="ts" setup>
import { onKeyStroke } from '#imports'

const props = defineProps<{
  visible: boolean
  entityName: string
  onDelete: () => Promise<void>
}>()

const emits = defineEmits(['update:visible'])
const visible = useVModel(props, 'visible', emits)

const isLoading = ref(false)

const onDelete = async () => {
  isLoading.value = true
  try {
    await props.onDelete()

    visible.value = false
  } catch (e: any) {
    console.error(e)
    message.error(await extractSdkResponseErrorMsg(e))
  } finally {
    isLoading.value = false
  }
}

onKeyStroke('Escape', () => {
  if (visible.value) visible.value = false
})

onKeyStroke('Enter', () => {
  if (isLoading.value) return

  if (!visible.value) return

  onDelete()
})
</script>

<template>
  <GeneralModal v-model:visible="visible" size="small">
    <div class="flex flex-col p-6">
      <div class="flex flex-row pb-2 mb-4 font-medium text-lg border-b-1 border-gray-50 text-gray-800">
        {{ $t('general.delete') }} {{ props.entityName }}
      </div>

      <div class="mb-3 text-gray-800">
        Are you sure you want to delete the following <span class="-ml-0.3">{{ props.entityName.toLowerCase() }}?</span>
      </div>

      <slot name="entity-preview"></slot>

      <div v-if="false" class="flex flex-row items-center py-2 px-3 border-1 border-gray-100 rounded-lg text-gray-700">
        <GeneralIcon icon="warning" class="text-orange-500"></GeneralIcon>
        <div class="pl-2.5 text-gray-500">This action cannot be undone</div>
      </div>

      <div class="flex flex-row gap-x-2 mt-2.5 pt-2.5 justify-end">
        <NcButton type="secondary" @click="visible = false">
          {{ $t('general.cancel') }}
        </NcButton>

        <NcButton key="submit" type="danger" html-type="submit" :loading="isLoading" @click="onDelete">
          {{ `${$t('general.delete')} ${props.entityName}` }}
          <template #loading>
            {{ $t('general.deleting') }}
          </template>
        </NcButton>
      </div>
    </div>
  </GeneralModal>
</template>

<style lang="scss">
.nc-modal-wrapper {
  .ant-modal-content {
    @apply !p-0;
  }
}
</style>
