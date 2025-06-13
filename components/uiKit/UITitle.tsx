const UITitle = ({ children } : { children: React.ReactNode }) => {
  return (
    <div className="text-center text-[18px] font-semibold text-text_color">
      {children}
    </div>
  );
}

export default UITitle