import { useSelector } from 'react-redux';
import { RootState } from '@/store';

export default function HeaderWithCounter() {
  const count = useSelector((state: RootState) => state.projects.items.length);

  return (
    <div className="ui-text-border text-[25px] flex gap-[10px] items-center font-bold bg-button_color py-[30px] px-[15px] text-button_text_color">
      TASK MANAGER
      <div className="text-[13px] flex justify-center items-center h-[30px] w-[30px] text-red-500 bg-white rounded-sm">
        {count}
      </div>
    </div>
  );
}
