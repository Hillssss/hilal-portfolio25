'use client';

import { SwitchTransition, Transition } from 'react-transition-group';
import { usePathname } from 'next/navigation';

const TransitionComponent = ({ children }) => {
  const pathname = usePathname();

  console.log('TransitionComponent render:', pathname);

  return (
    <SwitchTransition mode="out-in">
      <Transition
        key={pathname}
        timeout={300}
        onEnter={(node) => {
          node.style.opacity = 0;
          node.style.transition = 'opacity 300ms ease-in-out';
          requestAnimationFrame(() => {
            node.style.opacity = 1;
          });
          console.log('Enter animation on', pathname);
        }}
        onExit={(node) => {
          node.style.opacity = 1;
          node.style.transition = 'opacity 300ms ease-in-out';
          requestAnimationFrame(() => {
            node.style.opacity = 0;
          });
          console.log('Exit animation on', pathname);
        }}
      >
        <div>{children}</div>
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;
