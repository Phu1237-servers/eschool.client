import type { App } from 'vue'
import FontAwesomeIcon from '@/plugins/fontawesome'

export default function (app: App) {
  app.component('font-awesome-icon', FontAwesomeIcon)
}
