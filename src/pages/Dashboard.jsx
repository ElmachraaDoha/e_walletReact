import Header from "../Components/Header";
import Footer from "../Components/Footer";
import React, { useState } from 'react';

export default function Dashboard() {
  const [showTransfer, setShowTransfer] = useState(false);
  const [showRecharge, setShowRecharge] = useState(false);

  return (
    <>
      <Header/>
      <main className="dashboard-main">
        <div className="dashboard-container">
          
          {/* Sidebar Navigation */}
          <aside className="dashboard-sidebar">
            <nav className="sidebar-nav">
              <ul>
                <li className="active">
                  <a href="#overview"><i className="fas fa-home"></i> <span>Vue d'ensemble</span></a>
                </li>
                <li>
                  <a href="#transactions"><i className="fas fa-exchange-alt"></i> <span>Transactions</span></a>
                </li>
                <li>
                  <a href="#cards"><i className="fas fa-credit-card"></i> <span>Mes cartes</span></a>
                </li>
                <li>
                  <a href="#transfers"><i className="fas fa-paper-plane"></i> <span>Transferts</span></a>
                </li>
                <li className="separator"></li>
                <li>
                  <a href="#support"><i className="fas fa-headset"></i> <span>Aide & Support</span></a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Content Area */}
          <div className="dashboard-content">
            <section id="overview" className="dashboard-section active">
              <div className="section-header">
                <h2>Bonjour, <span id="greetingName">?</span> !</h2>
                <p className="date-display" id="currentDate">13 Avril 2026</p>
              </div>

              {/* Summary Cards */}
              <div className="summary-cards">
                <div className="summary-card">
                  <div className="card-icon blue"><i className="fas fa-wallet"></i></div>
                  <div className="card-details">
                    <span className="card-label">Solde disponible</span>
                    <span className="card-value" id="availableBalance">?</span>
                  </div>
                </div>

                <div className="summary-card">
                  <div className="card-icon green"><i className="fas fa-arrow-up"></i></div>
                  <div className="card-details">
                    <span className="card-label">Revenus</span>
                    <span className="card-value" id="monthlyIncome">?</span>
                  </div>
                </div>

                <div className="summary-card">
                  <div className="card-icon red"><i className="fas fa-arrow-down"></i></div>
                  <div className="card-details">
                    <span className="card-label">Dépenses</span>
                    <span className="card-value" id="monthlyExpenses">?</span>
                  </div>
                </div>

                <div className="summary-card">
                  <div className="card-icon purple"><i className="fas fa-credit-card"></i></div>
                  <div className="card-details">
                    <span className="card-label">Cartes actives</span>
                    <span className="card-value" id="activeCards">?</span>
                  </div>
                </div>
              </div>

              {/* Actions Rapides */}
              <div className="quick-actions">
                <h3>Actions rapides</h3>
                <div className="action-buttons">
                  <button className="action-btn" onClick={() => setShowTransfer(true)}>
                    <i className="fas fa-paper-plane"></i> <span>Transférer</span>
                  </button>
                  <button className="action-btn" onClick={() => setShowRecharge(true)}>
                    <i className="fas fa-plus-circle"></i> <span>Recharger</span>
                  </button>
                  <button className="action-btn">
                    <i className="fas fa-hand-holding-usd"></i> <span>Demander</span>
                  </button>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="recent-transactions">
                <div className="section-header">
                  <h3>Transactions récentes</h3>
                </div>
                <div className="transactions-list" id="recentTransactionsList">
                  <div className="transaction-item">
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Transfer Section */}
        <section id="transfer-section" className={showTransfer ? "" : "hidden"}>
          <div className="section-header">
            <h2>Effectuer un transfert</h2>
            <button className="btn btn-close" onClick={() => setShowTransfer(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="transfer-container">
            <form id="transferForm" className="transfer-form">
              <div className="form-group">
                <label htmlFor="beneficiary"><i className="fas fa-user"></i> Bénéficiaire</label>
                <select id="beneficiary" required>
                  <option value="" disabled selected>Choisir un bénéficiaire</option>
                </select>
              </div>
              <div className="form-actions">
                <button type="button" className="btn btn-secondary" onClick={() => setShowTransfer(false)}>Annuler</button>
                <button type="submit" className="btn btn-primary">Transférer</button>
              </div>
            </form>
          </div>
        </section>

        {/* Recharge Section  */}
        <section id="recharger-section" className={showRecharge ? "" : "hidden"}>
          <div className="section-header">
            <h2>Effectuer une Recharge</h2>
            <button className="btn btn-close" onClick={() => setShowRecharge(false)}>
              <i className="fas fa-times"></i>
            </button>
          </div>
          <form id="rechargeForm" className="Recharger-container">
            <div className="form-group">
              <label htmlFor="rechargeAmount"><i className="fas fa-coins"></i> Montant</label>
              <div className="amount-input">
                <input type="number" id="rechargeAmount" placeholder="0.00" required />
                <span className="currency">MAD</span>
              </div>
            </div>
            <div className="form-actions">
              <button type="button" className="btn btn-secondary" onClick={() => setShowRecharge(false)}>Annuler</button>
              <button type="submit" className="btn btn-primary">Recharger</button>
            </div>
          </form>
        </section>
      </main>
      <Footer/>
    </>
  );
}