
function App() {
  return (
      <div className="App">
        <header>
          <a href="/" className="logo">
            <h3>Butcher Without Acid Blog</h3>
          </a>
          <nav>
            <ul>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            <h2>Обо мне</h2>
            <article>
              <h3>Красные флаги в парнях</h3>
              <p>Если ты не понимаешь, когда стоит попращаться с парнем, чтобы не травмировать свою психику, тогда эта
                статья точно для тебя! </p>
            </article>
          </section>

          <aside>
            <h2>Мама была права</h2>
            <p>Телефон, <strong>интернет и социальные сети</strong> реально разрушили мою жизнь.</p>
          </aside>
        </main>
        <footer>
          <blockquote>
            <p><em>Господи, пускай в 2018 году снизят цены на рыболовные снасти</em></p>
            <p>- Виктория Курилова</p>
          </blockquote>
          <section>
            <h2>Формула успеха</h2>
            <p>Успех = <sup>Только мы сами можем ловить кринж с себя </sup>&frasl;<sub>Вы не можете.</sub></p>
          </section>
          <pre>
                        <code>
                            console.log("Не верущие в Бога такие: ЭЭЭ Должно быть этот блог ведет учёный")
                        </code>
                    </pre>
        </footer>
      </div>
  );
}

export default App;