import { Link } from "react-router-dom"

const MailboxList = (props) => {

  return (
    <main>

      <h2>Mailboxes</h2>

      {props.mailboxes.map((mailbox) => (

        <div key={mailbox._id} className="mail-box">

          <Link to={`/mailboxes/${mailbox._id}`}>
            Mailbox {mailbox._id}
          </Link>

        </div>

      ))}

    </main>
  )
}

export default MailboxList