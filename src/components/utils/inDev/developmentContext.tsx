import React, { createContext, useState, useContext, ReactNode } from 'react';
import InDevelopmentModal from "./inDevelopmentModal.tsx";

interface DevelopmentContextType {
    showDevelopmentModal: () => void;
}

const DevelopmentContext = createContext<DevelopmentContextType | undefined>(undefined);

export const useDevelopment = () => {
    const context = useContext(DevelopmentContext);
    if (context === undefined) {
        throw new Error('useDevelopment must be used within a DevelopmentProvider');
    }
    return context;
};

interface DevelopmentProviderProps {
    children: ReactNode;
}

export const DevelopmentProvider: React.FC<DevelopmentProviderProps> = ({ children }) => {
    const [showModal, setShowModal] = useState(false);

    const showDevelopmentModal = () => {
        setShowModal(true);
    };

    const hideDevelopmentModal = () => {
        setShowModal(false);
    };

    return (
        <DevelopmentContext.Provider value={{ showDevelopmentModal }}>
            {children}
            <InDevelopmentModal
                show={showModal}
                onHide={hideDevelopmentModal}
            />
        </DevelopmentContext.Provider>
    );
};

// Create a hook for handling "in development" links
export const useInDevelopmentLink = () => {
    const { showDevelopmentModal } = useDevelopment();

    const handleInDevelopmentClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
        e.preventDefault();
        showDevelopmentModal();
    };

    return handleInDevelopmentClick;
};