import { useParams } from "react-router-dom";

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();

  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxId)
  );

  const selectedLetters = props.letters.filter(
    (letter) => letter.mailboxId === Number(mailboxId)
  );

  if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>;
  }

  return (
    <main>
      <h2>Mailbox {selectedBox._id}</h2>

      <p>Owner: {selectedBox.boxOwner}</p>

      <p>Size: {selectedBox.boxSize}</p>

      <h3>Letters</h3>

      {selectedLetters.length === 0 ? (
        <p>No letters yet</p>
      ) : (
        selectedLetters.map((letter, index) => (
          <div key={index} className="mail-box">
            <p><strong>To:</strong> {letter.recipient}</p>
            <p>{letter.message}</p>
          </div>
        ))
      )}
    </main>
  );
};

export default MailboxDetails;