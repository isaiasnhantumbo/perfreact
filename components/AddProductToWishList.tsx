export interface AddProductToWishListProps {
  addToWishList: () => void;
  onRequestClose: () => void;
}

export function AddProductToWishList({
  addToWishList,
  onRequestClose,
}: AddProductToWishListProps) {
  return (
    <span>
      Deseja adicionar aos favoritos
      <button onClick={addToWishList}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  );
}
