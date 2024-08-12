import {
  ExtendedPanelProps,
  OverlayElementProps,
  PanelAnimationDuration,
  PanelPosition,
  PanelProps,
  PanelSize,
} from './panel.type';
import { overlay, panelElement, clickOutside as clickOutsideClass, closeButton } from './panel.css';
import { getPanelHiddenVariants, getPanelVisibleVariants } from './get-panel-variants';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { isEscape } from '@djeka07/utils';
import { Icon } from '../../atoms';

const PANEL_ANIMATION_DURATION: { [key: string]: PanelAnimationDuration } = {
  DEFAULT: { overlay: { in: 0.1, out: 0.1 }, panel: { in: 0.2, out: 0.15 } },
};

const Panel = ({
  afterPanelClosed,
  children,
  removePanelFromContext,
  zIndex,
  initialFocusOnElement,
  lastInStack,
  overlayElementProps = { shouldCloseOnClick: true },
  panelElementProps = {
    panelPosition: PanelPosition.Right,
    maxWidth: PanelSize.Medium,
    showCloseButton: false,
    closeOnEscape: true,
  },
}: ExtendedPanelProps): JSX.Element => {
  const animationDuration = PANEL_ANIMATION_DURATION.DEFAULT;
  const [isActive, setIsActive] = useState<boolean>(true);
  const [contentRef, setContentRef] = useState<HTMLElement | null>(null);

  // eslint-disable-next-line solid/reactivity
  const { shouldCloseOnClick } = overlayElementProps as OverlayElementProps;
  let controller: AbortController;

  const closePanel = () => {
    setIsActive(false);
  };

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.removeProperty('overflow');
    }
  }, [isActive]);

  const onClickOutside = (e: Event & { target: EventTarget | null }) => {
    if (!contentRef?.contains(e.target as Node) && lastInStack) {
      setIsActive(false);
      controller.abort();
    }
  };

  const onKeyDown = (event: KeyboardEvent) => {
    if (isEscape(event) && lastInStack) {
      setIsActive(false);
      controller.abort();
    }
  };

  useEffect(() => {
    controller = new AbortController();
    if (shouldCloseOnClick) {
      document.addEventListener('click', onClickOutside, { signal: controller.signal });
    }
    if (panelElementProps?.closeOnEscape) {
      document.addEventListener('keydown', onKeyDown, { signal: controller.signal });
    }
    return () => {
      if (shouldCloseOnClick) {
        document.removeEventListener('click', onClickOutside);
      }
      if (panelElementProps?.closeOnEscape) {
        document.removeEventListener('keydown', onKeyDown);
      }
    };
  });

  const onExit = () => {
    if (!isActive) {
      afterPanelClosed();
      removePanelFromContext();
    }
  };

  return (
    <AnimatePresence onExitComplete={onExit}>
      {isActive && (
        <motion.div
          style={{ zIndex: zIndex || 50 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: animationDuration.overlay.out, delay: 0.2 } }}
          transition={{ duration: animationDuration.overlay.in }}
          className={overlay({ panelPosition: panelElementProps?.panelPosition })}
        >
          <motion.div
            role="dialog"
            aria-labelledby="panel"
            aria-modal="true"
            style={{ maxWidth: panelElementProps?.maxWidth || undefined }}
            className={panelElement({
              width: panelElementProps?.panelPosition,
              height: panelElementProps?.panelPosition,
            })}
            initial={getPanelHiddenVariants({
              panelPosition: panelElementProps?.panelPosition,
              animationDuration,
            })}
            animate={getPanelVisibleVariants({
              panelPosition: panelElementProps?.panelPosition,
              animationDuration,
            })}
            exit={getPanelHiddenVariants({
              panelPosition: panelElementProps?.panelPosition,
              animationDuration,
            })}
            ref={setContentRef}
          >
            <div className={clickOutsideClass}>
              {typeof children === 'function' ? children({ closePanel }) : children}
              {panelElementProps?.showCloseButton && (
                <button className={closeButton} onClick={closePanel}>
                  <Icon name="Close" />
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Panel;
