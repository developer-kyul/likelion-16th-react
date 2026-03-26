// import MovieSearch from "@/practices/MovieSearch";
import S from "./style.module.css";
import { DataFetchingDRY } from "@/learns";

export default function App() {
  return (
    <div className={S.container}>
      {/* <HooksOfRules /> */}
      <DataFetchingDRY />
    </div>
  );
}
