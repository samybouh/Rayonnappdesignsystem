import { useState, useMemo, useEffect, useCallback } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Search, Plus, FileText } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { folderApi, type FolderDetails, type FolderFile } from '../../api/client';
import { AddCourseDialog } from './AddCourseDialog';

interface FolderContentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  folderId: number | null;
  folderColor?: string;
}

export function FolderContentDialog({
  open,
  onOpenChange,
  folderId,
  folderColor = '#6F3DFF',
}: FolderContentDialogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [addCourseOpen, setAddCourseOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError]   = useState<string | null>(null);
  const [details, setDetails] = useState<FolderDetails | null>(null);

  // charge/rafraîchit le dossier
  const load = useCallback(async () => {
    if (!open || !folderId) return;
    try {
      setLoading(true);
      setError(null);
      const d = await folderApi.get(folderId);
      setDetails(d);
    } catch (e: any) {
      setError(e?.message || 'Erreur de chargement du dossier');
    } finally {
      setLoading(false);
    }
  }, [open, folderId]);

  useEffect(() => { load(); }, [load]);

  // reset recherche quand on ferme
  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) setSearchQuery('');
    onOpenChange(newOpen);
  };

  // filtrage simple par nom
  const files: FolderFile[] = details?.files ?? [];
  const filtered = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return files;
    return files.filter(f => f.name.toLowerCase().includes(q));
  }, [files, searchQuery]);

  const fileCount = files.length;
  const folderName = details?.name ?? '';

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="!max-w-[900px] sm:!max-w-[900px] w-[95vw] max-h-[85vh] overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 border-2 border-white/50 shadow-2xl p-0"
        aria-describedby={undefined}
      >
        <DialogHeader className="p-6 pb-4 border-b border-purple-100/50">
          <DialogTitle className="text-2xl font-semibold text-purple-900 flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
              style={{ backgroundColor: `${folderColor}20`, color: folderColor }}
            >
              📂
            </div>
            {folderName}
          </DialogTitle>
          <p className="text-sm text-purple-600 mt-1">
            {fileCount} fichier{fileCount > 1 ? 's' : ''}
          </p>
        </DialogHeader>

        <div className="overflow-y-auto max-h-[calc(85vh-140px)] p-6 space-y-4">
          {/* Barre d’outils */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400 pointer-events-none z-10" />
              <Input
                type="text"
                placeholder="Rechercher un fichier…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="!pl-12 bg-white/60 border-purple-200 text-purple-900 placeholder:text-purple-400 hover:bg-white focus:bg-white transition-colors"
              />
            </div>

            <Button
              onClick={() => setAddCourseOpen(true)}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-sm whitespace-nowrap"
            >
              <Plus className="w-4 h-4 mr-2" />
              Ajouter un cours
            </Button>
          </div>

          {/* États de chargement / erreur */}
          {loading && (
            <p className="text-sm text-purple-700">Chargement…</p>
          )}
          {error && (
            <p className="text-sm text-red-600">{error}</p>
          )}

          {/* Liste des fichiers */}
          {!loading && !error && (
            <>
              {filtered.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-3">
                  {filtered.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => window.open(f.url, '_blank')}
                      className="w-full text-left bg-white/70 border border-purple-100 hover:border-purple-200 rounded-xl p-4 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-600 grid place-items-center">
                          <FileText className="w-5 h-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-medium text-purple-900 truncate">{f.name}</p>
                          <p className="text-xs text-purple-600">
                            {(f.size / 1024 / 1024).toFixed(1)} Mo · {new Date(f.uploaded_at).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="h-[300px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center border border-purple-200/50">
                      <FileText className="w-8 h-8 text-purple-400" />
                    </div>
                    <h3 className="font-semibold text-purple-900 mb-2">Aucun fichier</h3>
                    <p className="text-sm text-purple-600 max-w-xs mx-auto">
                      {searchQuery
                        ? 'Aucun résultat pour cette recherche'
                        : 'Ce dossier est vide pour le moment. Ajoute ton premier cours !'}
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </DialogContent>

      {/* Dialog d’ajout de cours – appelle onAdded pour rafraîchir */}
      <AddCourseDialog
        open={addCourseOpen}
        onOpenChange={(o) => {
          setAddCourseOpen(o);
          if (!o) load(); // au cas où on a ajouté quelque chose
        }}
        folderId={folderId}
        onAdded={load}
      />
    </Dialog>
  );
}
