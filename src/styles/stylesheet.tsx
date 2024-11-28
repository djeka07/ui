import { isEmpty, unique } from '@djeka07/utils';
import { Variant } from '../components/atoms/typographies/typography.props';
import media, { Media } from './media.css';
import Theme from './theme';
import { FontSize, Tag } from './typography';

const createMediaQueryFromInput = (input: Variant, hej: string): string => {
  return `
    --${input}-font-size: ${hej};
  `;
};

const createMediaQueryFromInputs = (inputs: Variant[], hej: string): string => {
  return `
    ${inputs.map((input) => createMediaQueryFromInput(input, hej)).join('')}
  `;
};

const createMediaQueryFromTags = (mediaQuery: keyof FontSize, tags: (Tag & { fontSize: FontSize })[]): string => {
  return `
    ${media.base} ${(media[mediaQuery] as Media)?.up.query} {
    :root {
      ${tags
        .map((tag) =>
          Array.isArray(tag.input)
            ? createMediaQueryFromInputs(tag.input, tag.fontSize[mediaQuery] as string)
            : createMediaQueryFromInput(tag.input, tag.fontSize[mediaQuery] as string),
        )
        .join('')}
      }
    }
  `;
};

const createFontSizes = (tags?: Tag[]): string => {
  if (isEmpty(tags)) {
    return '';
  }
  const breakpoints = unique(tags.map((tag) => Object.keys(tag?.fontSize || {})).flat(1));
  return breakpoints
    ?.map((breakpoint) => {
      const tagsWithBreakpoint = tags?.filter(
        (t): t is Tag & { fontSize: FontSize } => !!t.fontSize?.[breakpoint as keyof FontSize],
      );
      return createMediaQueryFromTags(breakpoint as keyof FontSize, tagsWithBreakpoint);
    })
    .join('');
};

export type Variables = { [key: string]: string };

export default (theme: Theme, extraVars?: Variables) => {
  const vars = extraVars
    ? Object.keys(extraVars).reduce((amt, curr) => {
        return `${amt}\n${curr}: ${extraVars[curr]};`;
      }, '')
    : null;

  return (
    <style>
      {`
  :root {
    --white-common-color: ${theme.palette.common.white};
    --black-common-color: ${theme.palette.common.black};
    --background-color: ${theme.palette.background};

    --box-shadow: ${theme.palette.boxShadow};

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
    --input-focus-color: ${theme.palette.input.focus};
    --heading-text-color: ${theme.palette.text.heading};
    --body-text-color: ${theme.palette.text.body};
    --success-text-color: ${theme.palette.text.success};
    --error-text-color: ${theme.palette.text.error};
    --info-text-color: ${theme.palette.text.info};
    --warning-text-color: ${theme.palette.text.warning};
    --link-text-color: ${theme.palette.text.link};

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

    --base-font-family: ${theme.typography.family.body.family};
    --base-font-weight: ${theme.typography.family.body.weight};
    --heading-font-family: ${theme.typography.family.heading.family};
    --heading-font-weight: ${theme.typography.family.heading.weight};
    ${vars}
  }

  ${createFontSizes(theme.typography.tagSizes)}

  html {
      background-color: var(--background-color);
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

      h1,h2,h3,h4,h5,h6 {
        font-family: var(--heading-font-family);
        font-weight: var(--heading-font-weight);
        color: var(--heading-text-color);
        margin-block-start: 0px;
        margin-block-end: 0px;
        margin: 0px;
      }

      h1 {
        font-size: var(--h1-font-size, 2rem);
      }

      h2 {
        font-size: var(--h2-font-size, 1.5rem);
      }

      h3 {
        font-size: var(--h3-font-size, 1.17rem);
      }

      h4 {
        font-size: var(--h4-font-size, 1rem);
      }

      h5 {
        font-size: var(--h5-font-size, 0.83rem);
      }
        
      h6 {
        font-size: var(--h6-font-size, 0.67rem);
      }

      body {
        font-family: var(--base-font-family);
        font-weight: var(--base-font-weight);
        font-size: ${theme.typography.size.normal};
        color: var(--body-text-color);
        width: 100%;
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        overflow: auto;
        padding: 0px;
        margin: 0px;
      }
      
      a {
        color: var(--link-text-color);
      }

      p {
          margin-block-start: 0px;
          margin-block-end: 0px;
      }
      ${theme.typography.fontFace.map(
        (fontFace) => `
          @font-face {
            font-family: ${fontFace.family};
            src: ${fontFace.src.map((src) => `url(${src.url}) ${src.format ? `format(${src.format})` : ''}`).join(', ')};
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
