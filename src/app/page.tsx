import { container } from "./styles.css";

export default function Home() {
  return (
    <div className={container}>
      <h1>제목입니다</h1>
      <h2>부제목입니다</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
        similique, veniam fuga illo a reiciendis, maxime necessitatibus neque
        iure magnam vel dolorum beatae veritatis facilis incidunt nobis.
        Voluptates, eveniet sunt?
      </p>
      <button>버튼입니다</button>
    </div>
  );
}
