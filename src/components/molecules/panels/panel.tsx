'use client';
import { isEscape } from '@djeka07/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { JSX, useCallback, useEffect, useRef, useState } from 'react';
import { Icon } from '../../atoms';
import { getPanelHiddenVariants, getPanelVisibleVariants } from './get-panel-variants';
import { clickOutside as clickOutsideClass, closeButton, overlay, panelElement } from './panel.css';
import { ExtendedPanelProps } from './panel.props';
import { OverlayElementProps, PanelAnimationDuration, PanelPosition, PanelSize } from './panel.type';

const PANEL_ANIMATION_DURATION: { [key: string]: PanelAnimationDuration } = {
  DEFAULT: { overlay: { in: 0.1, out: 0.1 }, panel: { in: 0.2, out: 0.15 } },
};

const Panel = ({
  afterPanelClosed,
  children,
  removePanelFromContext,
  zIndex,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  const contentRef = useRef<HTMLDivElement | null>(null);

  const { shouldCloseOnClick } = overlayElementProps as OverlayElementProps;
  const controller = useRef<AbortController>(null);

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

  const onClickOutside = useCallback(
    (e: Event & { target: EventTarget | null }) => {
      if (!contentRef?.current?.contains(e.target as Node) && lastInStack) {
        setIsActive(false);
        controller.current?.abort();
      }
    },
    [lastInStack],
  );

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (isEscape(event) && lastInStack) {
        setIsActive(false);
        controller.current?.abort();
      }
    },
    [lastInStack],
  );

  useEffect(() => {
    controller.current = new AbortController();
    if (shouldCloseOnClick) {
      document.addEventListener('click', onClickOutside, { signal: controller.current.signal });
    }
    if (panelElementProps?.closeOnEscape) {
      document.addEventListener('keydown', onKeyDown, { signal: controller.current.signal });
    }
    return () => {
      if (shouldCloseOnClick) {
        document.removeEventListener('click', onClickOutside);
      }
      if (panelElementProps?.closeOnEscape) {
        document.removeEventListener('keydown', onKeyDown);
      }
    };
  }, [onClickOutside, onKeyDown, panelElementProps?.closeOnEscape, shouldCloseOnClick]);

  const onExit = () => {
    if (!isActive) {
      afterPanelClosed();
      removePanelFromContext();
    }
  };

  const getMaxWidth = (): PanelSize | undefined => {
    return panelElementProps?.panelPosition === PanelPosition.Bottom ||
      panelElementProps?.panelPosition === PanelPosition.Top
      ? undefined
      : panelElementProps.maxWidth;
  };

  const getMaxHeight = (): PanelSize | undefined => {
    return panelElementProps?.panelPosition === PanelPosition.Bottom ||
      panelElementProps?.panelPosition === PanelPosition.Top
      ? panelElementProps.maxWidth
      : undefined;
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
            style={{ maxWidth: getMaxWidth(), maxHeight: getMaxHeight() }}
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
            ref={contentRef}
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
