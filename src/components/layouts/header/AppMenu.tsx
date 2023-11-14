import { EuiHeaderSectionItemButton, EuiIcon, EuiKeyPadMenu, EuiKeyPadMenuItem, EuiPopover, useGeneratedHtmlId } from "@elastic/eui";
import { useState } from "react";

export const HeaderAppMenu = () => {
    const headerAppPopoverId = useGeneratedHtmlId({ prefix: 'headerAppPopover' });
    const headerAppKeyPadMenuId = useGeneratedHtmlId({
      prefix: 'headerAppKeyPadMenu',
    });
    const [isOpen, setIsOpen] = useState(false);
    const onMenuButtonClick = () => {
      setIsOpen(!isOpen);
    };
    const closeMenu = () => {
      setIsOpen(false);
    };
    const button = (
      <EuiHeaderSectionItemButton
        aria-controls={headerAppKeyPadMenuId}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Apps menu with 1 new app"
        notification="1"
        onClick={onMenuButtonClick}
      >
        <EuiIcon type="apps" size="m" />
      </EuiHeaderSectionItemButton>
    );
    return (
      <EuiPopover
        id={headerAppPopoverId}
        button={button}
        isOpen={isOpen}
        anchorPosition="downRight"
        closePopover={closeMenu}
      >
        <EuiKeyPadMenu id={headerAppKeyPadMenuId} style={{ width: 288 }}>
          <EuiKeyPadMenuItem label="Discover">
            <EuiIcon type="discoverApp" size="l" />
          </EuiKeyPadMenuItem>
          <EuiKeyPadMenuItem label="Dashboard">
            <EuiIcon type="dashboardApp" size="l" />
          </EuiKeyPadMenuItem>
          <EuiKeyPadMenuItem label="Dev Tools">
            <EuiIcon type="devToolsApp" size="l" />
          </EuiKeyPadMenuItem>
          <EuiKeyPadMenuItem label="Machine Learning">
            <EuiIcon type="machineLearningApp" size="l" />
          </EuiKeyPadMenuItem>
          <EuiKeyPadMenuItem label="Graph">
            <EuiIcon type="graphApp" size="l" />
          </EuiKeyPadMenuItem>
          <EuiKeyPadMenuItem label="Visualize">
            <EuiIcon type="visualizeApp" size="l" />
          </EuiKeyPadMenuItem>
          <EuiKeyPadMenuItem label="Timelion" betaBadgeLabel="Beta">
            <EuiIcon type="timelionApp" size="l" />
          </EuiKeyPadMenuItem>
        </EuiKeyPadMenu>
      </EuiPopover>
    );
  };