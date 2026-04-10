export interface Project {
    id: string;
    projectName: string;
    llmKey: string | null;
    provider: string | null;
    rateLimit: number | null;
    createdAt: string;
    updatedAt: string;
}

export interface ProjectFormValues {
    projectName: string;
    llmKey: string;
    provider: string;
    rateLimit: number;
}

export interface CreateProjectPayload {
    projectName: string;
    llmKey?: string;
    provider?: string;
    rateLimit?: number;
}

export interface UpdateProjectPayload {
    projectName?: string;
    llmKey?: string | null;
    provider?: string | null;
    rateLimit?: number | null;
}
