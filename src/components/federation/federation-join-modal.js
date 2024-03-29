import React, { Fragment } from "react";
import { Button, Modal } from "react-bootstrap";

const FederationJoinModal = ({ federation, modalOpen, closeModal, handleJoinFederation }) => {

    // This function is used in order to preserve the animation on closing the modal
    const modalContent = () => {
        return(

            federation ?
                <Fragment>
                    <Modal.Header closeButton>
                        <Modal.Title>Are you sure you want to join to federation with id
                            <strong> {federation.id}</strong>?</Modal.Title>
                    </Modal.Header>
                    <Modal.Footer>
                        <Button type="button" bsStyle="danger"
                                onClick={handleJoinFederation}>Verify to join</Button>
                        <Button type="button" bsStyle="default"
                                onClick={closeModal}>Close</Button>
                    </Modal.Footer>
                </Fragment> :
                null
        );
    };

    return(
        <Modal show={modalOpen} onHide={closeModal}>
            {modalContent()}
        </Modal>
    );
};

export default FederationJoinModal;