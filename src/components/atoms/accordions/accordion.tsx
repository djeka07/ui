/* eslint-disable react-hooks/exhaustive-deps */
'use client';
import { css, isEmpty } from '@djeka07/utils';
import { animate, AnimatePresence, AnimationPlaybackControls, m, useMotionValue, useTransform } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { RadiusKeys } from '../../../styles/border';
import { Icon } from '../icons';
import { IconProps } from '../icons/icon.props';
import { Typography } from '../typographies';
import { TypographyProps } from '../typographies/typography.props';
import {
  button,
  content,
  header,
  headTextWrapper,
  item,
  list,
  progress,
  progressBar,
  progressWrapper,
  root,
  text as textClass,
  textRecipe,
  textWrapper,
  Variants,
} from './accordion.css';

type ChildrenProps = {
  index?: number;
};

type AccordionItemProps = {
  title: string;
  text?: string;
};

type AccordionProps = Variants & {
  title?: string;
  titleTag?: TypographyProps['variant'];
  className?: string;
  icon?: 'arrow' | 'lock' | 'none';
  iconSize?: IconProps['size'];
  layout?: 'none' | 'background' | 'border-bottom';
  borderRadius?: RadiusKeys;
  autoChangeMs?: number;
  initial?: number | null;
  items: AccordionItemProps[];
  children?: ((props: ChildrenProps) => ReactNode) | ReactNode;
};

type State = { index: number; item?: AccordionItemProps };

const getInitialItem = (initial: AccordionProps['initial'] | undefined, items: AccordionItemProps[]): State | null => {
  if (isEmpty(items) || initial === null || initial === undefined) {
    return null;
  }
  return items[initial] ? { index: initial, item: items[initial] } : { index: 0, item: items[0] };
};

type AccordionIconProps = Variants & {
  icon?: AccordionProps['icon'];
  size?: IconProps['size'];
  active: boolean;
};

const AccordionIcon = ({ icon, active, size, background }: AccordionIconProps) => {
  if (!icon || icon === 'none') {
    return null;
  }

  if (icon === 'lock') {
    return <Icon className={textRecipe({ background })} size={size} name={active ? 'Unlock' : 'Lock'} />;
  }

  return <Icon className={textRecipe({ background })} size={size} name={active ? 'Up' : 'Down'} />;
};

const Accordion = ({
  title,
  titleTag = 'h3',
  items,
  autoChangeMs = 0,
  icon,
  background,
  layout = 'border-bottom',
  iconSize = 'normal',
  borderRadius = 'small',
  className,
  initial = 0,
  children,
}: AccordionProps) => {
  const shouldAutoChange = !!autoChangeMs;
  const motion = useMotionValue(0);
  const height = useTransform(motion, [0, 100], ['0%', '100%']);
  const [active, setActive] = useState<State | null>(getInitialItem(initial, items));

  useEffect(() => {
    motion.jump(0);
    let timeout: NodeJS.Timeout;
    let controls: AnimationPlaybackControls;
    if (shouldAutoChange && !!active && items?.length > 1) {
      controls = animate(motion, 100, { duration: autoChangeMs / 1000 });
      timeout = setTimeout(() => {
        console.log(active);
        setActive((prev) => {
          if (!prev) {
            return prev;
          }
          return items?.[prev.index + 1]
            ? { index: prev.index + 1, item: items[prev?.index + 1] }
            : { index: 0, item: items?.[0] };
        });
      }, autoChangeMs);
    }
    return () => {
      if (controls) {
        controls.stop();
      }
      clearTimeout(timeout);
    };
  }, [active, shouldAutoChange, items, autoChangeMs]);

  const onClick = (index: number, item: AccordionItemProps) => {
    if (index === active?.index) {
      if (initial) {
        return;
      }
      return setActive(null);
    }

    return setActive({ index, item });
  };

  return (
    <div className={css(root({ background }), className)}>
      <div className={content}>
        {title && (
          <Typography className={textRecipe({ background })} variant={titleTag}>
            {title}
          </Typography>
        )}
        <ul className={list}>
          {items.map(({ title, text }, index) => {
            const isActive = active?.index === index;
            return (
              <li
                className={item({ background, layout, active: isActive, radius: borderRadius })}
                key={`${title}-index`}
              >
                <button className={button({ shouldAutoChange })} onClick={() => onClick(index, { title, text })}>
                  {shouldAutoChange && (
                    <div className={progressWrapper}>
                      <div className={progressBar} />
                      {isActive && <m.div style={{ height }} className={progress} />}
                    </div>
                  )}
                  <div className={headTextWrapper}>
                    <div className={header}>
                      <Typography className={textRecipe({ background })} variant="h4">
                        {title}
                      </Typography>
                      <AccordionIcon background={background} size={iconSize} icon={icon} active={isActive} />
                    </div>
                    <AnimatePresence initial={false}>
                      {text && isActive && (
                        <m.div
                          className={textWrapper}
                          initial={{ opacity: 0, height: '0px', y: 10 }}
                          animate={{ opacity: 1, height: 'auto', y: 0 }}
                          exit={{ opacity: 0, height: '0px' }}
                        >
                          <div
                            className={css(textClass, textRecipe({ background }))}
                            dangerouslySetInnerHTML={{ __html: text }}
                          />
                        </m.div>
                      )}
                    </AnimatePresence>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      {children && <>{typeof children === 'function' ? children({ index: active?.index }) : children}</>}
    </div>
  );
};

export default Accordion;
