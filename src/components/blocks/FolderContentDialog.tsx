import { useState, useMemo } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Search, Plus, FileText } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FicheCard, Fiche } from './FicheCard';
import { AddCourseDialog } from './AddCourseDialog';

// Mock data for fiches - same as SessionWorkspace
const mockFiches: Fiche[] = [
  { id: '1', name: 'La Révolution française', size: '2.4 MB', lastModified: 'Il y a 2h', folder: 'histoire' },
  { id: '2', name: 'Napoléon Bonaparte', size: '1.8 MB', lastModified: 'Hier', folder: 'histoire' },
  { id: '3', name: 'La Première Guerre mondiale', size: '3.1 MB', lastModified: 'Il y a 3j', folder: 'histoire' },
  { id: '4', name: 'La Renaissance', size: '2.0 MB', lastModified: 'Il y a 1 sem', folder: 'histoire' },
  { id: '5', name: 'Théorème de Pythagore', size: '1.2 MB', lastModified: 'Il y a 1h', folder: 'maths' },
  { id: '6', name: 'Équations du second degré', size: '1.9 MB', lastModified: 'Hier', folder: 'maths' },
  { id: '7', name: 'Fonctions affines', size: '1.5 MB', lastModified: 'Il y a 2j', folder: 'maths' },
  { id: '8', name: 'Lois de Newton', size: '2.2 MB', lastModified: 'Il y a 4h', folder: 'physique' },
  { id: '9', name: 'Énergie cinétique', size: '1.7 MB', lastModified: 'Il y a 1j', folder: 'physique' },
  { id: '10', name: 'Les figures de style', size: '1.4 MB', lastModified: 'Il y a 3h', folder: 'francais' },
  { id: '11', name: 'Le romantisme', size: '2.1 MB', lastModified: 'Hier', folder: 'francais' },
  { id: '12', name: 'Révisions SVT - Cellules', size: '1.9 MB', lastModified: 'Il y a 5h', folder: 'svt' },
  { id: '13', name: 'La photosynthèse', size: '2.3 MB', lastModified: 'Il y a 2j', folder: 'svt' },
  { id: '14', name: 'Vocabulaire anglais - Unité 3', size: '1.1 MB', lastModified: 'Il y a 1h', folder: 'anglais' },
  { id: '15', name: 'Grammaire anglaise', size: '1.6 MB', lastModified: 'Hier', folder: 'anglais' },
];

// Folder ID to name mapping
const folderNames: Record<number, string> = {
  1: 'Mathématiques',
  2: 'Physique-Chimie',
  3: 'Histoire-Géographie',
  4: 'Français',
  5: 'Anglais',
  6: 'SVT',
};

// Folder ID to folder key mapping for fiches
const folderKeys: Record<number, string> = {
  1: 'maths',
  2: 'physique',
  3: 'histoire',
  4: 'francais',
  5: 'anglais',
  6: 'svt',
};

interface FolderContentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  folderId: number | null;
  folderColor?: string;
}

export function FolderContentDialog({ open, onOpenChange, folderId, folderColor = '#6F3DFF' }: FolderContentDialogProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [addCourseOpen, setAddCourseOpen] = useState(false);

  const folderName = folderId ? folderNames[folderId] : '';
  const folderKey = folderId ? folderKeys[folderId] : '';

  // Filter fiches based on folder and search query
  const filteredFiches = useMemo(() => {
    if (!folderKey) return [];
    
    let fiches = mockFiches.filter(f => f.folder === folderKey);
    
    if (searchQuery.trim()) {
      fiches = fiches.filter(f => 
        f.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return fiches;
  }, [folderKey, searchQuery]);

  const handleOpenFiche = (fiche: Fiche) => {
    console.log('Opening fiche:', fiche);
    // TODO: Implement fiche opening logic
  };

  const handleAddFiche = () => {
    setAddCourseOpen(true);
  };

  // Reset search when dialog closes
  const handleOpenChange = (newOpen: boolean) => {
    if (!newOpen) {
      setSearchQuery('');
    }
    onOpenChange(newOpen);
  };

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
            {filteredFiches.length} fiche{filteredFiches.length > 1 ? 's' : ''} disponible{filteredFiches.length > 1 ? 's' : ''}
          </p>
        </DialogHeader>

        <div className="overflow-y-auto max-h-[calc(85vh-140px)] p-6 space-y-4">
          {/* Search and Add */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400 pointer-events-none z-10" />
              <Input
                type="text"
                placeholder="Rechercher une fiche..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="!pl-12 bg-white/60 border-purple-200 text-purple-900 placeholder:text-purple-400 hover:bg-white focus:bg-white transition-colors"
              />
            </div>
            <Button
              onClick={handleAddFiche}
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white shadow-sm whitespace-nowrap"
            >
              <Plus className="w-4 h-4 mr-2" />
              Ajouter un cours
            </Button>
          </div>

          {/* Fiches List */}
          {filteredFiches.length > 0 ? (
            <div className="space-y-2">
              {filteredFiches.map((fiche) => (
                <FicheCard
                  key={fiche.id}
                  fiche={fiche}
                  onOpen={handleOpenFiche}
                />
              ))}
            </div>
          ) : (
            // Empty state
            <div className="h-[300px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center border border-purple-200/50">
                  <FileText className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="font-semibold text-purple-900 mb-2">Aucune fiche trouvée</h3>
                <p className="text-sm text-purple-600 max-w-xs mx-auto">
                  {searchQuery ? 'Aucun résultat pour cette recherche' : 'Ce dossier ne contient pas encore de fiches'}
                </p>
              </div>
            </div>
          )}
        </div>
      </DialogContent>

      {/* Add Course Dialog */}
      <AddCourseDialog
        open={addCourseOpen}
        onOpenChange={setAddCourseOpen}
        folderId={folderId}
      />
    </Dialog>
  );
}
