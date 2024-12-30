import { ChangeEvent, useState } from "react";
import { useStore } from "../../store/useStore";
import { mockData } from "@mock/result";

export default function Search() {
  const setData = useStore((state) => state.setData);
  const [inputValue, setValue] = useState("");
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setValue(v);

    setData(
      !v
        ? []
        : mockData.filter(({ content }) =>
            content.toLowerCase().includes(e.target.value.toLowerCase())
          )
    );
  };
  return (
    <div className="bg-slate-50 p-5 rounded-lg drag">
      <section className="bg-slate-200 p-3 rounded-lg nodrag">
        <input
          className={`
            w-full 
            outline-none 
            text-2xl 
          text-slate-600 
          bg-slate-200`}
          value={inputValue}
          onChange={handleSearch}
        ></input>
      </section>
    </div>
  );
}
