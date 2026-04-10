'use client';

import React from 'react';
import { ProjectForm } from './ProjectForm';
import { useUpdateProject } from '../hooks/useUpdateProject';
import { Project, UpdateProjectPayload, ProjectFormValues } from '../types';

interface UpdateProjectFormProps {
    project: Project;
    onSuccess: () => void;
    onCancel: () => void;
}

export const UpdateProjectForm = ({
    project,
    onSuccess,
    onCancel,
}: UpdateProjectFormProps) => {
    const { updateProject, isLoading, error } = useUpdateProject({
        onSuccess,
    });

    const handleSubmit = async (data: ProjectFormValues) => {
        const payload: UpdateProjectPayload = {
            projectName: data.projectName,
            llmKey: data.llmKey.trim() || undefined,
            provider: data.provider.trim() || undefined,
            rateLimit: data.rateLimit,
        };

        try {
            await updateProject(project.id, payload);
        } catch (err) {
            console.error('Failed to update project:', err);
        }
    };

    return (
        <ProjectForm
            initialData={project}
            onSubmit={handleSubmit}
            onCancel={onCancel}
            isLoading={isLoading}
            error={error}
            title="Edit Project"
            submitLabel="Update Project"
        />
    );
};
