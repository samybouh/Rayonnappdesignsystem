import { useState } from 'react';
import { BookOpen, Headphones, FileText, Target } from 'lucide-react';
import { MethodCard } from '../../components/blocks/MethodCard';
import { CustomMethodCard } from '../../components/blocks/CustomMethodCard';
import { MethodBankDialog } from '../../components/blocks/MethodBankDialog';

export default function Methods() {
  const [bankDialogOpen, setBankDialogOpen] = useState(false);
  const [customMethod, setCustomMethod] = useState<{
    name: string;
    description: string;
  } | null>(null);

  const handleSelectMethod = (method: any) => {
    setCustomMethod({
      name: method.name,
      description: method.description,
    });
  };

  return (
    <div className="flex-1 overflow-auto p-8">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Mes Méthodes de travail</h1>
        </div>

        {/* Methods Grid - 2 colonnes pour plus d'espace */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* 1. Méthode Cornell */}
          <MethodCard
            icon={<BookOpen className="w-full h-full" />}
            title="Méthode Cornell"
            subtitle="Transforme tes notes en un outil de révision clair et organisé."
            suggestedPercent={85}
            description="La méthode Cornell divise ta page en quatre zones pour faciliter la révision active. Cette structure permet de prendre des notes efficacement et de les transformer en support d'apprentissage durable."
            bgColor="#E8F0FF"
            iconBgColor="#007AFF"
            iconColor="#007AFF"
            buttonColor="#007AFF"
            onClick={() => console.log('Découvrir Cornell')}
          />

          {/* 2. Boucles d'écoute espacées */}
          <MethodCard
            icon={<Headphones className="w-full h-full" />}
            title="Boucles d'écoute espacées"
            subtitle="Planifier plusieurs écoutes courtes d'un même contenu avec intervalles croissants."
            suggestedPercent={75}
            description="Les boucles d'écoute espacées permettent de mémoriser efficacement en écoutant régulièrement un contenu audio de tes cours. Chaque écoute renforce ta compréhension et ancrage mémoriel."
            bgColor="#E8FFF5"
            iconBgColor="#00C853"
            iconColor="#00C853"
            buttonColor="#00C853"
            onClick={() => console.log('Découvrir Boucles')}
          />

          {/* 3. Méthode de la feuille blanche */}
          <MethodCard
            icon={<FileText className="w-full h-full" />}
            title="Méthode de la feuille blanche"
            subtitle="Une des meilleures méthodes de restitution active selon les neurosciences !"
            suggestedPercent={95}
            description="La méthode de la feuille blanche consiste à restituer tout ce dont tu te souviens d'un cours sans aucun support. C'est une technique de rappel actif qui révèle tes véritables lacunes et consolide ta mémoire."
            bgColor="#F5E8FF"
            iconBgColor="#9C27FF"
            iconColor="#9C27FF"
            buttonColor="#9C27FF"
            onClick={() => console.log('Découvrir Feuille Blanche')}
          />

          {/* 4. Feedback */}
          <MethodCard
            icon={<Target className="w-full h-full" />}
            title="Feedback"
            subtitle="Progresse plus vite en cherchant un retour concret et actionnable."
            suggestedPercent={80}
            description="Le feedback régulier permet d'analyser ce qui fonctionne ou non dans ta méthode de travail. Cette pratique d'auto-évaluation te permet d'ajuster continuellement ta stratégie d'apprentissage et de progresser plus rapidement."
            bgColor="#FFF3E8"
            iconBgColor="#FF6D00"
            iconColor="#FF6D00"
            buttonColor="#FF6D00"
            onClick={() => console.log('Découvrir Feedback')}
          />

          {/* 5. Méthode personnalisée - Occupe toute la largeur */}
          <div className="lg:col-span-2">
            <CustomMethodCard
              customMethod={customMethod}
              onExploreClick={() => setBankDialogOpen(true)}
            />
          </div>
        </div>
      </div>

      {/* Method Bank Dialog */}
      <MethodBankDialog
        open={bankDialogOpen}
        onOpenChange={setBankDialogOpen}
        onSelectMethod={handleSelectMethod}
      />
    </div>
  );
}
