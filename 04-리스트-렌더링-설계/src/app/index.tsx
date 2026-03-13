import S from "./style.module.css";
import { StaffListWithFilter } from "@/components";

export default function App() {
  return (
    <div className={S.container}>
      {/* <SimpleList /> */}
      {/* <StaffList /> */}
      {/* <ShiftManager /> */}
      {/* <ScheduleTable /> */}

      {/* 단일 책임의 원칙 */}
      {/* <ProductList /> */}

      {/* 리팩토링 */}
      {/* <ProductListWithFilter /> */}
      <StaffListWithFilter />
    </div>
  );
}
