import { useState } from 'react';
import { UpdateProjectPayload, Project } from '../types';
import { ProjectsService } from '../services/ProjectsService';

interface UseUpdateProjectOptions {
    onSuccess?: (project: Project) => void;
    onError?: (error: Error) => void;
}

export const useUpdateProject = (options: UseUpdateProjectOptions = {}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const updateProject = async (id: string, payload: UpdateProjectPayload) => {
        setIsLoading(true);
        setError(null);
        try {
            const project = await ProjectsService.updateProject(id, payload);
            options.onSuccess?.(project);
            return project;
        } catch (err) {
            const errorInstance = err instanceof Error ? err : new Error('An unknown error occurred');
            setError(errorInstance);
            options.onError?.(errorInstance);
            throw errorInstance;
        } finally {
            setIsLoading(false);
        }
    };

    return {
        updateProject,
        isLoading,
        error,
        resetError: () => setError(null),
    };
};
