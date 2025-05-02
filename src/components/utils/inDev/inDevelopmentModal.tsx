import React, { memo } from 'react';
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
            size="lg"
            backdrop="static"
            className="development-modal"
        >
            <Modal.Body className="text-center" style={{ flexDirection: 'column' }}>
                <p className="mb-2 fs-4">Bear with me, this feature is currently in development :)</p>
                <div className="gif-container" style={{ minHeight: '200px' }}>
                    <img
                        src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExOHpiMThqeDdxbGlnMzRzNGU0bWxzYjNlOXJwMHVmemZhbWZlc3cydyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l46CyJmS9KUbokzsI/giphy.gif"
                        alt="Developer at work"
                        className="img-fluid rounded"
                        height="200"
                    />
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onHide} style={{ width: '100%' }}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default memo(InDevelopmentModal);