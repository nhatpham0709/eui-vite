/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  EuiPageTemplate,
  EuiPageTemplateProps,
  EuiPageHeaderProps,
} from "@elastic/eui";
import { Header } from "./header/Header";

interface DefaultLayoutProps extends EuiPageTemplateProps {
  pageHeader?: EuiPageHeaderProps;
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  const {
    children,
    pageHeader = {
      pageTitle: "Welcome",
    },
    ...rest
  } = props;

  return (
    <div
      css={css`
        min-height: 100%;
        display: flex;
        flex-direction: column;
        height: 100%;
      `}
    >
      <Header />

      <div
        css={css`
          display: flex;
          flex-flow: column nowrap;
          flex-grow: 1;
          z-index: 0;
          position: relative;
        `}
      >
        <EuiPageTemplate
          restrictWidth
          panelled={false}
          bottomBorder={true}
          {...rest}
        >
          <EuiPageTemplate.Header {...pageHeader} />
          <EuiPageTemplate.Section>{children}</EuiPageTemplate.Section>
        </EuiPageTemplate>
      </div>
    </div>
  );
};

export default DefaultLayout;
