import React from "react";

export interface ShootingStar {
    id: number;
    startX: number;
    endX: number;
    startY: number;
    endY: number;
    duration: number;
    delay: number;
    brightness: number;
    size: number;
    direction: 'left-to-right' | 'right-to-left';
    active: boolean;
}

export interface BackgroundCirclesProps {
    count: number;
    sectionId: string;
}

export interface TooltipLinkProps {
    href: string;
    tooltipText: string;
    ariaLabel: string;
    className?: string;
    placement?: 'top' | 'right' | 'bottom' | 'left';
    children: React.ReactNode;
}

export interface HeroProps {
    scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
    projectsRef: React.RefObject<HTMLDivElement | null>;
    contactRef: React.RefObject<HTMLDivElement | null>;
}

export interface Project {
    id: number;
    title: string;
    year: string;
    shortDescription: string;
    detailedDescription: string;
    technologies: string[];
    imageUrl: string;
    imageAlt?: string;
    imageWidth?: number | string;
    imageHeight?: number | string;
    githubUrl: string;
    liveUrl: string;
}

export interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export interface ProjectImage {
    src: string;
    alt: string;
    width?: number | string;
    height?: number | string;
    aspectRatio?: number;
}

export interface ProjectImageCollection {
    [key: string]: ProjectImage;
}

export interface NavItem {
    id: string;
    label: string;
    ref: React.RefObject<HTMLDivElement | null>;
}

export interface SidebarProps {
    navItems: NavItem[];
    scrollToSection: (ref: React.RefObject<HTMLDivElement | null>) => void;
}

export interface MarqueeProps {
    items: string[];
    speed?: number;
    direction?: 'left' | 'right';
    pauseOnHover?: boolean;
    className?: string;
}