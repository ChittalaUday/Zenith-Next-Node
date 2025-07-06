import { LoginForm } from "@/components/login-form"
import { ParticleBackground } from "@/components/utill/particle-background";
import { Card, CardContent } from "@/components/ui/card";

export default function LoginPage() {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Glow Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-2]">
        {/* Bottom-up glow - increased height, very subtle */}
        <div className="absolute bottom-0 left-0 w-full h-2/5 bg-gradient-to-t from-primary/8 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/2 w-64 h-64 bg-accent/4 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-3/4 w-64 h-64 bg-accent/4 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <ParticleBackground 
          particleCount={30} 
          floatingElementsCount={25}
        />
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
          <Card className="w-full max-w-md bg-card/80 backdrop-blur-sm border-border/50 shadow-xl">
            <CardContent className="p-6">
              <LoginForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
