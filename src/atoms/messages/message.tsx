import { AnimatePresence, motion } from 'framer-motion';
import { ReactNode, createRef, memo } from 'react';
import { MessageVariants, innerMessage, message } from './message.css';
import Icon, { IconProps } from '../icons/icon';
import { IconNames } from '../icons/svgs';
import { css } from '@djeka07/utils';

type MessageProps = MessageVariants & {
  icon?: IconNames;
  iconSize?: IconProps['size'];
  children: ReactNode | ReactNode[];
  show?: boolean;
  wrapperClass?: string;
  margin?: { bottom?: number; top?: number; left?: number; right?: number };
  className?: string;
};

const InnerMessage = memo(({ wrapperClass, type, children, className, icon, iconSize }: MessageProps) => {
  const ref = createRef<HTMLDivElement>();

  return (
    <div className={css(wrapperClass, message({ type }))}>
      <div className={css(className, innerMessage({ icon: !!icon }))} ref={ref}>
        {icon && <Icon name={icon} size={iconSize} color={type as IconProps['color']} />}
        {children}
      </div>
    </div>
  );
});

const Message = ({
  show = true,
  margin = { bottom: 0, top: 0, left: 0, right: 0 },
  wrapperClass,
  icon,
  className,
  iconSize = 'medium',
  children,
  type,
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
          <InnerMessage iconSize={iconSize} icon={icon} wrapperClass={wrapperClass} className={className} type={type}>
            {children}
          </InnerMessage>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Message;
