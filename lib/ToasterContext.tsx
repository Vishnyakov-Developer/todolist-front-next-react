// lib/ToasterContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import Toaster from "@/components/Toaster";

const ToasterContext = createContext<{
  show: (text: string, type: "success" | "failed") => void;
} | null>(null);

export function useToaster() {
  const context = useContext(ToasterContext);
  if (!context) throw new Error("ToasterContext not found");
  return context;
}

export function ToasterProvider({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);
  const [text, setText] = useState("");
  const [type, setType] = useState<"success" | "failed">("success");

  const show = (message: string, status: "success" | "failed") => {
    setText(message);
    setType(status);
    setVisible(true);
  };

  return (
    <ToasterContext.Provider value={{ show }}>
      {children}
      <Toaster
        type={type}
        text={text}
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </ToasterContext.Provider>
  );
}
