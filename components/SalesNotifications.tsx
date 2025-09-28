import { useState, useEffect } from "react";
import { ShoppingCart, X } from "lucide-react";

const SalesNotifications = () => {
  const [notifications, setNotifications] = useState<Array<{id: number, text: string}>>([]);
  const [nextId, setNextId] = useState(1);

  const salesMessages = [
    { name: "João", city: "SP", product: "Pacote Básico ENEM 360" },
    { name: "Maria", city: "MG", product: "ENEM IA Premium 360" },
    { name: "Pedro", city: "RJ", product: "ENEM Essencial" },
    { name: "Juliana", city: "BA", product: "ENEM IA Premium 360" },
    { name: "Lucas", city: "DF", product: "Pacote Essencial" },
    { name: "Fernanda", city: "PR", product: "ENEM IA Premium 360" },
    { name: "Rafael", city: "SC", product: "Pacote Básico ENEM IA" },
    { name: "Ana", city: "PE", product: "ENEM 360 Completo" },
    { name: "Bruno", city: "RS", product: "ENEM IA Essencial" },
    { name: "Camila", city: "CE", product: "ENEM Premium 360" },
    { name: "Carlos", city: "GO", product: "ENEM IA Premium 360" },
    { name: "Patricia", city: "AM", product: "Pacote Essencial" },
    { name: "Roberto", city: "PA", product: "ENEM 360 Completo" },
    { name: "Larissa", city: "MT", product: "ENEM IA Premium 360" },
    { name: "Gabriel", city: "ES", product: "Pacote Básico ENEM 360" },
  ];

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * salesMessages.length);
    const sale = salesMessages[randomIndex];
    const actions = [
      "Acabou de adquirir",
      "Garantiu",
      "Entrou agora no",
      "Comprou",
      "Acabou de assinar",
      "Entrou para o",
    ];
    const randomAction = actions[Math.floor(Math.random() * actions.length)];
    return `${sale.name} de ${sale.city} - ${randomAction} o ${sale.product}`;
  };

  useEffect(() => {
    // Start showing notifications after a delay
    const initialDelay = setTimeout(() => {
      const firstNotification = { id: nextId, text: getRandomMessage() };
      setNotifications([firstNotification]);
      setNextId(nextId + 1);
    }, 5000);

    // Show new notifications periodically
    const interval = setInterval(() => {
      const newNotification = { id: nextId, text: getRandomMessage() };
      setNotifications(prev => [...prev.slice(-2), newNotification]);
      setNextId(prev => prev + 1);
    }, 15000 + Math.random() * 10000); // Random interval between 15-25 seconds

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, []);

  const handleClose = (id: number) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  useEffect(() => {
    // Auto-remove notifications after 8 seconds
    if (notifications.length > 0) {
      const timer = setTimeout(() => {
        setNotifications(prev => prev.slice(1));
      }, 8000);
      return () => clearTimeout(timer);
    }
  }, [notifications]);

  return (
    <div className="fixed z-40 pointer-events-none">
      {/* Mobile: Bottom Left */}
      <div className="md:hidden bottom-4 left-4 fixed space-y-2">
        {notifications.map((notification, index) => (
          <div
            key={notification.id}
            className="pointer-events-auto animate-fade-in bg-gradient-to-r from-card/95 to-card/90 backdrop-blur-md border border-accent/30 rounded-lg p-3 shadow-[0_0_20px_hsl(var(--accent)/0.2)] max-w-[280px]"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="flex items-start gap-2">
              <ShoppingCart className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-xs text-foreground flex-1 leading-relaxed">
                {notification.text}
              </p>
              <button
                onClick={() => handleClose(notification.id)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
            <div className="mt-1 text-[10px] text-muted-foreground">
              Há poucos segundos
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: Top Left */}
      <div className="hidden md:block top-24 left-6 fixed space-y-3">
        {notifications.map((notification, index) => (
          <div
            key={notification.id}
            className="pointer-events-auto animate-fade-in bg-gradient-to-r from-card/95 to-card/90 backdrop-blur-md border border-accent/30 rounded-xl p-4 shadow-[0_0_30px_hsl(var(--accent)/0.3)] max-w-[320px] hover:shadow-[0_0_40px_hsl(var(--accent)/0.4)] transition-all"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-accent/20 rounded-lg">
                <ShoppingCart className="w-5 h-5 text-accent" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-foreground leading-relaxed font-medium">
                  {notification.text}
                </p>
                <div className="mt-1 text-xs text-muted-foreground">
                  Há poucos segundos
                </div>
              </div>
              <button
                onClick={() => handleClose(notification.id)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesNotifications;