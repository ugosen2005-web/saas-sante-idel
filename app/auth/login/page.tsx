export default function LoginPage() {
  return (
    <section className="grid" style={{ gap: "24px" }}>
      <div>
        <h1>Connexion</h1>
        <p>Accédez à votre espace IDEL.</p>
      </div>
      <div className="card">
        <form>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Mot de passe" required />
          <button className="button" type="submit">
            Se connecter
          </button>
        </form>
      </div>
    </section>
  );
}
