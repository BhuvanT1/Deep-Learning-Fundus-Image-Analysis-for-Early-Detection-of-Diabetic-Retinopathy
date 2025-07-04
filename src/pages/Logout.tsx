import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogOut, Eye, Home } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";

const Logout = () => {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out of RetinaAI.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <div className="flex justify-center">
              <div className="bg-primary rounded-full p-3">
                <Eye className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-extrabold text-foreground">
              Logout Confirmation
            </h2>
            <p className="mt-2 text-muted-foreground">
              Are you sure you want to logout from RetinaAI?
            </p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <LogOut className="h-5 w-5" />
                <span>Sign Out</span>
              </CardTitle>
              <CardDescription>
                You will be redirected to the login page after logout
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-secondary rounded-lg p-4">
                <h3 className="font-medium text-foreground mb-2">
                  Before you leave:
                </h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Make sure to save any important analysis results</li>
                  <li>• Your session data will be cleared</li>
                  <li>• You can login again anytime to continue</li>
                </ul>
              </div>

              <div className="flex space-x-4">
                <Button 
                  onClick={handleLogout}
                  variant="destructive" 
                  className="flex-1"
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
                
                <Link to="/" className="flex-1">
                  <Button variant="outline" className="w-full">
                    <Home className="mr-2 h-4 w-4" />
                    Stay Logged In
                  </Button>
                </Link>
              </div>

              <div className="text-center mt-6">
                <p className="text-sm text-muted-foreground">
                  Need help?{" "}
                  <Link to="#" className="text-primary hover:underline">
                    Contact Support
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Logout;