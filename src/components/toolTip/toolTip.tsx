import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

interface TooltipLinkProps {
    href: string;
    tooltipText: string;
    ariaLabel: string;
    className?: string;
    placement?: 'top' | 'right' | 'bottom' | 'left';
    children: React.ReactNode;
}

const TooltipLink: React.FC<TooltipLinkProps> = ({
                                                     href,
                                                     tooltipText,
                                                     ariaLabel,
                                                     className = "",
                                                     placement = "top",
                                                     children
                                                 }) => {
    return (
        <OverlayTrigger
            placement={placement}
            overlay={<Tooltip id={`tooltip-${tooltipText.replace(/\s+/g, '-').toLowerCase()}`}>{tooltipText}</Tooltip>}
        >
            <a
                href={href}
                className={className}
                aria-label={ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </a>
        </OverlayTrigger>
    );
};

export default TooltipLink;