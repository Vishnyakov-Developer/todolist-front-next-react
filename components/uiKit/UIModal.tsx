'use client';

import { useEffect } from 'react';
import clsx from 'clsx';
import ModalCloseIcon from './icons/ModalCloseIcon';

type UIModalProps = {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function UIModal({ title, isOpen, onClose, children }: UIModalProps) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const handleBackgroundClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className={clsx(
        'modal transition-all fixed bottom-0 left-0 w-full h-[100dvh] flex flex-col justify-end',
        'backdrop-blur-xl bg-black/50',
        isOpen ? 'z-50 opacity-100' : 'z-[-1] opacity-0 pointer-events-none'
      )}
    >
      <div className="ui-modal relative bg-section_bg_color px-4 py-[25px] rounded-t-[16px] min-h-[40%] overflow-y-auto transition-all z-40">
        <div className="ui-modal__header flex justify-center items-center relative">
          {title && (
            <p className="text-text_color text-[17px] font-semibold text-center w-full">{title}</p>
          )}
          <div
            onClick={onClose}
            className="bg-section_bg_color absolute right-[15px] z-50 flex h-[25px] w-[25px] cursor-pointer select-none items-center justify-center rounded-full"
          >
            {<ModalCloseIcon />}
          </div>
        </div>
        <div className="content-modal mt-[28px]">{children}</div>
      </div>
    </div>
  );
}