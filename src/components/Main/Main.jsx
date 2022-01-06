import './Main.css'

function Main(props){
    return <main className="emails">
    <ul>
      {props.filteredEmails.map((email, index) => (
        <li
          key={index}
          className={`email ${email.read ? 'read' : 'unread'}`}
        >
          <div className="select">
            <input
              className="select-checkbox"
              type="checkbox"
              checked={email.read}
              onChange={() => props.toggleRead(email)}
            />
          </div>
          <div className="star">
            <input
              className="star-checkbox"
              type="checkbox"
              checked={email.starred}
              onChange={() => props.toggleStar(email)}
            />
          </div>
          <div className="sender">{email.sender}</div>
          <div className="title">{email.title}</div>
        </li>
      ))}
    </ul>
  </main>
}

export default Main