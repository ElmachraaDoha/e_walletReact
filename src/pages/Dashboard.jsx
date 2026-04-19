import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { useState } from "react";

export default function Dashboard({ setIsLoggedIn }) {

  const [user, setUser] = useState({
    name: "Ali",
    balance: 5000,
    income: 2000,
    expenses: 800,
    cards: [
      { num: "**** 4242", type: "Visa" }
    ],
    transactions: [
      { id: 1, type: "credit", from: "Salary", amount: 2000, date: "13/04/2026" },
      { id: 2, type: "debit", to: "Amazon", amount: 300, date: "12/04/2026" }
    ]
  });

  const [amount, setAmount] = useState("");
  const [showTransfer, setShowTransfer] = useState(false);
  const [showRecharge, setShowRecharge] = useState(false);

  // 💸 TRANSFER
  const transferMoney = () => {
    const value = Number(amount);
    if (!value || value <= 0) return;

    setUser(prev => ({
      ...prev,
      balance: prev.balance - value,
      transactions: [
        {
          id: Date.now(),
          type: "debit",
          to: "Beneficiary",
          amount: value,
          date: new Date().toLocaleDateString()
        },
        ...prev.transactions
      ]
    }));

    setAmount("");
    setShowTransfer(false);
  };

  // 💰 RECHARGE
  const rechargeMoney = () => {
    const value = Number(amount);
    if (!value || value <= 0) return;

    setUser(prev => ({
      ...prev,
      balance: prev.balance + value,
      transactions: [
        {
          id: Date.now(),
          type: "credit",
          from: "Recharge",
          amount: value,
          date: new Date().toLocaleDateString()
        },
        ...prev.transactions
      ]
    }));

    setAmount("");
    setShowRecharge(false);
  };

  return (
    <>
      <Header />

      <main className="dashboard-main">
        <div className="dashboard-container">

          {/* SIDEBAR (same as old HTML) */}
          <aside className="dashboard-sidebar">
            <ul>
              <li className="active">Vue d'ensemble</li>
              <li>Transactions</li>
              <li>Cartes</li>
              <li>Transferts</li>
            </ul>

            <button onClick={() => setIsLoggedIn(false)}>
              Logout
            </button>
          </aside>

          {/* CONTENT */}
          <div className="dashboard-content">

            {/* OVERVIEW HEADER */}
            <div className="section-header">
              <h2>Bonjour, <span>{user.name}</span> !</h2>
              <p>{new Date().toLocaleDateString()}</p>
            </div>

            {/* SUMMARY CARDS (same structure as old dashboard) */}
            <div className="summary-cards">

              <div className="summary-card">
                <span>Solde disponible</span>
                <h3>{user.balance} MAD</h3>
              </div>

              <div className="summary-card">
                <span>Revenus</span>
                <h3>{user.income} MAD</h3>
              </div>

              <div className="summary-card">
                <span>Dépenses</span>
                <h3>{user.expenses} MAD</h3>
              </div>

              <div className="summary-card">
                <span>Cartes actives</span>
                <h3>{user.cards.length}</h3>
              </div>

            </div>

            {/* QUICK ACTIONS (same idea as old HTML buttons) */}
            <div className="quick-actions">
              <button onClick={() => setShowTransfer(true)}>
                Transférer
              </button>

              <button onClick={() => setShowRecharge(true)}>
                Recharger
              </button>
            </div>

            {/* TRANSACTIONS LIST */}
            <div className="recent-transactions">
              <h3>Transactions récentes</h3>

              {user.transactions.map(t => (
                <div key={t.id} className="transaction-item">
                  <span>
                    {t.type === "credit"
                      ? `De: ${t.from}`
                      : `À: ${t.to}`}
                  </span>
                  <span>{t.amount} MAD</span>
                  <small>{t.date}</small>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* TRANSFER SECTION (same as old HTML behavior) */}
        {showTransfer && (
          <section className="modal">
            <h2>Effectuer un transfert</h2>

            <input
              type="number"
              placeholder="Montant"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <button onClick={transferMoney}>Transférer</button>
            <button onClick={() => setShowTransfer(false)}>Annuler</button>
          </section>
        )}

        {/* RECHARGE SECTION */}
        {showRecharge && (
          <section className="modal">
            <h2>Effectuer une recharge</h2>

            <input
              type="number"
              placeholder="Montant"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />

            <button onClick={rechargeMoney}>Recharger</button>
            <button onClick={() => setShowRecharge(false)}>Annuler</button>
          </section>
        )}

      </main>

      <Footer />
    </>
  );
}