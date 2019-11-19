# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
