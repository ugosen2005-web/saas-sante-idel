import "../styles/globals.css";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "IDEL SaaS",
  description: "MVP SaaS pour infirmiers libéraux"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <nav>
          <Link href="/">Accueil</Link>
          <Link href="/dashboard">Tableau de bord</Link>
          <Link href="/acts">Actes</Link>
          <Link href="/settings">Paramètres</Link>
          <Link href="/auth/login">Connexion</Link>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
