import BadgesSection from './components/badges/BadgesSection';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main
      style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}
    >
      <BadgesSection />
      <Navbar/>
    </main>
  );
}
