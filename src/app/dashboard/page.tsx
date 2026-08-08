import { getProjects } from '@/lib/notion/api/projects'
import { AppSidebar } from '@/ui/app/AppSidebar'
import { SidebarProvider } from '@/ui/components/sidebar'
import React from 'react'

const page =  async ({ children }: { children: React.ReactNode }) => {

    const projects = await getProjects();

    

    return (
        <SidebarProvider>
            <AppSidebar projects={projects} />
            {children}
        </SidebarProvider>
    )
}

export default page