'use client';
import { useState, useEffect, useRef } from 'react';
import { continueClinicalCase, Message } from '@/ai/flows/clinical-case-trainer-flow';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Send, User, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ClinicalCaseTrainer() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const viewportRef = useRef<HTMLDivElement>(null);

  // Start the simulation on component mount
  useEffect(() => {
    const startSimulation = async () => {
      const firstMessage = await continueClinicalCase([]);
      setMessages([{ role: 'model', content: firstMessage }]);
      setIsLoading(false);
    };
    startSimulation();
  }, []);
  
  // Auto-scroll to bottom
  useEffect(() => {
    if (viewportRef.current) {
        viewportRef.current.scrollTop = viewportRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
      const modelResponse = await continueClinicalCase(newMessages);
      setMessages(prev => [...prev, { role: 'model', content: modelResponse }]);
    } catch (error) {
      console.error("Error fetching model response:", error);
      setMessages(prev => [...prev, { role: 'model', content: "Lo siento, ha ocurrido un error. Por favor, intenta de nuevo." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-220px)] max-w-4xl mx-auto bg-card border border-border rounded-4xl shadow-2xl animate-in fade-in duration-500">
      <div className="p-4 border-b border-border flex items-center gap-4">
        <Avatar>
            <AvatarFallback>SJ</AvatarFallback>
        </Avatar>
        <div>
            <h2 className="font-bold text-white">Sra. Julieta (Cliente IA)</h2>
            <p className="text-xs text-muted-foreground">Simulador de Consulta</p>
        </div>
      </div>

      <ScrollArea className="flex-1 p-0" viewportRef={viewportRef}>
        <div className="p-6 space-y-6">
            {messages.map((msg, index) => (
            <div key={index} className={cn("flex items-start gap-4", msg.role === 'user' ? 'justify-end' : 'justify-start')}>
                {msg.role === 'model' && (
                    <Avatar className="w-8 h-8 border-2 border-primary/50">
                        <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                )}
                <div className={cn(
                    "max-w-md p-4 rounded-3xl relative", 
                    msg.role === 'user' 
                        ? 'bg-blue-600 text-white rounded-br-lg' 
                        : 'bg-secondary text-slate-300 rounded-bl-lg'
                )}>
                    <p className="text-sm">{msg.content}</p>
                </div>
                {msg.role === 'user' && (
                    <Avatar className="w-8 h-8 border-2 border-blue-600/50">
                        <AvatarFallback><User size={16}/></AvatarFallback>
                    </Avatar>
                )}
            </div>
            ))}
             {isLoading && messages.length > 0 && (
                <div className="flex items-start gap-4 justify-start">
                    <Avatar className="w-8 h-8 border-2 border-primary/50">
                        <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div className="max-w-md p-4 rounded-3xl relative bg-secondary rounded-bl-lg flex items-center gap-3">
                         <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                         <span className="text-sm text-muted-foreground">Escribiendo...</span>
                    </div>
                </div>
            )}
        </div>
      </ScrollArea>

      <form onSubmit={handleSubmit} className="p-4 border-t border-border flex items-center gap-4">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu pregunta..."
          className="bg-background !text-sm"
          disabled={isLoading}
        />
        <Button type="submit" size="icon" className="flex-shrink-0" disabled={isLoading}>
          <Send size={18} />
        </Button>
      </form>
    </div>
  );
}
