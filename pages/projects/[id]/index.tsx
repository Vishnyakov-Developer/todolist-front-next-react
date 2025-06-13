import UITitle from "@/components/uiKit/UITitle";
import Container from "@/components/container";
import UINav from "@/components/uiKit/UINav";
import UIButton from "@/components/uiKit/UIButton";
import requestGetProject from '@/requests/requestGetProject';
import requestGetTasks from '@/requests/requestGetTasks';
import requestTaskStatus from '@/requests/requestTaskStatus'
import requestChangePriority from '@/requests/requestChangePriority'
import requestTaskDelete from '@/requests/requestTaskDelete'
import requestDeleteProject from '@/requests/requestDeleteProject'
import TasksList from "@/components/blocks/TasksList";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import UIModal from "@/components/uiKit/UIModal";
import { priorityColors } from "@/staticData/priority";
import UIDescription from "@/components/uiKit/UIDescription";


import { MainButton } from "@/components/MainButton";
import { BackButton } from "@/components/BackButton";

export default function Project() {
  const router = useRouter();
  const { id: projectId } = router.query;

  const [project, setProject] = useState<Project | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectTask, setSelectTask] = useState<Task | null>(null);

  useEffect(() => {
    if (!projectId || Array.isArray(projectId)) return;

    requestGetProject({ project_id: projectId }).then(setProject);
    requestGetTasks({ projectId }).then(setTasks);
  }, [projectId]); 

  if (!projectId || !project || Array.isArray(projectId)) {
    return <p className="p-4 text-text_color">Загрузка...</p>;
  }

  function changeStatus(status: string) {
    if (selectTask) {
        
        const updatedTasks = tasks.map(task =>
            task.task_id === selectTask.task_id ? { ...task, task_status: status } : task
        );
        setTasks(updatedTasks);

        requestTaskStatus({
            taskId: selectTask.task_id as number,
            taskStatus: status
        });

        setSelectTask({ ...selectTask, task_status: status });
    }
  }

  function changePriority(priority: string) {
    if (selectTask) {
      const updatedTasks = tasks.map(task =>
          task.task_id === selectTask.task_id ? { ...task, task_priority: priority } : task
      );

      setTasks(updatedTasks);

      requestChangePriority({
        taskId: selectTask.task_id as number,
        taskPriority: priority
      });

      setSelectTask({ ...selectTask, task_priority: priority as TaskPriority });
    }
  }

  function deleteTask() {
    if (selectTask) {
      requestTaskDelete({
        taskId: selectTask.task_id as number
      });
      setTasks(tasks.filter(task => task.task_id !== selectTask.task_id));
      setIsOpenModal(false);
    }
  }

  async function deleteProject() {
    await requestDeleteProject({
      projectId: project?.project_id
    });
    router.push("/");
  }


  return (
    <div>
      <Container className="my-[23px]">
        <UITitle>Проект {project.project_name}</UITitle>
        <TasksList className="mt-[23px]" tasks={tasks} openTask={({ taskId }: { taskId: number }) => {
          setIsOpenModal(true)
          setSelectTask(tasks.find(task => task.task_id === taskId) ?? null)
         }}/>
        <UINav className="mt-[20px]">
          <UIButton onClick={() => deleteProject()} text={<p className="text-red-500">Удаление проекта</p>} />
        </UINav>
        <UIDescription className="mt-[23px]">
          <p>{project.project_details}</p>
        </UIDescription>
      </Container>
      <UIModal isOpen={isOpenModal} onClose={() => setIsOpenModal(false)} title="Управление задачей">
        <p className="text-text_color text-center">{selectTask?.task_details}</p>
        {
          selectTask?.task_status == 'active' && (
            <div onClick={() => changeStatus('done')} className="mt-[10px] cursor-pointer bg-button_color text-button_text_color px-[10px] text-center font-semibold py-[7px] rounded-sm">Отметить как завершенную</div>
          )
        }
        {
          selectTask?.task_status == 'done' && (
            <div onClick={() => changeStatus('active')} className="mt-[10px] cursor-pointer bg-button_color text-button_text_color px-[10px] text-center font-semibold py-[7px] rounded-sm">Отметить как новую</div>
          )
        }
        <UINav className="mt-[10px]">
          <UIButton 
            onClick={() => changePriority('low')}
            icon={<p className="w-[15px] h-[15px] rounded-[50px]" style={{ backgroundColor: priorityColors.low }}></p>}
            text="Низкий приоритет"
            secondary={<p className="text-text_color">{selectTask?.task_priority == 'low' ? 'Выбрано' : 'Не выбрано'}</p>}
          />
          <UIButton 
            onClick={() => changePriority('medium')}
            icon={<p className="w-[15px] h-[15px] rounded-[50px]" style={{ backgroundColor: priorityColors.medium }}></p>}
            text="Средний приоритет"
            secondary={<p className="text-text_color">{selectTask?.task_priority == 'medium' ? 'Выбрано' : 'Не выбрано'}</p>}
          />
          <UIButton 
            onClick={() => changePriority('high')}
            icon={<p className="w-[15px] h-[15px] rounded-[50px]" style={{ backgroundColor: priorityColors.high }}></p>}
            text="Высокий приоритет"
            secondary={<p className="text-text_color">{selectTask?.task_priority == 'high' ? 'Выбрано' : 'Не выбрано'}</p>}
          />
        </UINav>
        <p onClick={deleteTask} className="text-red-500 mt-[10px] underline text-right cursor-pointer">Удалить задачу</p>
      </UIModal>
      
      <MainButton onClick={() => router.push(`/projects/${projectId}/tasks/create`)} text="Добавить задачу" />
      <BackButton onClick={() => router.push('/')} />
    </div>
  );
}
