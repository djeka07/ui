import { css } from '@djeka07/utils';
import { JSX } from 'react';
import { Typography } from '../../atoms/typographies';
import { content, root, titleWrapper } from './panel-content.css';
import { PanelContentProps } from './panel-content.props';

const PanelContent = ({
  children,
  background = 'light',
  title: panelTitle,
  radius,
  boxShadow = true,
  centerTitle = false,
  centerContent = false,
  className,
}: PanelContentProps): JSX.Element => {
  return (
    <div
      className={css(
        root({
          background,
          radius,
          boxShadow,
        }),
        className,
      )}
    >
      {!!panelTitle && (
        <div className={titleWrapper({ centerTitle, background })}>
          <Typography variant="h2">{panelTitle}</Typography>
        </div>
      )}
      <div className={content({ centerContent })}>{children}</div>
    </div>
  );
};

export default PanelContent;
