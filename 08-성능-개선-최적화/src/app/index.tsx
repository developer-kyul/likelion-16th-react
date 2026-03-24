import { SmartHomePanel } from "@/practices";
import S from "./style.module.css";
// import { CompositionRender } from "@/learns";
// import GrandFather from "../learns/CompositonRender/parts/GrandFather";
// import Father from "../learns/CompositonRender/parts/Father";
// import Child from "../learns/CompositonRender/parts/Child";
// import MemoizationValue from './../learns/MemoizationValue/index';

export default function App() {
  return (
    <div className={S.container}>
      {/* <CompositionRender>
        <GrandFather>
          <Father>
            <Child />
          </Father>
        </GrandFather>
      </CompositionRender> */}

      {/* <MemoizationRender /> */}
      {/* <MemoizationCallback /> */}
      {/* <MemoizationValue /> */}

      <SmartHomePanel />
    </div>
  );
}
