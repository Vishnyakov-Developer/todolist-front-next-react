import styles from './styles/UIDescription.module.sass'
import QuotesIcon from './icons/QuotesIcon'
const UIDescription = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => <div className={styles.uiDescription + " " + className}>
  <div className="description box-border rounded-[4px] px-[12px] py-[6px] pr-[24px] text-[15px] text-text_color">
    {children}
  </div>
  <QuotesIcon className="absolute right-[10px] top-[10px]" />
</div>

export default UIDescription