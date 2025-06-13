import Container from "@/components/container";
import UITitle from '@/components/uiKit/UITitle'
import { MainButton } from "@/components/MainButton";
import { BackButton } from "@/components/BackButton";
import UIInput from "@/components/uiKit/UIInput";
import UINav from "@/components/uiKit/UINav";
import UITextArea from "@/components/uiKit/UITextarea";
import { useRouter } from "next/router";
import { useState } from "react";
import UIButton from "@/components/uiKit/UIButton";
import UIText from "@/components/uiKit/UIText";
import { priorityColors } from "@/staticData/priority";
import UICheck from "@/components/uiKit/UICheck";
import requestAddTask from '@/requests/requestAddTask'
import { useToaster } from "@/lib/ToasterContext";

export default function Task() {

  const { show } = useToaster()

  const router = useRouter()
  const [taskName, setTaskName] = useState('')
  const [taskDetails, setTaskDetails] = useState('')
  const [taskPriority, setTaskPriority] = useState('low')

  function addTask() {
    requestAddTask({
      taskName,
      taskDetails,
      projectId: router.query.id,
      taskPriority
    }).then(msg => {
      show(msg, "success")
      router.push(`/projects/${router.query.id}`)
    }).catch(err => {
      show(`${err}`, "failed")
    })
  }

  return <div>
    <Container className="my-[23px]">
      <UITitle>Создание задачи</UITitle>
      <UIInput
        className="mt-[20px]" 
        placeholder="Название задачи"
        value={taskName}
        onUpdate={setTaskName}
      />
      <UITextArea 
        className="mt-[20px] h-[130px]" 
        placeholder="Описание задачи"
        value={taskDetails}
        onUpdate={setTaskDetails}
      />
      <UIText className="mt-[14px]">Задайте приоритет</UIText>
      <UINav className="mt-[13px]">
        <UIButton 
          onClick={() => setTaskPriority('low')}
          icon={<UICheck active={taskPriority === 'low'}/>}
          className="ui-start"
          text="Низкий"
          secondary={<p className="w-[14px] h-[14px] rounded-[50px]" style={{ background: priorityColors.low }}></p>}
        />
        <UIButton 
          onClick={() => setTaskPriority('medium')}
          icon={<UICheck active={taskPriority === 'medium'}/>}
          className="ui-start"
          text="Средний"
          secondary={<p className="w-[14px] h-[14px] rounded-[50px]" style={{ background: priorityColors.medium }}></p>}
        />
        <UIButton 
          onClick={() => setTaskPriority('high')}
          icon={<UICheck active={taskPriority === 'high'}/>}
          className="ui-start"
          text="Высокий"
          secondary={<p className="w-[14px] h-[14px] rounded-[50px]" style={{ background: priorityColors.high }}></p>}
        />
      </UINav>
    </Container>
    <MainButton onClick={addTask} text="Добавить задачу"/>
    <BackButton onClick={() => {router.push(`/projects/${router.query.id}`)}} />
  </div>
}