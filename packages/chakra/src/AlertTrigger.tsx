import React, { useRef, ReactNode, ReactElement } from 'react'

import {
  Button,
  ButtonProps,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
  useBoolean,
} from '@chakra-ui/react'

interface Props {
  trigger: (openAlert: () => void) => ReactElement
  body: ReactNode
  headerLabel: string
  actionLabel: string
  actionButtonProps?: ButtonProps
  cancelLabel?: string
  closeOnError?: boolean
  action?: (...args: any[]) => any
  onError?: (error: Error, closeAlert?: () => void) => any
}

const AlertTrigger = ({
  trigger,
  body,
  headerLabel,
  cancelLabel = 'Cancel',
  actionButtonProps,
  actionLabel,
  action,
  onError,
  closeOnError = false
}: Props) => {
  const { isOpen: isAlertOpen, onOpen: openAlert, onClose: closeAlert } = useDisclosure()
  const [isActionLoading, { on: enableActionLoading, off: disableActionLoading }] = useBoolean()
  const cancelDeleteRef = useRef(null)

  const handleActionButtonClick = async () => {
    enableActionLoading()
    try {
      action && (await action())
      closeAlert()
    } catch (err) {
      closeOnError && closeAlert()
      onError && onError(err)
    }
    disableActionLoading()
  }

  return (
    <>
      {trigger(openAlert)}
      <AlertDialog isOpen={isAlertOpen} leastDestructiveRef={cancelDeleteRef} onClose={closeAlert}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {headerLabel}
            </AlertDialogHeader>
            <AlertDialogBody>{body}</AlertDialogBody>
            <AlertDialogFooter>
              <Button ref={cancelDeleteRef} onClick={closeAlert}>
                {cancelLabel}
              </Button>
              <Button
                onClick={handleActionButtonClick}
                isLoading={isActionLoading}
                ml={3}
                {...actionButtonProps}
              >
                {actionLabel}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
export default AlertTrigger
