import { EuiHeader, EuiHeaderLogo, EuiShowFor, useGeneratedHtmlId } from '@elastic/eui'
import ThemeSwitcher from './ThemeSwitcher'
import { HeaderAppMenu } from './AppMenu'
import { HeaderUserMenu } from './UserMenu'
import { HeaderUpdates } from './Updates'
import Search from './Search'

export default function MainHeader() {
  return (
    <>
      <EuiHeader
        theme='dark'
        position='fixed'
        sections={[
          {
            items: [
              <EuiHeaderLogo iconType='logoElastic' href='/'>
                Elastic
              </EuiHeaderLogo>
            ]
          },
          {
            items: [<EuiShowFor sizes={['m', 'l', 'xl']}>{<Search />}</EuiShowFor>]
          },
          {
            items: [
              <ThemeSwitcher key={useGeneratedHtmlId()} />,
              <EuiShowFor sizes={['xs', 's']}>{<Search />}</EuiShowFor>,
              <HeaderUpdates />,
              <HeaderUserMenu />,
              <HeaderAppMenu />
            ]
          }
        ]}
      />
    </>
  )
}
