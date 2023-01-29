import allMenus from './allMenus'
import defaultSeoFields from './defaultSeoFields'
import { ctaFields } from './screens/components'

// Query partial: retrieve default data for all frontend pages.
const defaultPageData = `
  ${allMenus}
  headlessConfig {
    additionalSettings {
      callToAction {
       ${ctaFields}
      }
    }
  }
`

export default defaultPageData
