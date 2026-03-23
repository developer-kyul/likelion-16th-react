import { ShoppingCart } from "@/practices";
import S from "./style.module.css";

export default function App() {
  return (
    <div className={S.container}>
      {/* <ReferenceCheck /> */}
      {/* <TodosCRUD /> */}
      {/* <TodosCrudWithImmer /> */}
      {/* <DerivedState /> */}
      <ShoppingCart />
    </div>
  );
}
