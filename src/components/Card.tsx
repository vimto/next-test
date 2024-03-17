import { useRef } from "react";

type Props = {
  setCardVisible: (visible: boolean) => void;
};

export default function Card({ setCardVisible }: Props) {
  return (
    <div className="relative flex flex-col justify-center text-center border w-60 h-96 shadow-md rounded bg-slate-200">
      Card
      <button
        className="absolute top-2 right-2"
        onClick={() => setCardVisible(false)}
      >
        X
      </button>
    </div>
  );
}
