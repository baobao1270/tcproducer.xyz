import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(...$icons)
export default FontAwesomeIcon

export function parseIcon(expr: string): string[] {
  let [kitName, iconName] = expr.split('/')
  return [`fa${kitName[0]}`, `fa-${iconName}`]
}
