import { useState } from 'react'
import {
  EuiCollapsibleNavGroup,
  EuiPinnableListGroup,
  EuiPinnableListGroupItemProps,
  EuiFlexItem,
  EuiHorizontalRule
} from '@elastic/eui'
import find from 'lodash/find'
import findIndex from 'lodash/findIndex'
import { css } from '@emotion/react'
const TopLinks: EuiPinnableListGroupItemProps[] = [
  {
    label: 'Home',
    iconType: 'home',
    isActive: true,
    'aria-current': true,
    onClick: () => {},
    pinnable: false
  }
]

const KibanaNavLinks: EuiPinnableListGroupItemProps[] = [
  { label: 'Discover' },
  { label: 'Visualize' },
  { label: 'Dashboards' },
  { label: 'Canvas' },
  { label: 'Maps' },
  { label: 'Machine Learning' },
  { label: 'Graph' }
]

const KibanaLinks: EuiPinnableListGroupItemProps[] = KibanaNavLinks.map(link => {
  return {
    ...link,
    onClick: () => {}
  }
})
const LearnLinks: EuiPinnableListGroupItemProps[] = [
  { label: 'Docs', onClick: () => {} },
  { label: 'Blogs', onClick: () => {} },
  { label: 'Webinars', onClick: () => {} },
  { label: 'Elastic.co', href: 'https://elastic.co' }
]

export const DefaultSidebar = () => {
  /**
   * Accordion toggling
   */
  const [openGroups, setOpenGroups] = useState(
    JSON.parse(String(localStorage.getItem('openNavGroups'))) || ['Kibana', 'Learn']
  )
  // Save which groups are open and which are not with state and local store
  const toggleAccordion = (isOpen: boolean, title?: string) => {
    if (!title) return
    const itExists = openGroups.includes(title)
    if (isOpen) {
      if (itExists) return
      openGroups.push(title)
    } else {
      const index = openGroups.indexOf(title)
      if (index > -1) {
        openGroups.splice(index, 1)
      }
    }
    setOpenGroups([...openGroups])
    localStorage.setItem('openNavGroups', JSON.stringify(openGroups))
  }
  /**
   * Pinning
   */
  const [pinnedItems, setPinnedItems] = useState<EuiPinnableListGroupItemProps[]>(
    JSON.parse(String(localStorage.getItem('pinnedItems'))) || []
  )
  const addPin = (item: any) => {
    if (!item || find(pinnedItems, { label: item.label })) {
      return
    }
    item.pinned = true
    const newPinnedItems = pinnedItems ? pinnedItems.concat(item) : [item]
    setPinnedItems(newPinnedItems)
    localStorage.setItem('pinnedItems', JSON.stringify(newPinnedItems))
  }
  const removePin = (item: any) => {
    const pinIndex = findIndex(pinnedItems, { label: item.label })
    if (pinIndex > -1) {
      item.pinned = false
      const newPinnedItems = pinnedItems
      newPinnedItems.splice(pinIndex, 1)
      setPinnedItems([...newPinnedItems])
      localStorage.setItem('pinnedItems', JSON.stringify(newPinnedItems))
    }
  }
  function alterLinksWithCurrentState(
    links: EuiPinnableListGroupItemProps[],
    showPinned = false
  ): EuiPinnableListGroupItemProps[] {
    return links.map(link => {
      const { pinned, ...rest } = link
      return {
        pinned: showPinned ? pinned : false,
        ...rest
      }
    })
  }
  function addLinkNameToPinTitle(listItem: EuiPinnableListGroupItemProps) {
    return `Pin ${listItem.label} to top`
  }
  function addLinkNameToUnpinTitle(listItem: EuiPinnableListGroupItemProps) {
    return `Unpin ${listItem.label}`
  }

  return (
    <>
      {/* Shaded pinned section always with a home item */}
      <EuiFlexItem grow={false} style={{ flexShrink: 0 }}>
        <EuiCollapsibleNavGroup background='light' style={{ maxHeight: '40vh' }}>
          <EuiPinnableListGroup
            aria-label='Pinned links' // A11y : Since this group doesn't have a visible `title` it should be provided an accessible description
            listItems={alterLinksWithCurrentState(TopLinks).concat(alterLinksWithCurrentState(pinnedItems, true))}
            unpinTitle={addLinkNameToUnpinTitle}
            onPinClick={removePin}
            maxWidth='none'
            color='text'
            gutterSize='none'
            size='s'
          />
        </EuiCollapsibleNavGroup>
      </EuiFlexItem>
      <EuiHorizontalRule margin='none' />
      <EuiFlexItem
        // Accessibility - Allows nav items to be seen and interacted with on very small screen sizes
        css={css`
          @media (max-height: 15em) {
            flex: 1 0 auto;
          }
        `}
      >
        <EuiCollapsibleNavGroup
          title={
            <a className='eui-textInheritColor' href='#/navigation/collapsible-nav' onClick={e => e.stopPropagation()}>
              Kibana
            </a>
          }
          buttonElement='div'
          iconType='logoKibana'
          isCollapsible={true}
          initialIsOpen={openGroups.includes('Kibana')}
          onToggle={(isOpen: boolean) => toggleAccordion(isOpen, 'Kibana')}
        >
          <EuiPinnableListGroup
            aria-label='Kibana' // A11y : EuiCollapsibleNavGroup can't correctly pass the `title` as the `aria-label` to the right HTML element, so it must be added manually
            listItems={alterLinksWithCurrentState(KibanaLinks)}
            pinTitle={addLinkNameToPinTitle}
            onPinClick={addPin}
            maxWidth='none'
            color='subdued'
            gutterSize='none'
            size='s'
          />
        </EuiCollapsibleNavGroup>
        <EuiCollapsibleNavGroup
          title={
            <a className='eui-textInheritColor' href='#/navigation/collapsible-nav' onClick={e => e.stopPropagation()}>
              Training
            </a>
          }
          buttonElement='div'
          iconType='training'
          isCollapsible={true}
          initialIsOpen={openGroups.includes('Learn')}
          onToggle={(isOpen: boolean) => toggleAccordion(isOpen, 'Learn')}
        >
          <EuiPinnableListGroup
            aria-label='Learn' // A11y : EuiCollapsibleNavGroup can't correctly pass the `title` as the `aria-label` to the right HTML element, so it must be added manually
            listItems={alterLinksWithCurrentState(LearnLinks)}
            pinTitle={addLinkNameToPinTitle}
            onPinClick={addPin}
            maxWidth='none'
            color='subdued'
            gutterSize='none'
            size='s'
          />
        </EuiCollapsibleNavGroup>
      </EuiFlexItem>
    </>
  )
}
