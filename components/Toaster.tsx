import { useEffect, useState } from "react";
import clsx from "clsx";
import SuccessToasterIcon from "./uiKit/icons/SuccessToasterIcon";
import FailedToasterIcon from "./uiKit/icons/FailedToasterIcon";

export default function Toaster({
  type,
  text,
  visible,
  onClose,
}: {
  type: "success" | "failed";
  text: string;
  visible: boolean;
  onClose: () => void;
}) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (visible) {
      setActive(true);
      const timer = setTimeout(() => {
        setActive(false);
        onClose();
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [visible, onClose]);

  return (
    <div
      className={clsx(
        "fixed bottom-[120px] left-[7%] mx-auto box-border flex min-h-[50px] w-[84%] items-center justify-center rounded-[14px] px-[14px] py-[12px] transition-all",
        active ? "animate-toaster z-30" : "opacity-0 z-[-1]"
      )}
      style={{ background: "#191f2c" }}
    >
      <div className="icon flex shrink-0 items-center justify-center">
        {type === "success" ? (
          <SuccessToasterIcon />
        ) : (
          <FailedToasterIcon />
        )}
      </div>
      <p className="ml-2 text-[13px] font-semibold text-white">{text}</p>
      <p
        className="ml-auto cursor-pointer text-[16px] text-accent_text_color hover:opacity-80"
        onClick={() => {
          setActive(false);
          onClose();
        }}
      >
        Закрыть
      </p>
    </div>
  );
}
