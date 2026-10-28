# GTCEuStartupEvents.craftingComponents

## Basic info

- Valid script types: [STARTUP]

- Has result? ✘

- Event class: CraftingComponentsEventJS (third-party)

### Available fields:

| Name | Type | Static? |
| ---- | ---- | ------- |

Note: Even if no fields are listed above, some methods are still available as fields through *beans*.

### Available methods:

| Name | Parameters | Return type | Static? |
| ---- | ---------- | ----------- | ------- |
| createTag | String, ResourceLocation |  | ComponentWrapper | ✘ |
| set | CraftingComponent, Map<Object, Object> |  | void | ✘ |
| setItem | CraftingComponent, int, ItemStack |  | void | ✘ |
| setMaterialEntries | CraftingComponent, Map<Object, Object> |  | void | ✘ |
| setFallbackTag | CraftingComponent, ResourceLocation |  | void | ✘ |
| setMaterialEntry | CraftingComponent, int, MaterialEntry |  | void | ✘ |
| removeTier | CraftingComponent, int |  | void | ✘ |
| setFallbackItem | CraftingComponent, ItemStack |  | void | ✘ |
| removeTiers | CraftingComponent, int[] |  | void | ✘ |
| setTag | CraftingComponent, int, ResourceLocation |  | void | ✘ |
| setTags | CraftingComponent, Map<Object, Object> |  | void | ✘ |
| setFallbackMaterialEntry | CraftingComponent, MaterialEntry |  | void | ✘ |
| createMaterialEntry | String, MaterialEntry |  | ComponentWrapper | ✘ |
| createItem | String, ItemStack |  | ComponentWrapper | ✘ |
| setItems | CraftingComponent, Map<Object, Object> |  | void | ✘ |
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
GTCEuStartupEvents.craftingComponents((event) => {
	// This space (un)intentionally left blank
});
```

