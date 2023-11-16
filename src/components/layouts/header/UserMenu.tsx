import { useNavigate } from '@/router'
import {
  EuiAvatar,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHeaderSectionItemButton,
  EuiLink,
  EuiPopover,
  EuiSpacer,
  EuiText,
  useGeneratedHtmlId
} from '@elastic/eui'
import { useState } from 'react'

export const HeaderUserMenu = () => {
  const headerUserPopoverId = useGeneratedHtmlId({
    prefix: 'headerUserPopover'
  })
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const onMenuButtonClick = () => {
    setIsOpen(!isOpen)
  }
  const closeMenu = () => {
    setIsOpen(false)
  }
  const button = (
    <EuiHeaderSectionItemButton
      aria-controls={headerUserPopoverId}
      aria-expanded={isOpen}
      aria-haspopup='true'
      aria-label='Account menu'
      onClick={onMenuButtonClick}
    >
      <EuiAvatar name='John Username' size='s' />
    </EuiHeaderSectionItemButton>
  )

  const logout = () => {
    navigate('/login')
  }

  return (
    <EuiPopover
      id={headerUserPopoverId}
      button={button}
      isOpen={isOpen}
      anchorPosition='downRight'
      closePopover={closeMenu}
      panelPaddingSize='m'
    >
      <div style={{ width: 300 }}>
        <EuiFlexGroup gutterSize='m' responsive={false}>
          <EuiFlexItem grow={false}>
            <EuiAvatar name='John Username' size='xl' />
          </EuiFlexItem>
          <EuiFlexItem>
            <EuiText>
              <p>John Username</p>
            </EuiText>
            <EuiSpacer size='m' />
            <EuiFlexGroup>
              <EuiFlexItem>
                <EuiFlexGroup justifyContent='spaceBetween'>
                  <EuiFlexItem grow={false}>
                    <EuiLink>Edit profile</EuiLink>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiLink onClick={logout}>Log out</EuiLink>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </EuiFlexItem>
            </EuiFlexGroup>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </EuiPopover>
  )
}
