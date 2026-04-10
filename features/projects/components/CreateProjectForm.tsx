'use client';

import React from 'react';
import { ProjectForm } from './ProjectForm';
import { useCreateProject } from '../hooks/useCreateProject';
import { CreateProjectPayload, ProjectFormValues } from '../types';

interface CreateProjectFormProps {
    onSuccess: () => void;
    onCancel: () => void;
}

export const CreateProjectForm = ({ onSuccess, onCancel }: CreateProjectFormProps) => {
    const { createProject, isLoading, error } = useCreateProject({
        onSuccess,
    });

    const handleSubmit = async (data: ProjectFormValues) => {
        const payload: CreateProjectPayload = {
            projectName: data.projectName,
            llmKey: data.llmKey.trim() || undefined,
            provider: data.provider.trim() || undefined,
            rateLimit: data.rateLimit,
        };

        await createProject(payload);
    };

    return (
        <ProjectForm
            onSubmit={handleSubmit}
            onCancel={onCancel}
            isLoading={isLoading}
            error={error}
            title="Create New Project"
            submitLabel="Create Project"
        />
    );
};
