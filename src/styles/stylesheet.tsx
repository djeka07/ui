import Theme from './theme';

export default (theme: Theme) => {
  return (
    <style>
      {`
  :root {
    --white-common-color: ${theme.palette.common.white};
    --black-common-color: ${theme.palette.common.black};

    --light-background-color: ${theme.palette.background.light};
    --main-background-color: ${theme.palette.background.main};
    --dark-background-color: ${theme.palette.background.dark};

    --main-box-shadow: ${theme.palette.boxShadow.main};

    --100-grey-color: ${theme.palette.grey[100]};
    --200-grey-color: ${theme.palette.grey[200]};
    --300-grey-color: ${theme.palette.grey[300]};
    --400-grey-color: ${theme.palette.grey[400]};
    --500-grey-color: ${theme.palette.grey[500]};
    --600-grey-color: ${theme.palette.grey[600]};
    --700-grey-color: ${theme.palette.grey[700]};
    --800-grey-color: ${theme.palette.grey[800]};
    --900-grey-color: ${theme.palette.grey[900]};

    --input-bg-color: ${theme.palette.input.background};
    --input-fg-color: ${theme.palette.input.foreground};

    --light-focus-color: ${theme.palette.focus.light};
    --main-focus-color: ${theme.palette.focus.main};
    --dark-focus-color: ${theme.palette.focus.dark};

    --light-heading-color: ${theme.palette.heading.light};
    --main-heading-color: ${theme.palette.heading.main};
    --dark-heading-color: ${theme.palette.heading.dark};

    --light-text-color: ${theme.palette.text.light};
    --main-text-color: ${theme.palette.text.main};
    --dark-text-color: ${theme.palette.text.dark};

    --button-primary-bg-color: ${theme.palette.button.primary.background};
    --button-primary-fg-color: ${theme.palette.button.primary.foreground};
    --button-secondary-bg-color: ${theme.palette.button.secondary.background};
    --button-secondary-fg-color: ${theme.palette.button.secondary.foreground};
    --button-success-bg-color: ${theme.palette.button.success.background};
    --button-success-fg-color: ${theme.palette.button.success.foreground};
    --button-error-bg-color: ${theme.palette.button.error.background};
    --button-error-fg-color: ${theme.palette.button.error.foreground};
    --button-info-bg-color: ${theme.palette.button.info.background};
    --button-info-fg-color: ${theme.palette.button.info.foreground};
    --button-warning-bg-color: ${theme.palette.button.warning.background};
    --button-warning-fg-color: ${theme.palette.button.warning.foreground};
    --button-transparent-fg-color: ${theme.palette.button.transparent.foreground};

    --panel-primary-bg-color: ${theme.palette.panel.primary.background};
    --panel-primary-fg-color: ${theme.palette.panel.primary.foreground};
    --panel-secondary-bg-color: ${theme.palette.panel.secondary.background};
    --panel-secondary-fg-color: ${theme.palette.panel.secondary.foreground};
    --panel-success-bg-color: ${theme.palette.panel.success.background};
    --panel-success-fg-color: ${theme.palette.panel.success.foreground};
    --panel-error-bg-color: ${theme.palette.panel.error.background};
    --panel-error-fg-color: ${theme.palette.panel.error.foreground};
    --panel-info-bg-color: ${theme.palette.panel.info.background};
    --panel-info-fg-color: ${theme.palette.panel.info.foreground};
    --panel-warning-bg-color: ${theme.palette.panel.warning.background};
    --panel-warning-fg-color: ${theme.palette.panel.warning.foreground};

    --light-link-color: ${theme.palette.link.light};
    --main-link-color: ${theme.palette.link.main};
    --dark-link-color: ${theme.palette.link.dark};

    --base-font-family: ${theme.typography.family.body};
    --heading-font-family: ${theme.typography.family.heading};

    --xxsmall-font-size: ${theme.typography.size.xxsmall};
    --xsmall-font-size: ${theme.typography.size.xsmall};
    --small-font-size:${theme.typography.size.small};
    --normal-font-size: ${theme.typography.size.normal};
    --medium-font-size: ${theme.typography.size.medium};
    --large-font-size:${theme.typography.size.large};
    --xlarge-font-size: ${theme.typography.size.xlarge};
    --xxlarge-font-size: ${theme.typography.size.xxlarge};
    --xxxlarge-font-size: ${theme.typography.size.xxxlarge};

    --grid-header-bg-color: ${theme.palette.grid.header.background};
    --grid-header-fg-color: ${theme.palette.grid.header.foreground};

    --grid-border-fg-color: ${theme.palette.grid.border};

    --grid-row-odd-bg-color: ${theme.palette.grid.row.odd.background};
    --grid-row-odd-fg-color: ${theme.palette.grid.row.odd.foreground};

    --grid-row-even-bg-color: ${theme.palette.grid.row.even.background};
    --grid-row-even-fg-color: ${theme.palette.grid.row.even.foreground};

    --grid-main-bg-color: ${theme.palette.grid.main.background};
    --grid-main-fg-color: ${theme.palette.grid.main.foreground};

    --grid-footer-bg-color: ${theme.palette.grid.footer.background};
    --grid-footer-fg-color: ${theme.palette.grid.footer.foreground};
  
    --light-font-weight: ${theme.typography.weight.light};
    --regular-font-weight: ${theme.typography.weight.regular};
    --bold-font-weight: ${theme.typography.weight.bold};

    --small-border-radius: ${theme.border.radius.small};
    --medium-border-radius:  ${theme.border.radius.medium};
    --large-border-radius:  ${theme.border.radius.large};
    --xlarge-border-radius:  ${theme.border.radius.xlarge};
    --xxlarge-border-radius:  ${theme.border.radius.xxlarge};
    --round-border-radius:  ${theme.border.radius.round};
  }

  html {
      background-color: var(--dark-background-color);
      width: 100%;
      height: 100%;
      padding: 0px;
      margin: 0px;
      -webkit-font-smoothing: antialiased;
      text-rendering: optimizeLegibility;
      text-size-adjust: 100%;
    }
  * {
    box-sizing: border-box;
  }

      h1, h2,h3,h4, h5, h6 {
        font-family: ${theme.typography.family.heading};
      }
      body {
        font-family: ${theme.typography.family.body};
        font-weight: ${theme.typography.weight.regular};
        font-size: ${theme.typography.size.normal};
        width: 100%;
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        overflow: auto;
        padding: 0px;
        margin: 0px;
      }
      ${theme.typography.fontFace.map(
        (fontFace) => `
          @font-face {
            font-family: ${fontFace.family};
            src: ${fontFace.src.map((src) => `url(${src.url}) format(${src.format})`).join(', ')};
            font-weight: ${fontFace.weight};
            font-style: ${fontFace.style};
            font-display: ${fontFace.display};
          }  
      `,
      )}
  `}
    </style>
  );
};
