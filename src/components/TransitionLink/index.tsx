import React, { useContext } from "react";
import { Link } from "gatsby";
import { AnimationStateContainer } from "../../context/animationContext";

interface TransitionLinkProps {
  to: string;
  children: any;
  className: string;
  activeClassName: string;
  activeStyle: any;
  style: any;
  onClick: any;
}

interface triggerTransitionOptions {
  to: string;
  event: MouseEvent;
  delay: number;
  startLoadingAnimation: () => {};
  navigateTo: (to: string) => {};
}

export function triggerTransition(options: triggerTransitionOptions) {
  const { to, event, delay, startLoadingAnimation, navigateTo } = options;

  event.preventDefault();

  startLoadingAnimation();

  navigateTo(to);
}

export const TransitionLink = (props: TransitionLinkProps) => {
  const {
    style,
    activeStyle,
    className,
    activeClassName,
    children,
    to
  } = props;

  const {
    loadingAnimation,
    startLoadingAnimation,
    endLoadingAnimation,
    navigateTo
  } = useContext(AnimationStateContainer.Context);

  return (
    <Link
      style={style}
      activeStyle={activeStyle}
      className={className}
      activeClassName={activeClassName}
      onClick={event => {
        triggerTransition({
          event,
          to,
          delay: 1000,
          startLoadingAnimation,
          navigateTo
        });
      }}
      to={to} // use gatsby link so prefetching still happens. this is prevent defaulted in triggertransition
    >
      {children}
    </Link>
  );
};
