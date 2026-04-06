import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Pageheader from "./PageHeader/pageheader";
import ThemeToggler from "./components/ThemeToggler/ThemeToggler";
import CustomFooter from "./Footer";
export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <div>
          <Pageheader />
          <Navbar />
          {children}
          <CustomFooter/>
          <ThemeToggler/>
        </div>
      </body>
    </html>
  );
}
