"use client"

import UINav from "../uiKit/UINav"
import UIButton from "../uiKit/UIButton"
import { priorityColors } from "@/staticData/priority"

export default function TasksList({ tasks, className, openTask } : { tasks: Task[], className?: string, openTask?: ({ taskId }: { taskId: number }) => void }) {
  return <div className={`${className}`}>
    <UINav>
      {tasks?.map(task => 
        <UIButton
          className="ui-start"
          onClick={openTask ? () => openTask({ taskId: task.task_id as number }) : undefined}
          text={task.task_status == "done" ? <span className="line-through">{task.task_name}</span> : task.task_name}
          key={task.task_id}
          secondary={task.task_priority && <div className="w-[10px] h-[10px] rounded-full" style={{ backgroundColor: priorityColors[task.task_priority as TaskPriority] }} />}
        />
      )}
    </UINav>
  </div>
}