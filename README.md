# React Hooks

### Uma forma de trabalhar com as funcionalidades
### do React sem a necessidade de criar classes.

## Como Funcionam?
  - Precisam estar no top level do componente.
  - Podem ser chamados dentro de custom hooks.

## Estado (useState)
### São valores que re-renderizarão o componente.
  - Guardar/atualizar o estado de um componente.

## Referência (useRef)
  - Guardar referência de um elemento.
  - Guardar valores que não atualizarão o componente.

## Efeito (useEffect)
  Ciclo de vida:

  1. Componente montado. (renderizado)
  2. Componente atualizado. (re-renderizado)
  3. Componente desmontado.

## Memoização

  1. Renderização desnecessária dos filhos.