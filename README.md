# hyperapp-network

Notifies your app when the network connection goes online or offline.

Inspired by [react-network](https://github.com/ReactTraining/react-network).

## Installation

```
npm install hyperapp-network
# or with yarn
yarn add hyperapp-network
```

## Usage

```js
import { h, app } from 'hyperapp';
import { Network } from 'hyperapp-network';

const state = {
  online: window.navigator.onLine
};

const actions = {
  updateOnline = online => state => ({ online })
};

const view = (state, actions) => (
  <main>
    <Network
      onChange={actions.updateOnline}
      online={state.online}
      render={({ online }) => <div>{online ? 'Online' : 'Offline'}</div>}
    />
  </main>
)

app(state, actions, view, document.body);
```
