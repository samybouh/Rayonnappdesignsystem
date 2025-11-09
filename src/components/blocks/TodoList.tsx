import { useState } from 'react';
import { Plus, Filter } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { TaskItem } from './TaskItem';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  category: string;
  dueDate?: string;
  xp?: number;
  color: string;
}

interface TodoListProps {
  tasks?: Task[];
  onAddTask?: (title: string) => void;
  onToggleTask?: (id: string) => void;
  onDeleteTask?: (id: string) => void;
}

// Mock data for initial tasks
const defaultTasks: Task[] = [
  {
    id: '1',
    title: 'Réviser le chapitre 3 de Maths',
    completed: false,
    category: 'Mathématiques',
    dueDate: 'Aujourd\'hui',
    xp: 50,
    color: 'border-l-blue-500',
  },
  {
    id: '2',
    title: 'Finir la fiche sur Napoléon',
    completed: false,
    category: 'Histoire',
    dueDate: 'Demain',
    xp: 30,
    color: 'border-l-purple-500',
  },
  {
    id: '3',
    title: 'Exercices de physique page 42',
    completed: true,
    category: 'Physique',
    xp: 40,
    color: 'border-l-emerald-500',
  },
  {
    id: '4',
    title: 'Lire le chapitre 5 de Candide',
    completed: false,
    category: 'Français',
    dueDate: 'Cette semaine',
    xp: 25,
    color: 'border-l-pink-500',
  },
  {
    id: '5',
    title: 'Préparer l\'exposé sur le système solaire',
    completed: false,
    category: 'Sciences',
    dueDate: 'Aujourd\'hui',
    xp: 60,
    color: 'border-l-teal-500',
  },
  {
    id: '6',
    title: 'Rédiger le résumé du chapitre 4',
    completed: false,
    category: 'Histoire',
    dueDate: 'Demain',
    xp: 35,
    color: 'border-l-indigo-500',
  },
  {
    id: '7',
    title: 'Faire les exercices d\'anglais page 28',
    completed: false,
    category: 'Anglais',
    dueDate: 'Cette semaine',
    xp: 45,
    color: 'border-l-orange-500',
  },
];

// Catégories avec icônes et couleurs
const CATEGORIES = [
  { value: 'scolaire', label: '📚 Scolaire', color: 'border-l-blue-500' },
  { value: 'personnel', label: '💭 Personnel', color: 'border-l-purple-500' },
  { value: 'sport', label: '⚽ Sport', color: 'border-l-emerald-500' },
  { value: 'sortie', label: '🎉 Sortie', color: 'border-l-pink-500' },
];

