import Router from './router';

import Footer from './components/organisms/footer';
import Header from './components/organisms/header';

export default function App() {
  return (
    <div className="p-4">
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}
