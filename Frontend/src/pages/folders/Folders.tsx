// src/pages/app/Folders.tsx
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Search, FolderOpen, FileText, Calendar } from "lucide-react";

import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { FolderContentDialog } from "../../components/blocks/FolderContentDialog";
import { folderApi, type FolderSummary } from "../../api/client";

export default function Folders() {
  const nav = useNavigate();

  // UI state
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Data
  const [folders, setFolders] = useState<FolderSummary[]>([]);

  // Dialog
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [selectedFolderColor, setSelectedFolderColor] = useState("#6F3DFF");

  // Si pas de token -> login
  useEffect(() => {
    if (!localStorage.getItem("rayonn:token")) nav("/login");
  }, [nav]);

  // Charger les dossiers
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        setLoading(true);
        const data = await folderApi.list();
        if (alive) setFolders(data);
      } catch (e: any) {
        if (alive) setError(e?.message || "Erreur de chargement");
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  // Filtre recherche
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return folders;
    return folders.filter((f) => f.name.toLowerCase().includes(q));
  }, [folders, search]);

  // Création dossier
  async function handleCreateFolder() {
    const name = prompt("Nom du dossier ?");
    if (!name) return;
    const color = "#6F3DFF";
    try {
      const created = await folderApi.create({ name, color });
      // On préfixe pour voir le nouveau immédiatement
      setFolders((prev) => [created, ...prev]);
    } catch (e: any) {
      alert(e?.message || "Impossible de créer le dossier.");
    }
  }

  return (
    <div className="flex-1 overflow-auto p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[var(--color-text-primary)] mb-2">
              Mes dossiers
            </h1>
            <p className="text-[var(--color-text-muted)]">
              Organise tes matières et tes documents
            </p>
          </div>
          <Button
            onClick={handleCreateFolder}
            className="bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-mid)] hover:opacity-90 gap-2"
          >
            <Plus className="w-5 h-5" />
            Nouveau dossier
          </Button>
        </div>

        {/* Search */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white/50">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--color-text-muted)] pointer-events-none z-10" />
            <Input
              type="search"
              placeholder="Rechercher un dossier..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="!pl-12 h-12 rounded-xl bg-white border-gray-200"
            />
          </div>
        </div>

        {/* States */}
        {loading && <p className="text-sm text-[var(--color-text-muted)]">Chargement…</p>}
        {error && (
          <p className="text-sm text-red-600">
            {error} — vérifie que tu es connecté et que l’API tourne.
          </p>
        )}

        {/* Empty state */}
        {!loading && !error && filtered.length === 0 && (
          <div className="text-center text-[var(--color-text-muted)] py-12">
            Aucun dossier. Clique sur <b>Nouveau dossier</b> pour commencer.
          </div>
        )}

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((folder) => {
            const color = folder.color || "#6F3DFF";
            return (
              <div
                key={folder.id}
                onClick={() => {
                  setSelectedFolderId(folder.id);
                  setSelectedFolderColor(color);
                }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:shadow-lg transition-all cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${color}20` }}
                  >
                    <FolderOpen className="w-6 h-6" style={{ color }} />
                  </div>
                  <div className="w-1.5 h-full rounded-full" style={{ backgroundColor: color }} />
                </div>

                <h3 className="font-semibold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-primary-mid)] transition-colors">
                  {folder.name}
                </h3>

                <div className="flex items-center justify-between text-sm text-[var(--color-text-muted)]">
                  <div className="flex items-center gap-1">
                    <FileText className="w-4 h-4" />
                    <span>{folder.file_count} fichiers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{folder.last_modified ?? "—"}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dialog contenu du dossier */}
      <FolderContentDialog
        open={selectedFolderId !== null}
        onOpenChange={(open) => !open && setSelectedFolderId(null)}
        folderId={selectedFolderId}
        folderColor={selectedFolderColor}
      />
    </div>
  );
}
