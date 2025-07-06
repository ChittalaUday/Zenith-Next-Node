import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Loader } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface LoaderOverlayProps {
  show: boolean;
  duration?: number; // ms
}

export const LoaderOverlay: React.FC<LoaderOverlayProps> = ({ show, duration = 2000 }) => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (!show) return;
    setProgress(0);
    let start: number | null = null;
    let frame: number;
    const animate = (now: number) => {
      if (start === null) start = now;
      const elapsed = now - start;
      setProgress(Math.min((elapsed / duration) * 100, 100));
      if (elapsed < duration) {
        frame = requestAnimationFrame(animate);
      } else {
        setProgress(100);
      }
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [show, duration]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="flex flex-col items-center gap-6 px-10 py-8 shadow-2xl border-2 border-primary">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              className="text-primary"
            >
              <Loader size={48} strokeWidth={2.5} />
            </motion.div>
            <Progress value={progress} className="w-64 h-2" />
            <span className="text-muted-foreground text-sm tracking-wide mt-2">Loading...</span>
          </Card>
        </motion.div>
      )}
    </AnimatePresence>
  );
}; 