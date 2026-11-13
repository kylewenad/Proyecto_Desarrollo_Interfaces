export default function Navbar() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">HOME</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">MEN'S</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">WOMEN'S</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">NEW ARRIVALS</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">ABOUT US</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">LOGIN</a>
      </li>
    </ul>
  )
}