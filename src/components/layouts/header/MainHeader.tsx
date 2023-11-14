import { useState } from "react";
import {
  EuiBadge,
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSectionItemButton,
  EuiIcon,
  EuiPopover,
  EuiShowFor,
  EuiText,
  EuiSelectableTemplateSitewide,
  EuiSelectableMessage,
  useEuiTheme,
  useGeneratedHtmlId,
} from "@elastic/eui";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
import { HeaderAppMenu } from "./AppMenu";
import { HeaderUserMenu } from "./UserMenu";
import { HeaderUpdates } from "./Updates";

export default function MainHeader() {
  const { euiTheme } = useEuiTheme();
  const guideHeaderDeploymentPopoverId = useGeneratedHtmlId({
    prefix: "guideHeaderDeploymentPopover",
  });

  const [isDeploymentMenuVisible, setIsDeploymentMenuVisible] = useState(false);
  const deploymentMenu = (
    <EuiPopover
      id={guideHeaderDeploymentPopoverId}
      repositionOnScroll
      button={
        <EuiBadge
          color={euiTheme.colors.darkestShade}
          iconType="arrowDown"
          iconSide="right"
          aria-controls={guideHeaderDeploymentPopoverId}
          aria-expanded={isDeploymentMenuVisible}
          aria-haspopup="true"
          onClickAriaLabel="Current deployment: Production logs. Click to open deployment menu."
          onClick={() => setIsDeploymentMenuVisible(!isDeploymentMenuVisible)}
        >
          Production logs
        </EuiBadge>
      }
      isOpen={isDeploymentMenuVisible}
      anchorPosition="downRight"
      closePopover={() => setIsDeploymentMenuVisible(false)}
    >
      <EuiText size="s" color="subdued">
        <p>Deployment menu pattern TBD</p>
      </EuiText>
    </EuiPopover>
  );

  const search = (
    <EuiSelectableTemplateSitewide
      options={[]}
      searchProps={{
        append: "⌘K",
        compressed: true,
      }}
      popoverButton={
        <EuiHeaderSectionItemButton aria-label="Sitewide search">
          <EuiIcon type="search" size="m" />
        </EuiHeaderSectionItemButton>
      }
      popoverButtonBreakpoints={["xs", "s"]}
      popoverProps={{
        repositionOnScroll: true, // Necessary when placing search in a fixed component
      }}
      emptyMessage={
        <EuiSelectableMessage style={{ minHeight: 300 }}>
          <p>
            Please see the component page for{" "}
            <Link to="/forms/selectable">
              <strong>EuiSelectableTemplateSitewide</strong>
            </Link>{" "}
            on how to configure your sitewide search.
          </p>
        </EuiSelectableMessage>
      }
    />
  );
  return (
    <>
      <EuiHeader
        theme="dark"
        position="fixed"
        sections={[
          {
            items: [
              <EuiHeaderLogo iconType="logoElastic" href="">
                Elastic
              </EuiHeaderLogo>,
              deploymentMenu,
            ],
          },
          {
            items: [<EuiShowFor sizes={["m", "l", "xl"]}>{search}</EuiShowFor>],
          },
          {
            items: [
              <ThemeSwitcher key={useGeneratedHtmlId()} />,

              <EuiShowFor sizes={["xs", "s"]}>{search}</EuiShowFor>,
              <HeaderUpdates />,

              <HeaderUserMenu />,
              <HeaderAppMenu />,
            ],
          },
        ]}
      />
    </>
  );
}
