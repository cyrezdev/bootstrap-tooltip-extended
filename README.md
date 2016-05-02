# Bootstrap Tooltip Extended plugin
Additional positions & RTL support for Twitter Bootstrap Tooltip

## Additional positions
bottom-left, bottom-right, top-left, top-right

Example:

```
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top-left" title="Tooltip on top-left">
  Tooltip on top-left
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top-right" title="Tooltip on top-right">
  Tooltip on top-right
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom-left" title="Tooltip on bottom-left">
  Tooltip on bottom-left
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom-right" title="Tooltip on bottom-right">
  Tooltip on bottom-right
</button>
```

## RTL Support
When "auto-dir" is specified and page direction (language) is RTL, it will automatically reverse the horizontal placement of the tooltip.

For example, if placement is "auto-dir left", the tooltip will display to the right if language is RTL (html attribute dir="rtl"), otherwise it will display left (default direction is "ltr").
