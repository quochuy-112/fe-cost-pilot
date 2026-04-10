'use client';

import React from 'react';
import { Project } from '../types';
import { DeleteProjectConfirm } from './DeleteProjectConfirm';
import { Modal } from './Modal';

interface DeleteProjectModalProps {
    project: Project;
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export const DeleteProjectModal = ({ project, isOpen, onClose, onSuccess }: DeleteProjectModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-md">
            <DeleteProjectConfirm 
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
