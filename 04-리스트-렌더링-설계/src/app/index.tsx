import S from "./style.module.css";
import { ScheduleTable } from "@/components";

export default function App() {
  return (
    <div className={S.container}>
      {/* <SimpleList /> */}
      {/* <StaffList /> */}
      {/* <ShiftManager /> */}
      <ScheduleTable />
    </div>
  );
}
