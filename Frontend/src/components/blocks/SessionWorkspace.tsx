import { useState, useMemo } from 'react';
import { FolderOpen, CheckSquare, FileText, Search, Plus } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { FicheCard, Fiche } from './FicheCard';
import { TodoList } from './TodoList';
import { AddCourseDialog } from './AddCourseDialog';

// Mock data for fiches
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
];

export function SessionWorkspace() {
  const [activeTab, setActiveTab] = useState<'fiches' | 'todo'>('fiches');
  const [selectedFolder, setSelectedFolder] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [addCourseOpen, setAddCourseOpen] = useState(false);

  // Filter fiches based on selected folder and search query
  const filteredFiches = useMemo(() => {
    if (!selectedFolder) return [];
    
    let fiches = mockFiches.filter(f => f.folder === selectedFolder);
    
    if (searchQuery.trim()) {
      fiches = fiches.filter(f => 
        f.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return fiches;
  }, [selectedFolder, searchQuery]);

  const handleOpenFiche = (fiche: Fiche) => {
    console.log('Opening fiche:', fiche);
    // TODO: Implement fiche opening logic
  };

  const handleAddFiche = () => {
    setAddCourseOpen(true);
  };

  return (
    <div className="bg-white/50 backdrop-blur-xl rounded-2xl border border-purple-100/50 flex flex-col h-full shadow-sm">
      {/* Header with tabs */}
      <div className="border-b border-purple-100/50 p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:justify-between">
          <div className="flex items-center gap-1 bg-purple-50/50 rounded-xl p-1">
            <button
              onClick={() => setActiveTab('fiches')}
              className={`
                px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all
                ${activeTab === 'fiches' 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm' 
                  : 'text-purple-600 hover:text-purple-900 hover:bg-purple-100/50'
                }
              `}
            >
              <FileText className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline-block mr-1 sm:mr-1.5" />
              <span className="hidden xs:inline">Mes </span>fiches
            </button>
            <button
              onClick={() => setActiveTab('todo')}
              className={`
                px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all
                ${activeTab === 'todo' 
                  ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-sm' 
                  : 'text-purple-600 hover:text-purple-900 hover:bg-purple-100/50'
                }
              `}
            >
              <CheckSquare className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline-block mr-1 sm:mr-1.5" />
              To-Do
            </button>
          </div>

          {/* Folder Selector */}
          <Select value={selectedFolder} onValueChange={setSelectedFolder}>
            <SelectTrigger className="w-full sm:w-[200px] bg-white/60 border-purple-200 text-purple-900 text-sm hover:bg-white transition-colors">
              <SelectValue placeholder="Choisir un dossier..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="maths">📐 Mathématiques</SelectItem>
              <SelectItem value="histoire">📖 Histoire</SelectItem>
              <SelectItem value="physique">⚛️ Physique</SelectItem>
              <SelectItem value="francais">📝 Français</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search and Add - Only show when folder is selected and on fiches tab */}
        {selectedFolder && activeTab === 'fiches' && (
          <div className="flex items-center gap-2 mt-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
              <Input
                type="text"
                placeholder="Rechercher une fiche..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="!pl-11 bg-white/60 border-purple-200 text-purple-900 placeholder:text-purple-400 text-sm hover:bg-white focus:bg-white transition-colors"
              />
            </div>
            <Button
              onClick={handleAddFiche}
              size="sm"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-3 shadow-sm whitespace-nowrap"
            >
              <Plus className="w-4 h-4 mr-1.5" />
              Ajouter un cours
            </Button>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-hidden">
        {activeTab === 'todo' ? (
          // To-Do tab
          <TodoList />
        ) : !selectedFolder ? (
          // Empty state - no folder selected
          <div className="h-full flex items-center justify-center p-6 sm:p-12">
            <div className="text-center">
              <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center border border-purple-200/50">
                <FolderOpen className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-purple-900 mb-2">Espace de travail</h3>
              <p className="text-sm sm:text-base text-purple-600 max-w-md px-4">
                Sélectionne un dossier pour commencer à travailler
              </p>
            </div>
          </div>
        ) : (
          // Fiches list
          <div className="h-full overflow-y-auto p-4">
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
              // Empty state - no fiches found
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center border border-purple-200/50">
                    <FileText className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="font-semibold text-purple-900 mb-2">Aucune fiche trouvée</h3>
                  <p className="text-sm text-purple-600 max-w-xs">
                    {searchQuery ? 'Aucun résultat pour cette recherche' : 'Ce dossier ne contient pas encore de fiches'}
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Add Course Dialog */}
      <AddCourseDialog
        open={addCourseOpen}
        onOpenChange={setAddCourseOpen}
      />
    </div>
  );
}
