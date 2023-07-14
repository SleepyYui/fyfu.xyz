import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Fyfu Website',
  description: 'Some description c:',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container mx-auto c">
          <header>
            <nav className="bg-gray-100">
              <div className="container mx-auto">
                <div className="flex py-4 items-center">
                  <a className="text-xl text-gray-800" href="/">
                    FyFu.xyz
                  </a>
                  <div className="ml-4">
                    <ul className="flex space-x-4">
                      <li className="nav-item">
                        <a className="text-gray-600 hover:text-gray-800" href="/">
                          Home
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="text-gray-600 hover:text-gray-800" href="/mc-server">
                          Minecraft Server
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </header>
          {children}
          <footer>
            <p className="text-center text-muted">
              &copy; 2023 FyFu.xyz and its contributors
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
