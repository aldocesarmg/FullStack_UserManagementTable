import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export function AddUserModal() {
    const [openModal, setOpenModal] = useState(false);
    return(
        <>
            <Button onClick={() => setOpenModal(true)}><FontAwesomeIcon icon={faPlus} className='mx-2'/> Add new user</Button>
            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Add New User</Modal.Header>
                <Modal.Body>
                    <h1>Hello world</h1>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}