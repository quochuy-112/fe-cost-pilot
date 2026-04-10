'use client';

import React from 'react';
import { Project } from '../types';
import { UpdateProjectForm } from './UpdateProjectForm';
import { Modal } from './Modal';

interface UpdateProjectModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export const UpdateProjectModal = ({ project, isOpen, onClose, onSuccess }: UpdateProjectModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <UpdateProjectForm 
                project={project}
                onSuccess={() => {
                    onSuccess();
                    onClose();
                }}
                onCancel={onClose}
            />
        </Modal>
    );
};
