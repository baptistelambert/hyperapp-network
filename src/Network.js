import { h } from 'hyperapp';

const Network = ({ render, onChange, online }, children) => {
  const updateOnline = () => {
    onChange(window.navigator.onLine);
  };

  const addNetworkEventListeners = () => {
    window.addEventListener('online', updateOnline);
    window.addEventListener('offline', updateOnline);
  };

  const removeNetworkEventListeners = () => {
    window.removeEventListener('online', updateOnline);
    window.removeEventListener('offline', updateOnline);
  };

  return h(
    'div',
    {
      oncreate: addNetworkEventListeners,
      ondestroy: removeNetworkEventListeners
    },
    render ? render({ online }) : children
  );
};

export default Network;
