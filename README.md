# Open Source Project Template

[![Release](https://img.shields.io/github/v/release/wayfair-incubator/oss-template?display_name=tag)](CHANGELOG.md)
[![Lint](https://github.com/wayfair-incubator/oss-template/actions/workflows/lint.yml/badge.svg?branch=main)](https://github.com/wayfair-incubator/oss-template/actions/workflows/lint.yml)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg)](CODE_OF_CONDUCT.md)
[![Maintainer](https://img.shields.io/badge/Maintainer-Wayfair-7F187F)](https://wayfair.github.io)

## About The Project

Use this tool to communicate across an iframe using postmessage subscription.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to
install them.

- npm

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/wayfair-incubator/postmessage-communicator.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

## Communicator API

### `subscribeEvent`

| Parameter Name  | Required | Description                                                                 | Type                      | Default |
| --------------- | -------- | --------------------------------------------------------------------------- | ------------------------- | ------- |
| eventType       | yes      | the event type that you want to subscribe to                                | string                    |         |
| messageCallBack | yes      | the callback that you want to execute when the listener receives that event | (e: MessageEvent) => void |         |

### `unsubscribe`

| Parameter Name  | Required | Description                                                                        | Type                      | Default |
| --------------- | -------- | ---------------------------------------------------------------------------------- | ------------------------- | ------- |
| messageCallBack | yes      | the subscription returned by the subscribeEvent method corresponding to this event | (e: MessageEvent) => void |         |

### `post`

| Parameter Name | Required | Description                                            | Type                                 | Default |
| -------------- | -------- | ------------------------------------------------------ | ------------------------------------ | ------- |
| type           | yes      | the name of the event you want to post eg: `addToCart` | string \| VendorEvent \| ClientEvent |         |
| payload        | yes      | the data you want to pass in your post                 | anything but a function              |         |

## Vendor Communicator API

### `addToCart`

### `designerHandOff`

### `requestToken`

### `projectDirty`

### `projectSaved`

### `projectDeleted`

## Client Communicator API

### `init`

### `refreshToken`

## Roadmap

See the
[open issues](https://github.com/wayfair-incubator/postmessage-communicator/issues)
for a list of proposed features (and known issues).

## Contributing

Contributions are what make the open source community such an amazing place to
learn, inspire, and create. Any contributions you make are **greatly
appreciated**. For detailed contributing guidelines, please see
[CONTRIBUTING.md](CONTRIBUTING.md)

## License

Distributed under the `MIT` License. See [`LICENSE`](LICENSE) for more
information.

## Contact

- [@sean_dashner](https://twitter.com/sean_dashner)
- seandashner@gmail.com

Project Link:
[https://github.com/wayfair-incubator/postmessage-communicator](https://github.com/wayfair-incubator/postmessage-communicator)

## Acknowledgements

This template was adapted from
[https://github.com/othneildrew/Best-README-Template](https://github.com/othneildrew/Best-README-Template).
