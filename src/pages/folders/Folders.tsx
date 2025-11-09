import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Plus, Search, FolderOpen, FileText, Calendar } from 'lucide-react';
import { FolderContentDialog } from '../../components/blocks/FolderContentDialog';

export default function Folders() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [selectedFolderColor, setSelectedFolderColor] = useState<string>('#6F3DFF');
  
  const folders = [
    { id: 1, name: 'Mathématiques', fileCount: 24, lastModified: '2 nov. 2025', color: '#6F3DFF' },
    { id: 2, name: 'Physique-Chimie', fileCount: 18, lastModified: '1 nov. 2025', color: '#2E8BFF' },
    { id: 3, name: 'Histoire-Géographie', fileCount: 32, lastModified: '30 oct. 2025', color: '#56E3C2' },
    { id: 4, name: 'Français', fileCount: 41, lastModified: '29 oct. 2025', color: '#F59E0B' },
    { id: 5, name: 'Anglais', fileCount: 15, lastModified: '28 oct. 2025', color: '#10B981' },
    { id: 6, name: 'SVT', fileCount: 22, lastModified: '27 oct. 2025', color: '#EF4444' },
  ];

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
          
          <Button className="bg-gradient-to-r from-[var(--color-primary-start)] to-[var(--color-primary-mid)] hover:opacity-90 gap-2">
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="!pl-12 h-12 rounded-xl bg-white border-gray-200"
            />
          </div>
        </div>

        {/* Folders Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {folders.map((folder) => (
            <div
              key={folder.id}
              onClick={() => {
                setSelectedFolderId(folder.id);
                setSelectedFolderColor(folder.color);
              }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${folder.color}20` }}
                >
                  <FolderOpen className="w-6 h-6" style={{ color: folder.color }} />
                </div>
                
                <div className="w-1.5 h-full rounded-full" style={{ backgroundColor: folder.color }}></div>
              </div>

              <h3 className="font-semibold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-primary-mid)] transition-colors">
                {folder.name}
              </h3>

              <div className="flex items-center justify-between text-sm text-[var(--color-text-muted)]">
                <div className="flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  <span>{folder.fileCount} fichiers</span>
                </div>
                
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{folder.lastModified}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Folder Content Dialog */}
      <FolderContentDialog
        open={selectedFolderId !== null}
        onOpenChange={(open) => {
          if (!open) {
            setSelectedFolderId(null);
          }
        }}
        folderId={selectedFolderId}
        folderColor={selectedFolderColor}
      />
    </div>
  );
}
