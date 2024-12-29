import { useStore } from "../../store/useStore";

export default function Result() {
  const data = useStore((state) => state.data);

  return data?.length ? (
    <div className="bg-slate-100 mt-2 rounded-lg px-5 py-3 h-[0px] overflow-y-auto flex-1 hide-scrollbar">
      {data?.map((item) => {
        return (
          <div className="text-slate-700 truncate mb-2" key={item.id}>
            {item.content}
          </div>
        );
      })}
    </div>
  ) : null;
}
