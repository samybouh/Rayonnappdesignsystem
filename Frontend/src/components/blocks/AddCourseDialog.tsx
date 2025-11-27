import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Slider } from '../ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { 
  Camera, 
  Upload, 
  FileText, 
  CreditCard, 
  FileQuestion, 
  Brain, 
  Network, 
  MessageSquare, 
  FileCheck,
  ChevronLeft,
  Sparkles
} from 'lucide-react';

type ImportMethod = 'scan' | 'upload' | 'text' | null;
type TransformType = 'flashcards' | 'cloze' | 'summary' | 'mindmap' | 'qa' | 'original' | null;

interface AddCourseDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  folderId?: number | null;
}

export function AddCourseDialog({ open, onOpenChange, folderId }: AddCourseDialogProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [importMethod, setImportMethod] = useState<ImportMethod>(null);
  const [transformType, setTransformType] = useState<TransformType>(null);
  
  // Configuration states
  const [cardCount, setCardCount] = useState(20);
  const [difficulty, setDifficulty] = useState('medium');
  const [courseName, setCourseName] = useState('');
  const [textContent, setTextContent] = useState('');

  const handleReset = () => {
    setStep(1);
    setImportMethod(null);
    setTransformType(null);
    setCardCount(20);
    setDifficulty('medium');
    setCourseName('');
    setTextContent('');
  };

  const handleClose = (newOpen: boolean) => {
    if (!newOpen) {
      handleReset();
    }
    onOpenChange(newOpen);
  };

  const handleImportMethodSelect = (method: ImportMethod) => {
    setImportMethod(method);
    setStep(2);
  };

  const handleTransformTypeSelect = (type: TransformType) => {
    setTransformType(type);
    setStep(3);
  };

  const handleBack = () => {
    if (step === 3) {
      setStep(2);
      setTransformType(null);
    } else if (step === 2) {
      setStep(1);
      setImportMethod(null);
    }
  };

  const handleFinish = () => {
    console.log('Creating course with:', {
      importMethod,
      transformType,
      folderId,
      config: { cardCount, difficulty, courseName, textContent }
    });
    // TODO: API call to create course
    handleClose(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent 
        className="!max-w-[700px] sm:!max-w-[700px] w-[95vw] max-h-[90vh] overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 border-2 border-white/50 shadow-2xl p-0"
        aria-describedby={undefined}
      >
        {/* Step 1: Choose Import Method */}
        {step === 1 && (
          <>
            <DialogHeader className="p-6 pb-4 border-b border-purple-100/50">
              <DialogTitle className="text-2xl font-semibold text-purple-900 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-500" />
                Comment veux-tu importer ton cours ?
              </DialogTitle>
            </DialogHeader>

            <div className="p-6 space-y-3">
              <button
                onClick={() => handleImportMethodSelect('scan')}
                className="w-full bg-white/70 hover:bg-white hover:shadow-lg border-2 border-purple-100/50 hover:border-purple-300 rounded-2xl p-6 transition-all text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Camera className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-purple-900 mb-1">Scanner avec l'appareil photo</h3>
                    <p className="text-sm text-purple-600">Prends en photo tes notes ou ton manuel</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleImportMethodSelect('upload')}
                className="w-full bg-white/70 hover:bg-white hover:shadow-lg border-2 border-purple-100/50 hover:border-purple-300 rounded-2xl p-6 transition-all text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Upload className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-purple-900 mb-1">Importer un fichier</h3>
                    <p className="text-sm text-purple-600">PDF, Word, PowerPoint, image...</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleImportMethodSelect('text')}
                className="w-full bg-white/70 hover:bg-white hover:shadow-lg border-2 border-purple-100/50 hover:border-purple-300 rounded-2xl p-6 transition-all text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FileText className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-purple-900 mb-1">Saisir du texte</h3>
                    <p className="text-sm text-purple-600">Colle ou écris directement ton contenu</p>
                  </div>
                </div>
              </button>
            </div>
          </>
        )}

        {/* Step 2: Choose Transform Type */}
        {step === 2 && (
          <>
            <DialogHeader className="p-6 pb-4 border-b border-purple-100/50">
              <button
                onClick={handleBack}
                className="absolute left-6 top-6 w-8 h-8 rounded-lg hover:bg-purple-100/50 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-purple-600" />
              </button>
              <DialogTitle className="text-2xl font-semibold text-purple-900 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-500" />
                Comment veux-tu transformer ton cours ?
              </DialogTitle>
            </DialogHeader>

            <div className="p-6 space-y-3 max-h-[calc(90vh-140px)] overflow-y-auto">
              <button
                onClick={() => handleTransformTypeSelect('flashcards')}
                className="w-full bg-white/70 hover:bg-white hover:shadow-lg border-2 border-purple-100/50 hover:border-purple-300 rounded-2xl p-5 transition-all text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-purple-900 mb-1">Flash Cards</h3>
                    <p className="text-sm text-purple-600">Questions-réponses pour mémoriser</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleTransformTypeSelect('cloze')}
                className="w-full bg-white/70 hover:bg-white hover:shadow-lg border-2 border-purple-100/50 hover:border-purple-300 rounded-2xl p-5 transition-all text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FileQuestion className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-purple-900 mb-1">Texte à trous</h3>
                    <p className="text-sm text-purple-600">Complète les mots manquants</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleTransformTypeSelect('summary')}
                className="w-full bg-white/70 hover:bg-white hover:shadow-lg border-2 border-purple-100/50 hover:border-purple-300 rounded-2xl p-5 transition-all text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-purple-900 mb-1">Résumé intelligent</h3>
                    <p className="text-sm text-purple-600">Synthèse automatique du contenu</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleTransformTypeSelect('mindmap')}
                className="w-full bg-white/70 hover:bg-white hover:shadow-lg border-2 border-purple-100/50 hover:border-purple-300 rounded-2xl p-5 transition-all text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Network className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-purple-900 mb-1">Carte mentale</h3>
                    <p className="text-sm text-purple-600">Visualise les concepts clés</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleTransformTypeSelect('qa')}
                className="w-full bg-white/70 hover:bg-white hover:shadow-lg border-2 border-purple-100/50 hover:border-purple-300 rounded-2xl p-5 transition-all text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-purple-900 mb-1">Questions-réponses</h3>
                    <p className="text-sm text-purple-600">Quiz de compréhension</p>
                  </div>
                </div>
              </button>

              <button
                onClick={() => handleTransformTypeSelect('original')}
                className="w-full bg-white/70 hover:bg-white hover:shadow-lg border-2 border-purple-100/50 hover:border-purple-300 rounded-2xl p-5 transition-all text-left group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-500 to-gray-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FileCheck className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-purple-900 mb-1">Conserver tel quel</h3>
                    <p className="text-sm text-purple-600">Garde le format original</p>
                  </div>
                </div>
              </button>
            </div>
          </>
        )}

        {/* Step 3: Configuration */}
        {step === 3 && (
          <>
            <DialogHeader className="p-6 pb-4 border-b border-purple-100/50">
              <button
                onClick={handleBack}
                className="absolute left-6 top-6 w-8 h-8 rounded-lg hover:bg-purple-100/50 flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-purple-600" />
              </button>
              <DialogTitle className="text-2xl font-semibold text-purple-900 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-500" />
                Configure ton cours
              </DialogTitle>
            </DialogHeader>

            <div className="p-6 space-y-6 max-h-[calc(90vh-200px)] overflow-y-auto">
              {/* Course Name */}
              <div className="space-y-2">
                <Label htmlFor="course-name" className="text-purple-900 font-medium">
                  Nom du cours
                </Label>
                <Input
                  id="course-name"
                  value={courseName}
                  onChange={(e) => setCourseName(e.target.value)}
                  placeholder="Ex: La Révolution française"
                  className="bg-white/60 border-purple-200 text-purple-900"
                />
              </div>

              {/* Import Method specific fields */}
              {importMethod === 'text' && (
                <div className="space-y-2">
                  <Label htmlFor="text-content" className="text-purple-900 font-medium">
                    Contenu du cours
                  </Label>
                  <textarea
                    id="text-content"
                    value={textContent}
                    onChange={(e) => setTextContent(e.target.value)}
                    placeholder="Colle ou écris ton contenu ici..."
                    rows={8}
                    className="w-full rounded-lg border border-purple-200 bg-white/60 px-3 py-2 text-purple-900 placeholder:text-purple-400 focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/20"
                  />
                </div>
              )}

              {/* Transform Type specific configuration */}
              {transformType === 'flashcards' && (
                <>
                  <div className="space-y-3">
                    <Label className="text-purple-900 font-medium">
                      Nombre de cartes : {cardCount}
                    </Label>
                    <Slider
                      value={[cardCount]}
                      onValueChange={(value) => setCardCount(value[0])}
                      min={5}
                      max={50}
                      step={5}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-purple-600">
                      <span>5 cartes</span>
                      <span>50 cartes</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="difficulty" className="text-purple-900 font-medium">
                      Difficulté
                    </Label>
                    <Select value={difficulty} onValueChange={setDifficulty}>
                      <SelectTrigger className="bg-white/60 border-purple-200 text-purple-900">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="easy">Facile</SelectItem>
                        <SelectItem value="medium">Moyen</SelectItem>
                        <SelectItem value="hard">Difficile</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              {transformType === 'cloze' && (
                <div className="space-y-2">
                  <Label htmlFor="cloze-difficulty" className="text-purple-900 font-medium">
                    Nombre de mots à masquer
                  </Label>
                  <Select defaultValue="medium">
                    <SelectTrigger className="bg-white/60 border-purple-200 text-purple-900">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Peu (10-15%)</SelectItem>
                      <SelectItem value="medium">Moyen (20-25%)</SelectItem>
                      <SelectItem value="high">Beaucoup (30-40%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}

              {transformType === 'summary' && (
                <div className="space-y-2">
                  <Label htmlFor="summary-length" className="text-purple-900 font-medium">
                    Longueur du résumé
                  </Label>
                  <Select defaultValue="medium">
                    <SelectTrigger className="bg-white/60 border-purple-200 text-purple-900">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short">Court (25%)</SelectItem>
                      <SelectItem value="medium">Moyen (50%)</SelectItem>
                      <SelectItem value="long">Détaillé (75%)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>

            <div className="p-6 pt-4 border-t border-purple-100/50 flex gap-3">
              <Button
                onClick={handleBack}
                variant="outline"
                className="flex-1 border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                Retour
              </Button>
              <Button
                onClick={handleFinish}
                className="flex-1 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
                disabled={!courseName.trim() || (importMethod === 'text' && !textContent.trim())}
              >
                Créer le cours
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
