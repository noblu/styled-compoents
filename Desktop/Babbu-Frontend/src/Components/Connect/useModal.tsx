import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState<any>(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,
  }
};

export default useModal;