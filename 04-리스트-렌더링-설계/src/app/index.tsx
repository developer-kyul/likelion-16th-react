import ProductPage from "@/practices/02-filtering/pages/product";
import S from "./style.module.css";
import { SimpleList, StaffList } from "@/components";

export default function App() {
  return (
    <div className={S.container}>
      {/* <SimpleList /> */}
      <StaffList />
    </div>
  );
}
