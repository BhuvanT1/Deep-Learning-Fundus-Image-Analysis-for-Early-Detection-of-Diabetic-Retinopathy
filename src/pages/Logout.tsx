import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, Eye } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";

const Logout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { signOut } = useAuth();

  useEffect(() => {
    const handleLogout = async () => {
      const { error } = await signOut();
      
      if (error) {
        toast({
          title: "Logout Failed",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Logged Out",
          description: "You have been successfully logged out.",
        });
      }
      
      // Redirect to home page after a brief delay
      setTimeout(() => {
        navigate("/");
      }, 2000);
    };

    handleLogout();
  }, [navigate, toast, signOut]);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <div className="bg-primary rounded-full p-3">
              <Eye className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-foreground">
            Logging Out
          </h2>
          <p className="mt-2 text-muted-foreground">
            Please wait while we log you out...
          </p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <LogOut className="h-5 w-5" />
              <span>Signing Out</span>
            </CardTitle>
            <CardDescription>
              You are being logged out of RetinaAI
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Logout;