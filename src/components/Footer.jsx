import Logo from "../assets/gh-white.svg";

export default function Footer() {
  return (
    <footer>
      <p>
        produced by Balázs Bánfi gh logo
        <a href="https://github.com/BalazsBanfi/CV-generator">
          <img src={Logo} alt="github" />
        </a>
      </p>
    </footer>
  );
}
