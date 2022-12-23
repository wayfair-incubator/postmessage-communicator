# postmessage-communicator

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

- yarn

  ```sh
  npm install --global yarn
  ```

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/wayfair-incubator/postmessage-communicator.git
   ```

2. Install yarn packages and compile typescript code

   ```sh
   yarn
   yarn tsc
   ```

## Communicator API

### `subscribe`

| Parameter Name | Required | Description              | Type                      | Default |
| -------------- | -------- | ------------------------ | ------------------------- | ------- |
| eventType      | yes      | event type to listen for | string                    |         |
| cb             | yes      | callback fired on event  | (e: MessageEvent) => void |         |

### `unsubscribe`

| Parameter Name | Required | Description                       | Type                      | Default |
| -------------- | -------- | --------------------------------- | ------------------------- | ------- |
| cb             | yes      | callback returned as subscription | (e: MessageEvent) => void |         |

### `post`

| Parameter Name | Required | Description                        | Type                                 | Default |
| -------------- | -------- | ---------------------------------- | ------------------------------------ | ------- |
| type           | yes      | event type to post eg: `addToCart` | string \| VendorEvent \| ClientEvent |         |
| payload        | yes      | post data                          | anything but a function              |         |

## Vendor Communicator API

### `addToCart`

| Parameter Name | Required | Description            | Type   | Default   |
| -------------- | -------- | ---------------------- | ------ | --------- |
| customerUid    | yes      | customer identifier    | string |           |
| projectId      | yes      | project identifier     | string |           |
| projectVersion | no       | project version        | string |           |
| brand          | yes      | brand description      | string |           |
| style          | yes      | style description      | string |           |
| color          | yes      | color                  | string |           |
| url            | yes      | thumbnail image url    | string |           |
| bom            | yes      | bill of materials      | string |           |

### `designerHandOff`

| Parameter Name | Required | Description            | Type   | Default   |
| -------------- | -------- | ---------------------- | ------ | --------- |
| customerUid    | yes      | customer identifier    | string |           |
| projectId      | yes      | project identifier     | string |           |
| projectVersion | no       | project version        | string |           |
| brand          | yes      | brand description      | string |           |
| style          | yes      | style description      | string |           |
| color          | yes      | color                  | string |           |
| url            | yes      | thumbnail image url    | string |           |
| area           | yes      | area of room           | number |           |

### `requestToken`

no parameters

### `projectDirty`

no parameters

### `projectSaved`

no parameters

### `projectDeleted`

no parameters

## Client Communicator API

### `init`

| Parameter Name    | Required | Description                            | Type   | Default |
| ----------------- | -------- | -------------------------------------- | ------ | ------- |
| token             | yes      | JWT token with initialization payload  | string |         |
| landingExperience | yes      | requested landing page for application | string |         |

### `refreshToken`

| Parameter Name | Required | Description                           | Type   | Default |
| -------------- | -------- | ------------------------------------- | ------ | ------- |
| token          | yes      | JWT token with initialization payload | string |         |

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
- coutinho.dominic@outlook.com

Project Link:
[https://github.com/wayfair-incubator/postmessage-communicator](https://github.com/wayfair-incubator/postmessage-communicator)

## Acknowledgements

This template was adapted from
[https://github.com/othneildrew/Best-README-Template](https://github.com/othneildrew/Best-README-Template).
tt
