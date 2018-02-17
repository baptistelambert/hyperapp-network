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

### With a render prop

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

### With component injection

```js
import { h, app } from 'hyperapp';
import { Network } from 'hyperapp-network';

const state = {
  online: window.navigator.onLine
};

const actions = {
  updateOnline = online => state => ({ online })
};

const ConnectedComponent = ({ online }) => (
  <div>{online ? 'Online' : 'Offline'}</div>
)

const view = (state, actions) => (
  <main>
    <Network
      onChange={actions.updateOnline}
      online={state.online}
      component={ConnectedComponent}
    />
  </main>
)

app(state, actions, view, document.body);
```

NB: you should not set both component and render props. If you were to do this, the render prop would be ignored.
