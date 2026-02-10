const acts = [
  { id: "1", date: "2024-03-05", type: "AMI", amount: 32 },
  { id: "2", date: "2024-03-06", type: "AIS", amount: 27 },
  { id: "3", date: "2024-03-08", type: "IFD", amount: 15 }
];

export default function ActsPage() {
  return (
    <section className="grid" style={{ gap: "24px" }}>
      <div>
        <h1>Gestion des actes</h1>
        <p>Créer, modifier ou supprimer vos actes.</p>
      </div>
      <div className="card">
        <h3>Nouvel acte</h3>
        <form>
          <input type="date" name="date" required />
          <select name="type" required>
            <option value="">Type d'acte</option>
            <option value="AMI">AMI</option>
            <option value="AIS">AIS</option>
            <option value="IFD">IFD</option>
          </select>
          <input type="number" name="amount" placeholder="Montant (€)" required />
          <button className="button" type="submit">
            Enregistrer
          </button>
        </form>
      </div>
      <div className="card">
        <h3>Liste des actes</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Montant</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {acts.map((act) => (
              <tr key={act.id}>
                <td>{act.date}</td>
                <td>{act.type}</td>
                <td>{act.amount} €</td>
                <td>
                  <button className="button secondary" type="button">
                    Modifier
                  </button>
                  <button className="button" type="button" style={{ marginLeft: "8px" }}>
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
