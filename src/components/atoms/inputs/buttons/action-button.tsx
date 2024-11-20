import { css } from '@djeka07/utils';
import Icon from '../../icons/icon';
import { Typography } from '../../typographies';
import { actionButton, root, typography } from './action-button.css';
import { ActionButtonProps } from './action-button.props';
import Button from './button';

const ActionButton = ({
  label,
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
    label={label}
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
      <Typography variant="h4" className={typography({ variant: 'heading', color })} weight="bold" as="span">
        {children}
      </Typography>
      {!!description && (
        <Typography
          variant="body"
          className={typography({ variant: 'body', color })}
          fontStyle="italic"
          size="small"
          as="span"
        >
          {description}
        </Typography>
      )}
    </span>
  </Button>
);

export default ActionButton;
