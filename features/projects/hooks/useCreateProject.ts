import { useState } from 'react';
import { CreateProjectPayload, Project } from '../types';
import { ProjectsService } from '../services/ProjectsService';

// define config object (option object)
interface UseCreateProjectOptions {
    onSuccess?: (project: Project) => void;
    onError?: (error: Error) => void;
}

// param is options object, default value is empty object
export const useCreateProject = (options: UseCreateProjectOptions = {}) => {
    const [isLoading, setIsLoading] = useState(false);

    // useState with generic type, TS can not infer type from the initial value is null
    const [error, setError] = useState<Error | null>(null);

    const createProject = async (payload: CreateProjectPayload) => {
        setIsLoading(true);
        setError(null);
        try {
            const project = await ProjectsService.createProject(payload);
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
        createProject,
        isLoading,
        error,
        resetError: () => setError(null),
    };
};
