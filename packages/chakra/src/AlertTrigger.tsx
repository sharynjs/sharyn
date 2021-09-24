import React, { useRef, ReactElement, RefObject } from 'react'

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from '@chakra-ui/react'

interface Props {
  trigger: (openAlert: () => void) => ReactElement
  children: ({
    leastDestructiveRef,
    closeAlert,
  }: {
    leastDestructiveRef: RefObject<any>
    closeAlert: () => void
  }) => ReactElement
}

const AlertTrigger = ({ trigger, children }: Props) => {
  const { isOpen, onOpen: openAlert, onClose: closeAlert } = useDisclosure()
  const leastDestructiveRef = useRef(null)

  return (
    <>
      {trigger(openAlert)}
      <AlertDialog isOpen={isOpen} leastDestructiveRef={leastDestructiveRef} onClose={closeAlert}>
        <AlertDialogOverlay>
          <AlertDialogContent>{children({ leastDestructiveRef, closeAlert })}</AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}
export default AlertTrigger

// For reference, this implementation was possible but messy with TypeScript and too restrictive:
// <AlertTrigger trigger={openAlert => <Button onClick={openAlert}>Open</Button>}>
//   <AlertContent text="Kikoo" />
// </AlertTrigger>

// import React, { useRef, cloneElement, Children, ReactElement, RefObject } from 'react'

// import {
//   AlertDialog,
//   AlertDialogContent,
//   AlertDialogOverlay,
//   useDisclosure,
// } from '@chakra-ui/react'

// interface Props {
//   trigger: (openAlert: () => void) => ReactElement
//   children: ReactElement
// }

// export interface AlertContentProps {
//   leastDestructiveRef?: RefObject<any>
//   closeAlert?: () => void
//   [x: string]: unknown
// }

// const AlertTrigger = ({ trigger, children }: Props) => {
//   const { isOpen, onOpen: openAlert, onClose: closeAlert } = useDisclosure()
//   const leastDestructiveRef = useRef(null)
//   const Child = Children.only(children)
//   const ChildWithProps = cloneElement(Child, { leastDestructiveRef, closeAlert })

//   return (
//     <>
//       {trigger(openAlert)}
//       <AlertDialog isOpen={isOpen} leastDestructiveRef={leastDestructiveRef} onClose={closeAlert}>
//         <AlertDialogOverlay>
//           <AlertDialogContent>{ChildWithProps}</AlertDialogContent>
//         </AlertDialogOverlay>
//       </AlertDialog>
//     </>
//   )
// }
// export default AlertTrigger
