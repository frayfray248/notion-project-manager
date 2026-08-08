import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/ui/lib/utils";
import { TooltipProvider } from "@/ui/components/tooltip";
import { SidebarProvider } from "@/ui/components/sidebar";
import { AppSidebar } from "@/ui/app/AppSidebar";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Notion Project Manager",
    description: "Project management tool with Notion API integration",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
    return (
        <html
            lang="en"
            className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", inter.variable)}
        >
            <body className="min-h-full flex flex-col">
                <TooltipProvider>
                    {children}

                </TooltipProvider>
            </body>
        </html>
    );
}
