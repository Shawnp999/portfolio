import React from 'react';
import { Modal, Button } from 'react-bootstrap';

interface InDevelopmentModalProps {
    show: boolean;
    onHide: () => void;
}

const InDevelopmentModal: React.FC<InDevelopmentModalProps> = ({ show, onHide }) => {
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            size="sm"
            backdrop="static"
            className="development-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title>Under Development</Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
                <p className="mb-4">Bear with me, this feature is currently in development :)</p>
                <div className="gif-container mb-3">
                    <img
                        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpiMThqeDdxbGlnMzRzNGU0bWxzYjNlOXJwMHVmemZhbWZlc3cydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l46CyJmS9KUbokzsI/giphy.gif"
                        alt="Developer at work"
                        className="img-fluid rounded"
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onHide}>
                    Got it!
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default InDevelopmentModal;