
# SP-SVG

The sp-svg component is a simple web component which allows easily to put svg icons to the website.

## Properties

| Property     | Attribute    | Description                         | Type      | Default |
| ------------ | ------------ | ----------------------------------- | --------- | ------- |
| `responsive` | `responsive` | Sets width to 100% and height auto  | `boolean` | `false` |
| `src`        | `src`        | Path to svg file                    | `string`  | `null`  |
| `svgClass`   | `svg-class`  | CSS classes placed into svg element | `string`  | `null`  |

## Usage

```
...
<body>

    <sp-svg src="/path/to/svg-file.svg"></sp-svg>

<script src="/sp-svg/dist/index.js"></script>
</body
...
```