import React, { useRef, ReactElement, RefObject } from 'react'

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertProps,
  useDisclosure,
} from '@chakra-ui/react'

type AlertPropsWithOmission = Omit<AlertProps, 'children' | 'isOpen' | 'onClose'>

interface Props {
  trigger: (openAlert: () => void) => ReactElement
  children: ({
    leastDestructiveRef,
    closeAlert,
  }: {
    leastDestructiveRef: RefObject<any>
    closeAlert: () => void
  }) => ReactElement
  alertProps?: AlertPropsWithOmission
}

const AlertTrigger = ({ trigger, children, alertProps }: Props) => {
  const { isOpen, onOpen: openAlert, onClose: closeAlert } = useDisclosure()
  const leastDestructiveRef = useRef(null)

  return (
    <>
      {trigger(openAlert)}
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={leastDestructiveRef}
        onClose={closeAlert}
        {...alertProps}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>{children({ leastDestructiveRef, closeAlert })}</AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
export default AlertTrigger
