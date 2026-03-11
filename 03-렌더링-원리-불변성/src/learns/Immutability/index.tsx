import { useState } from "react";
import S from "./style.module.css";
import { log } from "@/utils";

export default function ImmutabilityTest() {
  const [items, setItems] = useState(["하나", "둘", "셋"]);

  // 직접 수정(push) 방식
  const handleMutation = () => {
    console.log("뮤테이션(변이)");

    // 원본 배열을 사용해 직접 수정
    items.push("넷", "다섯", "여섯");
    log(`원본 배열 데이터에 새로운 항목이 추가되었습니다. ${items}`);

    // 리액트에게 상태 업데이트와 렌더 요청
    // 상태 업데이트 함수인 setItems가 실행되면 상태가 변경되고,
    // 이를 감지해 브라우저 화면을 갱신한다.
    setItems(items);
  };

  // 새로운 배열 생성(spread) 방식
  const handleKeepImmutable = () => {
    console.log("불변성(Immutability) 유지");
    // 원본 배열이 아니라, 복제된 배열을 사용
  };

  return (
    <section className={S.container}>
      <h2 className={S.title}>불변성(Immutability) 관리 실습</h2>

      <div role="group" className={S.buttonGroup}>
        <button type="button" className={S.button} onClick={handleMutation}>
          직접 수정 (push)
        </button>
        <button
          type="button"
          className={`${S.button} ${S.primary}`}
          onClick={handleKeepImmutable}
        >
          새 배열 생성 (Spread)
        </button>
      </div>

      <div className={S.listWrapper}>
        <ul className={S.itemList}>
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
