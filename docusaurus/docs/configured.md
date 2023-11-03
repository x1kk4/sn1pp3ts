---
sidebar_position: 3
---

# Configured snippets

## `log⇥`

```tsx
console.${1}(${2})
```

```json
"console.log": {
  "scope": "javascript, javascriptreact, typescript, typescriptreact",
  "prefix": "log",
  "body": ["console.${1|log,info,error,table,dir|}($2)", "$3"],
  "description": "Log output to console"
},
```

## `imp⇥`

```tsx
import ${1} from `${2}`
```

```json
"import": {
  "scope": "javascript, javascriptreact, typescript, typescriptreact",
  "prefix": "imp",
  "body": ["import ${1} from \"${2}\""],
  "description": "Import module"
},
```

## `arr⇥`

```tsx
const ${1} = (${2}) => {${3}}
```

```json
"arrow function": {
  "scope": "javascript, javascriptreact, typescript, typescriptreact",
  "prefix": "arr",
  "body": ["const ${1} = (${2}) => {${3}}"],
  "description": "Expands the arrow function"
},
```

## `efc⇥`

```tsx
import { FC } from "react"

export const ${1}: FC = () => {
  return (
    <${2}>
      <p>${1}</p>
    </${2}>
  )
}
```

```json
"export functional component ts": {
  "scope": "typescript, typescriptreact",
  "prefix": "efc",
  "body": [
    "import { FC } from \"react\"",
    "",
    "export const ${1}: FC = () => {",
    "",
    "  return (",
    "    <${2}>",
    "      <p>${1}</p>",
    "    </${2}>",
    "  )",
    "}"
  ],
  "description": "Expands the exported functional component"
},
```

## `edfc⇥`

```tsx
import { FC } from "react"

const ${1}: FC = () => {
  return (
    <${2}>
      <p>${1}</p>
    </${2}>
  )
}

export default ${1}
```

```json
"export default functional component ts": {
  "scope": "typescript, typescriptreact",
  "prefix": "edfc",
  "body": [
    "import { FC } from \"react\"",
    "",
    "const ${1}: FC = () => {",
    "  return (",
    "    <${2}>",
    "      <p>${1}</p>",
    "    </${2}>",
    "  )",
    "}",
    "",
    "export default ${1}"
  ],
  "description": "Expands the functional component exported by default"
},
```

## `edtfc⇥`

```tsx
import { FC } from "react"

interface ${1}Props {${3}}

const ${1}: FC<${1}Props> = ({${4}}) => {
  return (
    <${2}>
      <p>${1}</p>
    </${2}>
  )
}

export default ${1}
```

```json
"export default typed functional component": {
  "scope": "typescript, typescriptreact",
  "prefix": "edtfc",
  "body": [
    "import { FC } from \"react\"",
    "",
    "interface ${1}Props {${3}}",
    "",
    "const ${1}: FC<${1}Props> = ({${4}}) => {",
    "  return (",
    "    <${2}>",
    "      <p>${1}</p>",
    "    </${2}>",
    "  )",
    "}",
    "",
    "export default ${1}"
  ],
  "description": "Expands the typed functional component exported by default"
},
```

## `us⇥`

```tsx
const [${1}, set${1}] = useState<${2}>(${3})
```

```json
"useStateHook ts": {
  "scope": "typescript, typescriptreact",
  "prefix": "us",
  "body": "const [${1}, set${1/(.*)/${1:/capitalize}/}] = use${4}State<${2}>(${3})",
  "description": "Expands typed useState hook"
},
```

## `ue⇥`

```tsx
useEffect(() => {
  ${2}
}, [${3}])
```

```json
"useEffectHook": {
  "scope": "javascript, javascriptreact, typescript, typescriptreact",
  "prefix": "ue",
  "body": ["use${1}Effect(() => {", "  ${3}", "}, [${2}])"],
  "description": "Expands the useEffect hook"
},
```

## `t⇥`

```tsx
type ${1} = {${2}}
```

```json
"typeDefinition": {
  "scope": "typescript, typescriptreact",
  "prefix": "t",
  "body": ["type ${1} = {${2}}"],
  "description": "Type declaration"
},
```

## `et⇥`

```tsx
export type ${1} = {${2}}
```

```json
"exportType": {
  "scope": "typescript, typescriptreact",
  "prefix": "et",
  "body": ["export type ${1} = {${2}}"],
  "description": "Export type declaration"
},
```

## `etf⇥`

```tsx
export type {${2}} from '${1}'
```

```json
"exportTypeFrom": {
  "scope": "typescript, typescriptreact",
  "prefix": "etf",
  "body": ["export type {${2}} from '${1}'"],
  "description": "Re-export type construction"
},
```

## `<⇥`

```tsx
<${1}>
```

```json
"generic": {
  "scope": "typescript, typescriptreact",
  "prefix": "<",
  "body": ["<${1}>"],
  "description": "Generic"
},
```

## `cn⇥`

```tsx
className={${1}}
```

```json
"className": {
  "scope": "typescript, typescriptreact, javascript, javascriptreact",
  "prefix": "cn",
  "body": ["className={$1}"],
  "description": "className"
},
```

## `cns⇥`

```tsx
className={`${${1}}`}
```

```json
"classNameString": {
  "scope": "typescript, typescriptreact, javascript, javascriptreact",
  "prefix": "cns",
  "body": ["className={`${$1}`}"],
  "description": "classNameString"
},
```

## `nsc⇥`

```tsx
const ${1} = async () => {
  return (
    <${2}>,
	  <p>${1}</p>
	</${2}>
  ),
},

export default ${1}
```

```json
"nextServerComponent": {
  "scope": "typescript, typescriptreact, javascript, javascriptreact",
  "prefix": "nsc",
  "body": [
    "const ${1} = async () => {",
    "  return (",
    "    <${2}>",
    "      <p>${1}</p>",
    "    </${2}>",
    "  )",
    "}",
    "",
    "export default ${1}"
  ],
  "description": "Next server component"
},
```

## `ncc⇥`

```tsx
'use client'

import { FC } from "react"

const ${1}: FC = () => {
  return (
    <${2}>
      <p>${1}</p>
    </${2}>
  )
}

export default ${1}
```

```json
"nextClientComponent": {
  "scope": "typescript, typescriptreact, javascript, javascriptreact",
  "prefix": "ncc",
  "body": [
    "'use client'",
    "",
    "import { FC } from \"react\"",
    "",
    "const ${1}: FC = () => {",
    "  return (",
    "    <${2}>",
    "      <p>${1}</p>",
    "    </${2}>",
    "  )",
    "}",
    "",
    "export default ${1}"
  ],
  "description": "Next client component"
},
```

## `ustyles⇥`

```tsx
const useStyles = create${1}Styles(() => ({${2}}))
```

```json
"useStyles": {
  "scope": "typescript, typescriptreact, javascript, javascriptreact",
  "prefix": "ustyles",
  "body": ["const useStyles = create${1}Styles(() => ({${2}}))"]
}
```
