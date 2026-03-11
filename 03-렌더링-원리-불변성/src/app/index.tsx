import {
  Immutability,
  ImmutabilityCRUD,
  RenderPipeline,
  VirtualDOM,
} from "@/learns";
import S from "./style.module.css";

export default function App() {
  return (
    <div className={S.container}>
      {/* <RenderPipeline /> */}
      {/* <VirtualDOM /> */}
      {/* <Immutability /> */}
      <ImmutabilityCRUD />
    </div>
  );
}
