import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import {TooltipLinkProps} from "../../types/types.ts";



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