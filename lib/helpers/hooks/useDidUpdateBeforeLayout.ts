import React, {useLayoutEffect, useRef} from 'react';

const useIsomorphicLayoutEffect = useLayoutEffect;
  // typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const useDidUpdateBeforeLayout = (fn: React.EffectCallback, deps: React.DependencyList) => {

  const isDidUpdate = useRef(false);

  useIsomorphicLayoutEffect(() => {
    if (isDidUpdate.current) {
      return fn && fn();
    } else {
      isDidUpdate.current = true;
    }
  }, deps);
};

export default useDidUpdateBeforeLayout;