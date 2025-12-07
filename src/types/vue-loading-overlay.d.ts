import type { ComponentCustomProperties } from 'vue';
import type { PluginApi } from 'vue-loading-overlay';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $loading: PluginApi;
  }
}
