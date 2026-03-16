import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LetterForm = (props) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    mailboxId: "",
    recipient: "",
    message: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.addLetter({
      ...formData,
      mailboxId: Number(formData.mailboxId),
    });

    navigate(`/mailboxes/${formData.mailboxId}`);
  };

  return (
    <main>
      <h2>New Letter</h2>

      <form onSubmit={handleSubmit}>
        <label>Mailbox</label>

        <select
          name="mailboxId"
          value={formData.mailboxId}
          onChange={handleChange}
        >
          <option value="">Select a mailbox</option>

          {props.mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id}>
              Mailbox {mailbox._id}
            </option>
          ))}
        </select>

        <label>Recipient</label>

        <input
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
        />

        <label>Message</label>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Send Letter</button>
      </form>
    </main>
  );
};

export default LetterForm;