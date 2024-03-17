import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type Props = {
  children: React.ReactNode;
  visible: boolean;
};

export default function FadeInOut({ children, visible }: Props) {
  const ref = useRef(null);

  const [renderChildren, setRenderChildren] = useState(visible);

  const { contextSafe } = useGSAP(
    () => {
      if (visible) {
        setRenderChildren(true);
        gsap.to(ref.current, { opacity: 1, duration: 0.5 });
      } else {
        gsap.to(ref.current, {
          opacity: 0,
          duration: 0.5,
          onComplete: () => setRenderChildren(false),
        });
      }
    },
    { dependencies: [visible] }
  );

  return (
    <div ref={ref} className="opacity-0">
      {renderChildren && children}
    </div>
  );
}
