'use client';

import React from 'react';
import { CreateProjectForm } from './CreateProjectForm';
import { Modal } from './Modal';

interface CreateProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSuccess: () => void;
}

export const CreateProjectModal = ({ isOpen, onClose, onSuccess }: CreateProjectModalProps) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <CreateProjectForm 
                onSuccess={() => {
                    onSuccess();
                    onClose();
                }}
                onCancel={onClose}
            />
        </Modal>
    );
};
