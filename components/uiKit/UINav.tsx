import styles from "./styles/UINav.module.sass";

const UINav = ({ children, className } : { children: React.ReactNode, className?: string }) => {
  return (
    <div className={styles.uiNav + " " + className}>
      {children}
    </div>
  );
};

export default UINav;

