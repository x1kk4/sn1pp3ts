<h1>My personal snippet-pack</h1>

The `⇥` means the `TAB` key.

<table>
<thead>
<tr>
  <th>

**Trigger**

  </th>

  <th>
  
  **TypeScript**

  </th>
  
  
  <th>

**JavaScript**

  </th>

</tr>

</thead>

<tbody>
<tr>
  <td><code>log⇥</code></td>

  <td>   
  
```tsx
console.${1}(${2})
```

  </td>

  <td>

```jsx
console.${1}(${2})
```
  
  </td>

</tr>
</tr>
</thead>
<tbody>




<tbody>
<tr>
  <td><code>imp⇥</code></td>

  <td>   
  
```tsx
import ${1} from `${2}`
```

  </td>

  <td>

```jsx
import ${1} from `${2}`
```
  
  </td>


</tr>
</tr>
</thead>
<tbody>




<tr>
  <td><code>arr⇥</code></td>

  <td>   
  
```tsx
const ${1} = (${2}) => {${3}}
```

  </td>

  <td>

```jsx
const ${1} = (${2}) => {${3}}
```
  
  </td>

</tr>
</tr>



<tr>
  <td><code>efc⇥</code></td>
  <td>

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

  </td>
  <td>

```jsx
export const ${1} = () => {
  return (
    <${2}>
      <p>${1}</p>
    </${2}>
  )
}
```

  </td>
</tr>




<tr>
  <td><code>edfc⇥</code></td>
  <td>

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

  </td>
  <td>

```jsx
const ${1} = () => {
  return (
    <${2}>
      <p>${1}</p>
    </${2}>
  )
}

export default ${1}
```

  </td>
</tr>




<tr>
  <td><code>edtfc⇥</code></td>
  <td>

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

  </td>
  <td>

```jsx
/╲/\╭༼ ººل͟ºº ༽╮/\╱\
```

  </td>
</tr>



<tr>
  <td><code>us⇥</code></td>
  <td>

```tsx
const [${1}, set${1}] = useState<${2}>(${3})
```

  </td>
  <td>


```jsx
const [${1}, set${1}] = useState(${2})
```

  </td>
</tr>



<tr>
  <td><code>ue⇥</code></td>
  <td>

```tsx
useEffect(() => {
  ${2}
}, [${3}])
```

  </td>
  <td>

```jsx
useEffect(() => {
  ${2}
}, [${3}])
```

  </td>
</tr>



<tr>
  <td><code>t⇥</code></td>
  <td>

```tsx
type ${1} = {${2}}
```

  </td>
  <td>

```jsx
/╲/\╭༼ ººل͟ºº ༽╮/\╱\
```

  </td>
</tr>



<tr>
  <td><code>et⇥</code></td>
  <td>

```tsx
export type ${1} = {${2}}
```

  </td>
  <td>

```jsx
/╲/\╭༼ ººل͟ºº ༽╮/\╱\
```

  </td>
</tr>



<tr>
  <td><code><⇥</code></td>
  <td>

```tsx
<${1}>
```

  </td>
  <td>

```jsx
/╲/\╭༼ ººل͟ºº ༽╮/\╱\
```

  </td>
</tr>



<tr>
  <td><code>cn⇥</code></td>
  <td>

```tsx
className={`${${1}}`}
```

  </td>
  <td>

```jsx
className={`${${1}}`}
```

  </td>
</tr>