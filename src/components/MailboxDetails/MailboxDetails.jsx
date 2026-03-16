import { useParams } from "react-router-dom"

const MailboxDetails = (props) => {

  const { mailboxId } = useParams()

  const selectedBox = props.mailboxes.find(
    mailbox => mailbox._id === Number(mailboxId)
  )

  if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>
  }

  return (
    <main>

      <h2>Mailbox {selectedBox._id}</h2>

      <p>Owner: {selectedBox.boxOwner}</p>

      <p>Size: {selectedBox.boxSize}</p>

    </main>
  )
}

export default MailboxDetails