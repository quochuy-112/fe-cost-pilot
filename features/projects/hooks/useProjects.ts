import { useState, useEffect, useCallback } from 'react';
import { Project } from '../types';
import { ProjectsService } from '../services/ProjectsService';

export const useProjects = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchProjects = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await ProjectsService.getProjects();
            setProjects(data);
            return data;
        } catch (err) {
            const errorInstance = err instanceof Error ? err : new Error('Failed to fetch projects');
            setError(errorInstance);
            throw errorInstance;
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProjects();
    }, [fetchProjects]);

    return {
        projects,
        isLoading,
        error,
        refresh: fetchProjects,
    };
};
