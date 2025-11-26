import React, { useEffect, useState } from "react";
import { fetchSpells } from "../api/spells";
import PageWrapper from "../components/PageWrapper";
import Sidebar from "../components/Sidebar";
import SpellCard from "../components/SpellCard";
import { Menu } from "lucide-react";

const SpellsPage = () => {
  const [spells, setSpells] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchSpells();
        setSpells(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    load();
  }, []);

  return (
    <div className="flex min-h-screen">
      {!sidebarOpen && (
        <button
          className="lg:hidden fixed top-4 left-4 z-40 text-[#FDD42D] "
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>
      )}

      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 lg:ml-[270px]">
        <div className="bg-[url('/images/spells-bg.jpg')] bg-cover bg-[position:calc(50%+20px)_center] w-full bg-fixed">
          <div className="min-h-screen bg-black/75">
            <PageWrapper>
              <h1 className="flex justify-center mb-4 lg:justify-start font-heading text-4xl sm:text-6xl lg:text-[96px] text-center text-[#FDD42D]">
                Spells
              </h1>

              {loading && (
                <div className="flex justify-center items-center h-40">
                  <p className="text-[#FDD42D] font-body text-xl">
                    Loading spells...
                  </p>
                </div>
              )}

              {error && (
                <div className="flex justify-center items-center h-40">
                  <p className="text-[#FDD42D] font-body text-xl">
                    Error: {error}
                  </p>
                </div>
              )}

              {!loading && !error && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                  {spells.map((spell) => (
                    <SpellCard key={spell.id} spell={spell} />
                  ))}
                </div>
              )}
            </PageWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpellsPage;
