import { Project } from "@/lib/notion/api/projects";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupAction,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuAction,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/ui/components/sidebar"
import { IconSubtask } from '@tabler/icons-react';

export function AppSidebar({ projects } : { projects: Project[] }) {
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex gap-2">
                    <IconSubtask size={28} />
                    <h1 className="text-lg font-bold">Project Manager</h1>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    <SidebarMenu>
                        {projects.map((project) => (
                            <SidebarMenuItem key={project.name}>
                                <SidebarMenuButton>{project.name}</SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup />
            </SidebarContent>
            <SidebarFooter />
        </Sidebar>
    )
}