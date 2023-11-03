# Just my VScode snippets 

## To see all the information about the project, visit the [Docs](https://sn1pp3ts.x1kk4.online)

## Installation:

```bash
git clone git@github.com:x1kk4/react-snippets.git snippets
```

```bash
cd snippets
```

### Linux:
```bash
cp x1kk4-snippets.code-snippets ~/.config/Code/User/snippets/
```

In VSCode: `ctrl + shift + P` -> Snippets: Configure User Snippets -> choose x1kk4-snippets.code-snippets

### MacOS:
```bash
cp x1kk4-snippets.code-snippets ~/Library/Application\ Support/Code/User/snippets/
```

In VSCode: `cmd + shift + P` -> Snippets: Configure User Snippets -> choose x1kk4-snippets.code-snippets
## General:
| **Trigger** |          **Output**                |
|:-----------:|:----------------------------------:|
|   `log⇥`    |              console               |
|   `imp⇥`    |              import                |
|   `arr⇥`    |            arrow func              |
|   `efc⇥`    |       export func component        |
|   `edfc⇥`   |   export default func component    |
|  `edtfc⇥`   |      ed typed func component       |
|    `us⇥`    |             useState               |
|    `ue⇥`    |             useEffect              |
|    `t⇥`     |               type                 |
|    `et⇥`    |            export type             |
|    `etf⇥`   |            export type             |
|    `<⇥`     |              generic               |
|    `cn⇥`    |             className              |
|    `cns⇥`   |     className template string      |
|   `nsc⇥`    |       next server component        |
|   `ncc⇥`    |       next client component        |
|  `ustyles⇥` | useStyles (jss like styled system) |
<!-- | `ustyles⇥`  |       useStyles (jss like styled system)           | -->

## Examples:
---
`log⇥`
```tsx
console.${1}(${2})
```
---
`imp⇥`
```tsx
import ${1} from `${2}`
```
---
`arr⇥`
```tsx
const ${1} = (${2}) => {${3}}
```
---
`efc⇥`
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
---
`edfc⇥`
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
---
`edtfc⇥`
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
---
`us⇥`
```tsx
const [${1}, set${1}] = useState<${2}>(${3})
```
---
`ue⇥`
```tsx
useEffect(() => {
  ${2}
}, [${3}])
```
---
`t⇥`
```tsx
type ${1} = {${2}}
```
---
`et⇥`
```tsx
export type ${1} = {${2}}
```
---
`etf⇥` 
```tsx
export type {${2}} from '${1}'
```
---
`<⇥`
```tsx
<${1}>
```
---
`cn⇥`
```tsx
className={${1}}
```
---
`cns⇥`
```tsx
className={`${${1}}`}
```
---
`nsc⇥`
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
---
`ncc⇥`
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
---
`ustyles⇥`
```tsx
const useStyles = create${1}Styles(() => ({${2}}))
```
---