export function TodoList({
  tasks: propTasks,
  onAddTask,
  onToggleTask,
  onDeleteTask,
}: TodoListProps) {
  const [tasks, setTasks] = useState<Task[]>(propTasks || defaultTasks);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [filter, setFilter] = useState('all');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    category: 'scolaire',
    description: '',
  });

  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      const newTask: Task = {
        id: Date.now().toString(),
        title: newTaskTitle,
        completed: false,
        category: 'Général',
        xp: 20,
        color: 'border-l-purple-500',
      };
      
      if (onAddTask) {
        onAddTask(newTaskTitle);
      } else {
        setTasks([...tasks, newTask]);
      }
      
      setNewTaskTitle('');
    }
  };

  const handleFormSubmit = () => {
    if (formData.title.trim()) {
      const selectedCategory = CATEGORIES.find(cat => cat.value === formData.category);
      const categoryLabel = selectedCategory?.label || '📚 Scolaire';
      
      const newTask: Task = {
        id: Date.now().toString(),
        title: formData.title,
        completed: false,
        category: categoryLabel,
        xp: 30,
        color: selectedCategory?.color || 'border-l-purple-500',
      };
      
      if (onAddTask) {
        onAddTask(formData.title);
      } else {
        setTasks([...tasks, newTask]);
      }
      
      // Reset form
      setFormData({
        title: '',
        category: 'scolaire',
        description: '',
      });
      setIsAddDialogOpen(false);
    }
  };

  const handleToggleTask = (id: string) => {
    if (onToggleTask) {
      onToggleTask(id);
    } else {
      setTasks(tasks.map(task => 
        task.id === id ? { ...task, completed: !task.completed } : task
      ));
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    if (filter === 'today') return task.dueDate === 'Aujourd\'hui';
    return true;
  });

  const activeTasks = tasks.filter(t => !t.completed).length;
  const completedTasks = tasks.filter(t => t.completed).length;

  return (
    <div className="flex flex-col h-full">
      {/* Header with stats */}
      <div className="p-4 border-b border-purple-100/50">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-purple-900">Ma To-Do List</h3>
            <p className="text-xs text-purple-600 mt-0.5">
              {activeTasks} {activeTasks > 1 ? 'tâches actives' : 'tâche active'} • {completedTasks} {completedTasks > 1 ? 'terminées' : 'terminée'}
            </p>
          </div>
          
          {/* Filter */}
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[140px] bg-white/60 border-purple-200 text-purple-900 text-xs hover:bg-white transition-colors h-8">
              <Filter className="w-3 h-3 mr-1.5" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes</SelectItem>
              <SelectItem value="active">Actives</SelectItem>
              <SelectItem value="completed">Terminées</SelectItem>
              <SelectItem value="today">Aujourd'hui</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Add task input */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Input
              type="text"
              placeholder="Ajouter une tâche..."
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
              className="bg-white/60 border-purple-200 text-purple-900 placeholder:text-purple-400 text-sm hover:bg-white focus:bg-white transition-colors"
            />
          </div>
          <Button
            onClick={() => setIsAddDialogOpen(true)}
            size="sm"
            className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-sm"
          >
            <Plus className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Tasks list */}
      <div className="flex-1 overflow-y-auto p-4">
        {filteredTasks.length > 0 ? (
          <div className="space-y-2">
            {filteredTasks.map((task) => (
              <div
                key={task.id}
                className={`bg-white/70 backdrop-blur-xl rounded-xl border-l-4 ${task.color} border-t border-r border-b border-purple-100/50 hover:shadow-md transition-all`}
              >
                <TaskItem
                  id={task.id}
                  title={task.title}
                  completed={task.completed}
                  dueDate={task.dueDate}
                  xp={task.xp}
                  onToggle={handleToggleTask}
                />
                {task.category && (
                  <div className="px-3 pb-2">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-purple-100/50 text-purple-700 text-xs">
                      {task.category}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center border border-emerald-200/50">
                <Plus className="w-8 h-8 text-emerald-500" />
              </div>
              <h3 className="font-semibold text-purple-900 mb-2">Aucune tâche</h3>
              <p className="text-sm text-purple-600 max-w-xs">
                {filter !== 'all' ? 'Aucune tâche dans cette catégorie' : 'Ajoute ta première tâche pour commencer'}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Add Task Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 border-2 border-white/50" aria-describedby={undefined}>
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-purple-900 flex items-center gap-2">
              <Plus className="w-6 h-6" />
              Nouvelle tâche
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            {/* Titre */}
            <div className="space-y-2">
              <Label htmlFor="task-title" className="text-purple-900 font-medium">
                Titre de la tâche
              </Label>
              <Input
                id="task-title"
                placeholder="Ex: Réviser le chapitre 3"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="bg-white/60 border-purple-200 text-purple-900 placeholder:text-purple-400"
              />
            </div>

            {/* Catégorie */}
            <div className="space-y-2">
              <Label htmlFor="task-category" className="text-purple-900 font-medium">
                Catégorie
              </Label>
              <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
                <SelectTrigger className="bg-white/60 border-purple-200 text-purple-900">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((cat) => (
                    <SelectItem key={cat.value} value={cat.value}>
                      {cat.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="task-description" className="text-purple-900 font-medium">
                Description (optionnel)
              </Label>
              <Textarea
                id="task-description"
                placeholder="Ajoute des détails sur cette tâche..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-white/60 border-purple-200 text-purple-900 placeholder:text-purple-400 min-h-24"
              />
            </div>
          </div>

          <DialogFooter className="gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsAddDialogOpen(false)}
              className="border-purple-200 text-purple-700 hover:bg-purple-50"
            >
              Annuler
            </Button>
            <Button
              type="button"
              onClick={handleFormSubmit}
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
            >
              Ajouter la tâche
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
