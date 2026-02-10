import Link from "next/link";

export default function HomePage() {
  return (
    <section className="grid" style={{ gap: "24px" }}>
      <div className="card">
        <h1>IDEL SaaS</h1>
        <p>
          MVP simple pour suivre les revenus, gérer les actes, estimer les charges et exporter les
          données.
        </p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link className="button" href="/auth/register">
            Créer un compte
          </Link>
          <Link className="button secondary" href="/auth/login">
            Se connecter
          </Link>
        </div>
      </div>
      <div className="grid grid-3">
        <div className="card">
          <h3>Revenus mensuels</h3>
          <p>Suivi du chiffre d'affaires par mois.</p>
        </div>
        <div className="card">
          <h3>Actes</h3>
          <p>Créer, modifier, supprimer les actes.</p>
        </div>
        <div className="card">
          <h3>Export</h3>
          <p>PDF et CSV pour les périodes mensuelles ou trimestrielles.</p>
        </div>
      </div>
    </section>
  );
}
