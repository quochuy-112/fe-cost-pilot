'use client';

import React, { useState } from 'react';
import { useProjects } from '@/features/projects/hooks/useProjects';
import { CreateProjectModal } from '@/features/projects/components/CreateProjectModal';
import { UpdateProjectModal } from '@/features/projects/components/UpdateProjectModal';
import { DeleteProjectModal } from '@/features/projects/components/DeleteProjectModal';
import { ProjectCard } from '@/features/projects/components/ProjectCard';
import { Project } from '@/features/projects/types';
import { Plus, LayoutGrid, ArrowRight, Loader2, Sparkles } from 'lucide-react';

export default function ProjectsPage() {
    const { projects, isLoading, refresh } = useProjects();
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [editingProject, setEditingProject] = useState<Project | null>(null);
    const [deletingProject, setDeletingProject] = useState<Project | null>(null);

    return (
        <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-gradient-to-br from-white to-zinc-50/50 dark:from-zinc-900 dark:to-zinc-950 p-8 rounded-2xl border border-border shadow-sm">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Project Management</h1>
                    <p className="text-muted-foreground mt-2 max-w-lg">
                        Manage your AI projects, monitor token usage, and configure model providers from a single dashboard.
                    </p>
                </div>
                <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="group bg-primary text-primary-foreground flex items-center gap-2 px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20"
                >
                    <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                    New Project
                </button>
            </div>

            {/* Content Section */}
            {isLoading ? (
                <div className="flex flex-col items-center justify-center py-24 gap-4">
                    <Loader2 className="w-12 h-12 text-primary animate-spin" />
                    <p className="text-muted-foreground font-medium">Loading your projects...</p>
                </div>
            ) : projects.length === 0 ? (
                <div className="text-center py-24 bg-card border border-dashed border-border rounded-2xl">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">No projects yet</h3>
                    <p className="text-muted-foreground mt-2 max-w-sm mx-auto">
                        Get started by creating your first project to begin optimizing your AI costs.
                    </p>
                    <button
                        onClick={() => setIsCreateModalOpen(true)}
                        className="mt-6 text-primary font-semibold hover:underline flex items-center gap-2 mx-auto"
                    >
                        Create your first project <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onEdit={setEditingProject}
                            onDelete={setDeletingProject}
                        />
                    ))}
                </div>
            )}

            <CreateProjectModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onSuccess={refresh}
            />

            {editingProject && (
                <UpdateProjectModal
                    project={editingProject}
                    isOpen={!!editingProject}
                    onClose={() => setEditingProject(null)}
                    onSuccess={refresh}
                />
            )}

            {deletingProject && (
                <DeleteProjectModal
                    project={deletingProject}
                    isOpen={!!deletingProject}
                    onClose={() => setDeletingProject(null)}
                    onSuccess={refresh}
                />
            )}
        </div>
    );
}
