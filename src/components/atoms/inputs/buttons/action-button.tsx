import { css } from '@djeka07/utils';
import Icon from '../../icons/icon';
import { Typography } from '../../typographies';
import { actionButton, root, typography } from './action-button.css';
import Button from './button';
import { ActionButtonProps } from './action-button.props';

const ActionButton = ({
  children,
  className,
  description,
  disabled,
  color = 'transparent',
  iconName,
  isLoading,
  onClick,
}: ActionButtonProps) => (
  <Button
    align="center"
    justify="center"
    wide
    className={css(className, actionButton({ color }))}
    onClick={onClick}
    isLoading={isLoading}
    disabled={disabled}
  >
    <span className={root}>
      {!!iconName && <Icon name={iconName!} color="heading" background="main" padding="medium" radius="round" />}
      <Typography color="heading-dark" weight="bold" as="span">
        {children}
      </Typography>
      {!!description && (
        <Typography color="text-dark" className={typography} fontStyle="italic" size="small" as="span">
          {description}
        </Typography>
      )}
    </span>
  </Button>
);

export default ActionButton;
