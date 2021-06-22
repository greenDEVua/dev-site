import './App.scss';
import generalInfo from './content/general';

import Logo from './assets/images/logo.svg';

function App() {
  return (
    <div className="App">
      <img className="logo" src={Logo} alt={generalInfo.logoAltText} />
      <h1 className="name">{generalInfo.name}</h1>
      <ul className="socials">
        {generalInfo.socials.map(network => (
          <li className="socials__item">
            <a className="socials__link" target="_blank" href={network.link} title={network.titleOnHover}>
              <img className="socials__icon" src={network.icon} alt={network.altText} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
