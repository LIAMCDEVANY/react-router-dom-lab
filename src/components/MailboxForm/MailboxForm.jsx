import { useState } from "react"
import { useNavigate } from "react-router-dom"

const MailboxForm = (props) => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    boxOwner: "",
    boxSize: "Small"
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    props.addBox(formData)

    navigate("/mailboxes")
  }

  return (
    <main>

      <h2>New Mailbox</h2>

      <form onSubmit={handleSubmit}>

        <label>Owner</label>

        <input
          name="boxOwner"
          value={formData.boxOwner}
          onChange={handleChange}
        />

        <label>Box Size</label>

        <select
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        >
          <option>Small</option>
          <option>Medium</option>
          <option>Large</option>
        </select>

        <button type="submit">
          Create Mailbox
        </button>

      </form>

    </main>
  )
}

export default MailboxForm