import S from "./style.module.css";
import { TodoSearch } from "@/practices";

export default function App() {
  return (
    <div className={S.container}>
      {/* <EffectBasic /> */}
      {/* <EffectDependencies /> */}
      {/* <EffectCleanup /> */}
      {/* <DataFetching /> */}
      {/* <RaceCondition /> */}
      {/* <IgnoreStateUpdate /> */}
      <TodoSearch />
    </div>
  );
}
