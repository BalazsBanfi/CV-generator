import GitHubSvg from "../assets/gh-white.svg";

export default function Footer() {
  return (
    <footer id="footer">
      <p>
        Made by Balázs Bánfi
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/BalazsBanfi"
        >
          <img id="footer-img" src={GitHubSvg} />
        </a>
      </p>
    </footer>
  );
}
