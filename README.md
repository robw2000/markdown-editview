Feature Manager
===============

A Node.js module for managing application feature flipping using Redis.

## Important Terms

* Feature - An arbitrarily named property that can be enabled or 
disabled
* Entity - An arbitrarily named user or group that defines a set of 
enabled features

## Instantiating - new FeatureManager(opts)

Takes an options object (all optional except for featureConfig) like 
this. The defaults are shown except that `log` by default does nothing. 

```
var FeatureManager = require('prsn.featuremanager');
var featureConfig = {
                      featureName1: 'universal',
                      featureName2: 'disabled',
                      featureName3: 'available'
                     }

var featureManager = new FeatureManager({
    featureConfig: featureConfig,
    redisHost: '127.0.0.1',
    redisPort: 6379,
    redisDatabase: 0,
    log: function (level, message, obj) {…}
})
```

Features can be set to one of three states

* universal - universal features will be enabled for all entities (aka, 
users or groups)
* disabled - disabled features will disabled for all entities
* available - available features will be disabled by default but can be 
enabled for individual entities

A `log` function may be passed so that you can plug in whatever logging 
implementation you like. It takes 3 parameters

* level - `debug`, `info`, or `error`
* message - string log message
* obj (optional) - a related object

## Getting all enabled features

Given an array of entities, get an object specifying whether each 
feature defined in featureConfig is enabled or disabled. An available 
feature will be enabled if it is enabled for one or more entities in the
entity array.

```
featureManager.getEnabledFeatures([entity1, entity2, entity3], function(error, features){...})
```

## Enable a feature

Given a feature and an array of entities, enable the feature for each 
entity.

```
featureManager.enableFeature(feature, [entity1, entity2, entity3], function(error){...})
```

## Disable a feature

Given a feature and an array of entities, disable the feature for each 
entity.

```
featureManager.disableFeature(feature, [entity1, entity2, entity3], function(error){...})
```

## Purge a feature from all entities

Given a feature, disable that feature for all entities.

```
featureManager.purgeFeature(feature, function(error){...})
```

## Remove entity keys

Given an array of entities, remove each entity key from Redis. This is 
only indended to be used for testing.

```
featureManager._removeEntityKeys([entity1, entity2, entity3], function(error){...})
```

