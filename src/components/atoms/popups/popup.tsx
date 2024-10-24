import { AnimatePresence, m, Variant } from 'framer-motion';
import { useRef, useState } from 'react';
import { css } from '@djeka07/utils';
import { root, wrapper } from './popup.css';
import { useClickOutside } from '@djeka07/hooks';

type RenderProps = {
  toggleShow: () => void;
};

type TogglerProps = {
  isVisible: boolean;
  toggleShow: () => void;
};

type PopupVariants = { initial?: Variant; animate?: Variant; exit?: Variant };
type PopupProps = {
  toggler: (props: TogglerProps) => JSX.Element;
  children: (props: RenderProps) => JSX.Element;
  initial?: boolean;
  variants?: PopupVariants;
  className?: string;
  wrapperClassName?: string;
};

type PopupChildrenProps = Pick<PopupProps, 'children' | 'wrapperClassName' | 'variants'> & {
  toggleShow: RenderProps['toggleShow'];
};

const defaultVariants: PopupVariants = { initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 } };

const PopupChildren = ({ children, variants, wrapperClassName, toggleShow }: PopupChildrenProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickOutside(ref, () => {
    toggleShow();
  });

  return (
    <m.div
      ref={ref}
      className={css(wrapper, wrapperClassName)}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children({ toggleShow })}
    </m.div>
  );
};

const Popup = ({
  initial = false,
  toggler,
  children,
  className,
  wrapperClassName,
  variants = defaultVariants,
}: PopupProps) => {
  const [show, setShow] = useState<boolean>(initial);

  const toggleShow = () => setShow((prev) => !prev);

  return (
    <div className={css(root, className)}>
      {toggler({ isVisible: show, toggleShow })}
      <AnimatePresence initial={initial}>
        {show && (
          <PopupChildren toggleShow={toggleShow} variants={variants} wrapperClassName={wrapperClassName}>
            {children}
          </PopupChildren>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Popup;
