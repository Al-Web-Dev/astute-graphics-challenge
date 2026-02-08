# Astute Graphics notes

### ToDos

- Hover grey BG for row/grid download buttons
- Margin for all items to replace m-5 class
- All button hover states
- remove Bg white class
- tidy up ... elipses for end of rows

### General Notes

- Tailwind install error reverted to version 3
- no free font awesome for 'circle-plus' icon, used black one
- 'Added / Modified' is a Computed value, this is a derived value as the data is manipulated.
- thumbnails sizing columns / header columns tricky to ready on Figma
- Group class used for on hover of each bar to diplay hidden attributes
- Tick box tricky made custom check box:

```html
<div
  @click.stop="toggleSelection(asset.id)"
  class="justify-self-start w-4 h-4 border border-gray-300 rounded cursor-pointer flex items-center justify-center transition-opacity duration-200"
  :class="selectedRows[asset.id] ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'"
>
  <svg
    v-if="selectedRows[asset.id]"
    class="w-3 h-3 text-orange-500"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fill-rule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414L8.414 15l-4.121-4.121a1 1 0 011.414-1.414L8.414 12.586l7.879-7.879a1 1 0 011.414 0z"
      clip-rule="evenodd"
    />
  </svg>
</div>
```

### Clicking rows changing state

- Reactive state tracked in selectedRows by asset.id.
- Clicking a row toggles selection: background becomes grey, and the checkbox plus icons remain visible.

### Side bar logic

-

```js
const selectedId = ref<number | null>(null) // store which row is selected iff null show default sidebar
@click.stop="toggleSelection(asset.id)" // short hand for stop propagation no bubbling up
```

- Sends messages to parent

```js
const emit = defineEmits<{
  (e: 'select', id: number): void
  (e: 'clear'): void
}>()
```
