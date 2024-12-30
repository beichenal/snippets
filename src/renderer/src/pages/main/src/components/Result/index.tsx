import { useEffect, useState } from "react";
import { useStore } from "../../store/useStore";
import style from "./style.module.scss";
import classNames from "classnames";

export default function Result() {
  const data = useStore((state) => state.data);
  const [currentIndex, setIndex] = useState(0);

  useEffect(() => {
    const hanlder = (e: KeyboardEvent) => {
      console.log({ key: e.key, code: e.code });
      switch (e.code) {
        case "ArrowUp":
          setIndex((pre) => (Math.max(-1, pre - 1) === -1 ? data.length - 1 : pre - 1));
          break;
        case "ArrowDown":
          setIndex((pre) => (Math.min(data.length, pre + 1) === data.length ? 0 : pre + 1));
      }
    };
    document.addEventListener("keydown", hanlder);
    return () => {
      document.removeEventListener("keydown", hanlder);
    };
  }, [data]);

  return data?.length ? (
    <>
      <div className={style.result}>
        {data?.map((item, index) => {
          return (
            <p
              className={classNames([style.item, { [style.active]: currentIndex === index }])}
              key={item.id}
            >
              {`${index}. ${item.content}`}
            </p>
          );
        })}
      </div>
    </>
  ) : null;
}
