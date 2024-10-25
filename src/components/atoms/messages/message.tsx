'use client';
import { css } from '@djeka07/utils';
import { AnimatePresence, m } from 'framer-motion';
import { createRef, memo } from 'react';
import Icon from '../icons/icon';
import { icon as iconCss, innerMessage, message } from './message.css';
import { MessageProps } from './message.props';

const InnerMessage = memo(
  ({
    wrapperClass,
    border,
    primary,
    secondary,
    error,
    info,
    direction,
    success,
    warning,
    children,
    className,
    icon,
    iconSize,
  }: MessageProps) => {
    const ref = createRef<HTMLDivElement>();

    return (
      <div className={css(wrapperClass, message({ error, info, success, secondary, warning, primary, border }))}>
        <div className={css(className, innerMessage({ icon: !!icon, direction }))} ref={ref}>
          {icon && (
            <Icon
              name={icon}
              className={iconCss({ primary, error, secondary, success, warning, info })}
              size={iconSize}
            />
          )}
          {children}
        </div>
      </div>
    );
  },
);

InnerMessage.displayName = 'InnerMessage';

const Message = ({
  show = true,
  margin = { bottom: 0, top: 0, left: 0, right: 0 },
  wrapperClass,
  icon,
  className,
  border = true,
  direction = 'row',
  iconSize = 'medium',
  children,
  ...rest
}: MessageProps) => {
  return (
    <AnimatePresence initial={false}>
      {show && (
        <m.div
          style={{ width: '100%' }}
          initial={{
            opacity: 0,
            height: '0px',
            marginBottom: margin?.bottom ? `0px` : undefined,
            marginTop: margin?.top ? `0px` : undefined,
            marginLeft: margin?.left ? `0px` : undefined,
            marginRight: margin?.right ? `0px` : undefined,
            overflow: 'hidden',
          }}
          animate={{
            opacity: 1,
            height: 'auto',
            marginBottom: margin?.bottom ? `${margin?.bottom}px` : undefined,
            marginTop: margin?.top ? `${margin?.top}px` : undefined,
            marginLeft: margin?.left ? `${margin?.left}px` : undefined,
            marginRight: margin?.right ? `${margin?.right}px` : undefined,
            overflow: 'visible',
          }}
          exit={{
            opacity: 0,
            height: '0px',
            marginBottom: margin?.bottom ? `0px` : undefined,
            marginTop: margin?.top ? `0px` : undefined,
            marginLeft: margin?.left ? `0px` : undefined,
            marginRight: margin?.right ? `0px` : undefined,
            overflow: 'hidden',
          }}
        >
          <InnerMessage
            border={border}
            iconSize={iconSize}
            direction={direction}
            icon={icon}
            wrapperClass={wrapperClass}
            className={className}
            {...rest}
          >
            {children}
          </InnerMessage>
        </m.div>
      )}
    </AnimatePresence>
  );
};

Message.displayName = 'Message';
export default Message;
