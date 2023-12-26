import GitHubSvg from "../assets/gh-white.svg";

export default function Footer() {
  return (
    <footer id="footer">
      <p>
        Made by{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/BalazsBanfi"
        >
          Balázs Bánfi
          <img id="footer-img" alt="footer image" src={GitHubSvg} />
        </a>
      </p>
    </footer>
  );
}
