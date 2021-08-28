## Casos de uso do memo
```tsx
export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
```

1. Componente puro (isolar componentes).
2. Componentes que renderizam muitas vezes(top often).
3. Componentes que fazem re-renderizam com as mesmas propriedades.
4. Quando o componente esta num tamanho médio para grande.
   - Nao fazer otimizações prematuras

## Use Memo 
Serve para evitar operações dentro do componente em que o resultado não altera. Por exemplo calculo do preço total dentro de um carrinho.
```tsx
const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
      return total + product.price;
    }, 0);
  }, [results]);
```
### Casos de uso do UseMemo
1. Cálculos pesados
2. Igualdade referencial (quando um componente usa uma informação)

## Use Callback 
Serve para memorizar uma função
### Casos de uso do Callback
Igualdade referencial 

A formatação deve ser feita no momento da chamada api e não dentro do componente, isso evita que usemos o useMemo pois os dados serão  formatados uma única vez

code split de funções com lazy loading no nextjs exemplo

```tsx
async function showFormattedDate(){
   const {format} = await import('date-fns')
   format()
}
```