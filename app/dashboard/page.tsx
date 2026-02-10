import { estimateCharges } from "../../lib/finance";

const dashboardData = {
  month: "Mars 2024",
  revenue: 4820,
  acts: 128,
  comparison: 0.12,
  chargesPercentage: 22
};

export default function DashboardPage() {
  const comparisonPercent = Math.round(dashboardData.comparison * 100);
  const comparisonLabel = comparisonPercent >= 0 ? `+${comparisonPercent}%` : `${comparisonPercent}%`;

  const chargesEstimate = estimateCharges(
    dashboardData.revenue,
    dashboardData.chargesPercentage
  );

  return (
    <section className="grid" style={{ gap: "24px" }}>
      <div>
        <h1>Tableau de bord</h1>
        <p>Vue mensuelle pour suivre votre activité IDEL.</p>
      </div>
      <div className="grid grid-3">
        <div className="card">
          <h3>Revenus mensuels</h3>
          <p style={{ fontSize: "24px", fontWeight: 700 }}>{dashboardData.revenue} €</p>
          <small>{dashboardData.month}</small>
        </div>
        <div className="card">
          <h3>Nombre d'actes</h3>
          <p style={{ fontSize: "24px", fontWeight: 700 }}>{dashboardData.acts}</p>
          <small>{dashboardData.month}</small>
        </div>
        <div className="card">
          <h3>Comparaison mois précédent</h3>
          <p style={{ fontSize: "24px", fontWeight: 700 }}>{comparisonLabel}</p>
          <small>Évolution mensuelle</small>
        </div>
        <div className="card">
          <h3>Estimation des charges</h3>
          <p style={{ fontSize: "24px", fontWeight: 700 }}>{chargesEstimate} €</p>
          <small>{dashboardData.chargesPercentage}% du CA</small>
        </div>
      </div>
      <div className="card">
        <h3>Export</h3>
        <p>Sélectionnez une période pour exporter vos données en PDF ou CSV.</p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <button className="button" type="button">
            Export mensuel (PDF)
          </button>
          <button className="button secondary" type="button">
            Export mensuel (CSV)
          </button>
          <button className="button" type="button">
            Export trimestriel (PDF)
          </button>
          <button className="button secondary" type="button">
            Export trimestriel (CSV)
          </button>
        </div>
      </div>
    </section>
  );
}
