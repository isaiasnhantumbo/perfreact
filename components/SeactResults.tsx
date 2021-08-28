import { List,  ListRowRenderer } from 'react-virtualized';
import { ProductItem } from './ProductItem';

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  }>;
  addToWishList: (id: number) => void;
  totalPrice: number;
}

export function SearchResults({
  results,
  addToWishList,
  totalPrice,
}: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem product={results[index]} addToWishList={addToWishList} />
      </div>
    );
  };

  return (
    <div>
      <h2>{totalPrice}</h2>
      <List
        height={500}
        rowHeight={25}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}
