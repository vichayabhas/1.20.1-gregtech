# GTCEuTerminalEvents.components

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: ComponentEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| addComponent | String, String, String, int, Map<String, String> |  | void | ✘ |
| addComponent | String, String, String, int |  | void | ✘ |
| addEnergyHatch | String, String, String, String, int |  | void | ✘ |
| addCoil | String, String, int, int |  | void | ✘ |
| addFluidHatch | String, String, String, String, int |  | void | ✘ |
| addBus | String, String, String, int |  | void | ✘ |
| addWirelessHatch | String, String, String, String, int |  | void | ✘ |
| addLaserHatch | String, String, String, String, int |  | void | ✘ |
| addMufflerHatch | String, String, int |  | void | ✘ |
| addDualHatch | String, String, String, int |  | void | ✘ |
| addGroup | String, String, int, String, String, boolean |  | void | ✘ |
| exit | Object |  | Object | ✘ |
| exit |  |  | Object | ✘ |
| cancel | Object |  | Object | ✘ |
| cancel |  |  | Object | ✘ |
| success | Object |  | Object | ✘ |
| success |  |  | Object | ✘ |


### Documented members:

- `Object exit(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object exit()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`exit` denotes a `default` outcome.
```

- `Object cancel(Object var0)`

  Parameters:
  - var0: Object

```
Cancels the event with the given exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object cancel()`
```
Cancels the event with default exit value. Execution will be stopped **immediately**.

`cancel` denotes a `false` outcome.
```

- `Object success(Object var0)`

  Parameters:
  - var0: Object

```
Stops the event with the given exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```

- `Object success()`
```
Stops the event with default exit value. Execution will be stopped **immediately**.

`success` denotes a `true` outcome.
```



### Example script:

```js
GTCEuTerminalEvents.components((event) => {
	// This space (un)intentionally left blank
});
```

