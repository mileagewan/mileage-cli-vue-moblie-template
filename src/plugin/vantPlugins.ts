import { Button } from 'vant'
import { Vue } from 'vue-property-decorator'
import { VueConstructor } from 'vue'

const components :VueConstructor[] = [
  Button
]

for (const v of components) {
  Vue.component(v.name, v)
}
