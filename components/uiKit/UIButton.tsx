const UIButton = function ({ icon, text, secondary, className = '', onClick = () => {} } : { icon?: React.ReactNode, text: React.ReactNode, secondary?: React.ReactNode, className?: string, onClick?: () => void }) {
  return (
    <div onClick={onClick} className={`ui-button bg-section_bg_color box-border flex h-[46px] w-full cursor-pointer select-none items-center justify-between px-[16px] text-[17px] font-normal transition-all hover:opacity-50 ${className}`}>
      <div className="flex items-center gap-[16px]">
        {icon && (
          <div className="row-icon flex h-[30px] w-[30px] items-center justify-center rounded-[7px]">
            {icon}
          </div>
        )}
        <div className="row-text text-text_color text-[17px]">
          {text}
        </div>
      </div>
      <div className="row-secondary">
        {secondary}
      </div>
    </div>
  );
};

export default UIButton;