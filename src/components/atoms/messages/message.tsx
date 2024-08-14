import { css } from '@djeka07/utils';
import { AnimatePresence, motion } from 'framer-motion';
import React, { createRef, memo } from 'react';
import Icon from '../icons/icon';
import { innerMessage, message, icon as iconCss } from './message.css';
import { MessageProps } from './message.props';

const InnerMessage = memo(
  ({
    wrapperClass,
    primary,
    error,
    info,
    margin,
    success,
    warning,
    children,
    className,
    icon,
    iconSize,
  }: MessageProps) => {
    const ref = createRef<HTMLDivElement>();

    return (
      <div className={css(wrapperClass, message({ error, info, success, warning, primary }))}>
        <div className={css(className, innerMessage({ icon: !!icon }))} ref={ref}>
          {icon && <Icon name={icon} className={iconCss({ primary, error, success, warning, info })} size={iconSize} />}
          {children}
        </div>
      </div>
    );
  },
);

const Message = ({
  show = true,
  margin = { bottom: 0, top: 0, left: 0, right: 0 },
  wrapperClass,
  icon,
  className,
  iconSize = 'medium',
  children,
  ...rest
}: MessageProps) => {
  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.div
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
          <InnerMessage iconSize={iconSize} icon={icon} wrapperClass={wrapperClass} className={className} {...rest}>
            {children}
          </InnerMessage>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Message;
