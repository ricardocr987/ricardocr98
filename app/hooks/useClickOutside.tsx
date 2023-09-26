import React, { useEffect } from 'react';

const useClickOutside = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  handler: () => void
) => {
  useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(e.target as Node)) return;

      handler();
    };
    
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler, ref]);
};

export default useClickOutside;
