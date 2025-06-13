type Project = {
    project_name?: string;
    project_id?: number;
    project_details?: string
};

type TaskPriority = 'high' | 'low' | 'medium';

type Task = {
    task_name?: string;
    task_details?: string;
    task_priority?: TaskPriority | string;
    task_id?: number,
    task_status?: string
}