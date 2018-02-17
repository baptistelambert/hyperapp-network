import { h } from 'hyperapp';

const Network = ({ render, component, onChange, online }, children) => {
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
      onremove: removeNetworkEventListeners
    },
    component
      ? h(component, { online })
      : render ? render({ online }) : children
  );
};

export default Network;
