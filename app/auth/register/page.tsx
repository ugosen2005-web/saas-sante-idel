export default function RegisterPage() {
  return (
    <section className="grid" style={{ gap: "24px" }}>
      <div>
        <h1>Créer un compte</h1>
        <p>14 jours d'essai gratuits, puis 19 €/mois.</p>
      </div>
      <div className="card">
        <form>
          <input type="text" name="name" placeholder="Nom" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Mot de passe" required />
          <button className="button" type="submit">
            Démarrer l'essai gratuit
          </button>
        </form>
      </div>
    </section>
  );
}
