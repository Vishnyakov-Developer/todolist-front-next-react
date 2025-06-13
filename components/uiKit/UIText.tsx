const UIText = ({ children, className } : { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`mx-[7px] text-[13px] font-light text-text_color opacity-70 ${className}`}>
      {children}
    </div>
  );
};

export default UIText;

