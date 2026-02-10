export default function SettingsPage() {
  return (
    <section className="grid" style={{ gap: "24px" }}>
      <div>
        <h1>Paramètres</h1>
        <p>Configurez le taux de charges pour les estimations automatiques.</p>
      </div>
      <div className="card">
        <h3>Charges</h3>
        <form>
          <label>
            Taux de charges (%)
            <input type="number" name="charges" defaultValue={22} min={0} max={100} />
          </label>
          <button className="button" type="submit">
            Enregistrer
          </button>
        </form>
      </div>
    </section>
  );
}
