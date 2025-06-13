import Container from "@/components/container";
import { MainButton } from "@/components/MainButton";
import { BackButton } from "@/components/BackButton";
import { useTelegram } from "@/lib/useTelegram";
import UITitle from "@/components/uiKit/UITitle";
import UIInput from "@/components/uiKit/UIInput";
import UITextArea from "@/components/uiKit/UITextarea";
import UIModal from "@/components/uiKit/UIModal";
import UIText from "@/components/uiKit/UIText";
import UIDescription from "@/components/uiKit/UIDescription";
import { memo } from "react";
import { useRouter } from "next/router";
import { useState } from "react";
import requestCreateProject from "@/requests/requestCreateProject"
import { useToaster } from "@/lib/ToasterContext";

const MemoMainButton = memo(MainButton);
const MemoBackButton = memo(BackButton);

export default function AddProject() {
  const tg = useTelegram();
  const router = useRouter();
  const { show } = useToaster();

  const [text, setText] = useState('');
  const [details, setDetails] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const warning = text.length > 30;

  async function createProject() {
    if (warning) return;
    
    if (!isOpenModal) {
      setIsOpenModal(true);
      return;
    }

    setIsOpenModal(false)
    await requestCreateProject({
      projectName: text,
      projectDetails: details
    }).then(msg => {
      show(msg, "success")
      setTimeout(() => {
        router.push('/')
      }, 500)
    }).catch(error => {
      show(`${error}`, "failed")
    })
  }

  return (
    <>
      <div>
        <Container className="my-[23px]">
          
          <UITitle>Создать проект</UITitle>
          <div className="mt-[15px]">
            <UIInput 
              value={text}
              onUpdate={setText}
              placeholder="Введите до 30 символов"
              warning={warning}
            />
            {
              warning && (
                <UIText>Превышено максимальное кол-во символов (30)</UIText>
              )
            }
          </div>
          <div className="mt-[15px]">
            <UITextArea
              className="h-[200px]"
              value={details}
              onUpdate={setDetails}
              placeholder="Введите описание"
            />
          </div>
          <UIDescription className="mt-[15px]">
            <p>После создания проекта, вы можете перейти в него и добавить задачи</p>
          </UIDescription>
        </Container>
      </div>
      <UIModal title="Создание проекта" isOpen={isOpenModal} onClose={() => setIsOpenModal(false)}>
            <p className="text-text_color">Вы уверены в создании нового проекта?</p>
            <br/>
            <p className="text-text_color">Новый проект отобразиться в списке ваших общих проектов</p>
      </UIModal>
      <MemoBackButton onClick={() => router.back()}/>
      <MemoMainButton text="Создать проект" onClick={createProject} />
    </>
  );
}


