# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.50.0] - 2024-09-05
### Added
- `splitItem` in `updateItems` mutation

## [0.49.0] - 2022-06-01
### Added
- Accepts Order Form ID via query parameter on orderForm query

## [0.48.1] - 2022-04-18

### Added
- `modalType` props in `orderForm/item` fragment.

## [0.48.0] - 2022-01-17

### Added
- `customData` structure in `orderForm` fragment.

## [0.47.0] - 2021-09-29

### Added
- `priceDefinition` structure in `item` fragment.

## [0.46.0] - 2021-04-16

### Added
- `refreshOutdatedData` field in `orderForm` mutation

## [0.45.0] - 2021-04-12

### Added
- Property `isGift` to `Item` fragment.

## [0.44.0] - 2021-04-05

### Added
- parameter `allowedOutdatedData` to `addToCart` and `updateItems` mutations

## [0.43.0] - 2021-03-22
### Added
- Property `priceTags` to `Item` fragment.

## [0.42.0] - 2021-02-23
### Added
- Hook `useGeolocationEnabled` to group geolocation logic.

## [0.41.2] - 2021-02-01
### Changed
- Usage of `installedApp` query, replaced by a more performatic query

## [0.41.1] - 2021-01-19
### Added
- Field `geoCoordinates` in address fragment.

## [0.41.0] - 2020-12-23
### Added
- Parameter `salesChannel` in `addToCart` mutation.

## [0.40.0] - 2020-12-02
### Added
- Field `parentItemIndex` to `OrderFormFragment` fragment.

## [0.39.0] - 2020-12-01
### Added
- `selectPickupOption` mutation.
- Pickup points info to `OrderFormFragment`.

## [0.38.1] - 2020-12-01
### Added
- `scope: "private"` to orderForm query.

## [0.38.0] - 2020-11-24
### Added
- Mutation `clearOrderFormMessages`.

## [0.37.0] - 2020-10-30
### Added
- Field `priceTags` to `OrderFormFragment` fragment.

## [0.36.0] - 2020-09-28
### Added
- Field `manualPrice` to `OrderFormFragment` fragment.

## [0.35.0] - 2020-09-25
### Added
- `setManualPrice` mutation.

## [0.34.0] - 2020-09-11
### Added
- New fields to `Item`:
  - `attachments`
  - `attachmentsOfferings`
  - `bundleItems`
  - `offerings`

## [0.33.0] - 2020-09-02
### Added
- Field `seller` to `OrderFormFragment` fragment.

## [0.32.0] - 2020-07-09
### Added
- Field `loggedIn` to `OrderFormFragment` fragment.
- Field `isDisposable` to `Address` fragment.

## [0.31.0] - 2020-07-07
### Added
- Include field `isValid` in `OrderFormFragment` attachments.

## [0.30.1] - 2020-06-04
### Fixed
- Query for `profile` not destructuring fields of `availableAccounts`.

## [0.30.0] - 2020-05-08
### Added
- Field `unitMultiplier` to `items` in `OrderFormFragment`.

## [0.29.0] - 2020-05-05
### Added
- Field `availableAccounts` to `OrderFormFragment`.

## [0.28.0] - 2020-04-20
### Added
- Mutation resource to update the user selected address.

## [0.27.0] - 2020-04-02
### Added
- Mutation resource to update the payment data.
- Fields `installmentOptions` and `payments` to `OrderFormFragment`.

## [0.26.0] - 2020-03-25
### Added
- `refId` to the `orderForm` query.

## [0.25.0] - 2020-03-24
### Added
- Field `userType` to `OrderFormFragment`.

## [0.24.0] - 2020-03-20
### Added
- Mutation resource to update the client preferences data.

## [0.23.0] - 2020-03-18
### Added
- Field `userProfileId` to `OrderFormFragment`.

## [0.22.0] - 2020-03-11
### Added
- `paymentData` to `OrderFormFragment`.

## [0.21.0] - 2020-03-06
### Added
- Query for all fields in MarketingData type.

## [0.20.4] - 2020-03-04
### Changed
- Update `updateOrderFormProfile` mutation variables to match new signature.

## [0.20.3] - 2020-03-03
### Changed
- `gateway-graphql` to version `1.x`.

## [0.20.2] - 2020-03-03
### Added
- Fields for `clientProfileData` in `OrderForm` fragment.

### Changed
- Update return value of the `updateOrderFormProfile` mutation to use the `OrderForm` fragment.

## [0.20.1] - 2020-03-03
### Changed
- Return `tokenizedCards` from `saveCards` mutation
- Update query and mutation files to typescript.

## [0.20.0] - 2020-03-02
### Added
- New query for `updateOrderFormProfile` mutation.

### Changed
- Added `userProfile` fields to `checkoutProfile` query.

## [0.19.0] - 2020-02-28
### Added
- New query for `checkoutProfile`.

## [0.18.0] - 2020-02-17
### Added
- Separate entrypoints for each query and mutation.

## [0.17.0] - 2020-02-13
### Added
- `saveCards` mutation.
- `savePaymentToken` mutation.
- `cardSessionId` query.

## [0.16.0] - 2020-01-30
### Added
- `id` to `OrderFormFragment`.

## [0.15.0] - 2020-01-07
### Added
- Checkout's major version to `useCheckoutURL`.

## [0.14.2] - 2020-01-02
### Changed
- Entrypoint file extensions from `.js` to `.tsx` so their types can be exported.

## [0.14.1] - 2019-12-30
### Changed
- Security updates.

## [0.14.0] - 2019-12-10
### Added
- `canEditData` field to `OrderFormFragment`.

## [0.13.0] - 2019-12-06
### Added
- `useCheckoutURL` hook.

## [0.12.0] - 2019-11-19
### Added
- `productCategories`, `productCategoryIds` and `productRefId` attributes to `orderForm` query.

## [0.11.0] - 2019-11-05
### Added
- Fields related to assemblyOptions on OrderFormFragment.

## [0.10.0] - 2019-11-01
### Changed
- `imageUrl` was replaced by `imageUrls`, which contain URLs to images with 1x, 2x and 3x resolutions.

## [0.9.0] - 2019-10-14
### Added
- `addToCart` mutation.

## [0.8.0] - 2019-10-10
### Added
- `DeliveryOptions` field to `OrderFormFragment`.

## [0.7.0] - 2019-09-24
### Added
- `SelectDeliveryOption` mutation.

## [0.6.0] - 2019-09-24
### Added
- `Address` fragment to `OrderForm`.

### Added
- Shipping info to `OrderForm` fragment.
- `EstimateShipping` mutation.

## [0.5.0] - 2019-09-23
### Added
- `generalMessages` field to `OrderFormFragment`'s `messages` field.

## [0.4.0] - 2019-09-13
### Added
- `messages` field with `couponMessages` to `OrderFormFragment`.

## [0.3.0] - 2019-09-11
### Added
- MarketingData's message.

## [0.2.0] - 2019-09-05
### Added
- `availability` field to `OrderFormFragment`.

## [0.1.0] - 2019-09-05
### Added
- Query: `orderForm`.
- Mutations: `insertCoupon`, `updateItem`.
- Fragment: `OrderFormFragment`.
