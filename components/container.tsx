const Container = ({ children, className = '' } : { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`mx-auto box-border px-[10px] lg:container ${className}`}>
      {children}
    </div>
  );
};

export default Container;