export default function ProfileCard() {
  return (
    <div className="card-dev">
      <div>

        <img src="images/image.jpg" alt="Profile" className="border-full"/>

        <div>
          <p>Nome</p>
          <p>Profissão</p>
        </div>

        <div>
          <ul> contato
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </ul>
        </div>

        <div>
          <ul>
            <li>Habilidade 1</li>
            <li>Habilidade 2</li>
            <li>Habilidade 3</li>
            <li>Habilidade 4</li>
          </ul>
        </div>

        <div>
          <button>Download CV</button>
        </div>

      </div>
    </div>

  )
}   