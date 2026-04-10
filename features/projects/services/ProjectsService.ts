import { CreateProjectPayload, Project, UpdateProjectPayload } from '../types';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export class ProjectsService {
    private static async handleResponse<T>(response: Response): Promise<T> {
        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(error.message || 'An unexpected error occurred');
        }
        return response.json();
    }

    private static getHeaders() {
        return {
            'Content-Type': 'application/json',
        };
    }

    static async createProject(payload: CreateProjectPayload): Promise<Project> {
        const response = await fetch(`${API_BASE_URL}/projects`, {
            method: 'POST',
            headers: this.getHeaders(),
            body: JSON.stringify(payload),
        });
        return this.handleResponse<Project>(response);
    }

    static async getProjects(): Promise<Project[]> {
        const response = await fetch(`${API_BASE_URL}/projects`, {
            method: 'GET',
            headers: this.getHeaders(),
        });
        return this.handleResponse<Project[]>(response);
    }

    static async updateProject(id: string, payload: UpdateProjectPayload): Promise<Project> {
        const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
            method: 'PATCH',
            headers: this.getHeaders(),
            body: JSON.stringify(payload),
        });
        return this.handleResponse<Project>(response);
    }

    static async deleteProject(id: string): Promise<void> {
        const response = await fetch(`${API_BASE_URL}/projects/${id}`, {
            method: 'DELETE',
            headers: this.getHeaders(),
        });

        if (!response.ok) {
            const error = await response.json().catch(() => ({}));
            throw new Error(error.message || 'Failed to delete project');
        }
    }
}
