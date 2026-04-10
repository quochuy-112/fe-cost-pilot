import { useState } from 'react';
import { ProjectsService } from '../services/ProjectsService';

interface UseDeleteProjectOptions {
    onSuccess?: () => void;
    onError?: (error: Error) => void;
}

export const useDeleteProject = (options: UseDeleteProjectOptions = {}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const deleteProject = async (id: string) => {
        setIsLoading(true);
        setError(null);
        try {
            await ProjectsService.deleteProject(id);
            options.onSuccess?.();
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
        deleteProject,
        isLoading,
        error,
        resetError: () => setError(null),
    };
};
