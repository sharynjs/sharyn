import React, { ReactElement } from 'react'

import { Modal, ModalOverlay, ModalContent, ModalProps, useDisclosure } from '@chakra-ui/react'

type ModalPropsWithOmission = Omit<ModalProps, 'children' | 'isOpen' | 'onClose'>

interface Props {
  trigger: (openModal: () => void) => ReactElement
  children: (closeModal: () => void) => ReactElement
  modalProps?: ModalPropsWithOmission
}

const ModalTrigger = ({ trigger, children, modalProps }: Props) => {
  const { isOpen, onOpen: openModal, onClose: closeModal } = useDisclosure()

  return (
    <>
      {trigger(openModal)}
      <Modal isOpen={isOpen} onClose={closeModal} {...modalProps}>
        <ModalOverlay>
          <ModalContent>{children(closeModal)}</ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  )
}
export default ModalTrigger
