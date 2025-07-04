import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Eye, UserPlus, LogIn, Upload, LogOut, Home } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-card border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Eye className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">RetinaAI</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/">
              <Button 
                variant={isActive("/") ? "default" : "ghost"}
                size="sm"
                className="flex items-center space-x-1"
              >
                <Home size={16} />
                <span>Home</span>
              </Button>
            </Link>
            
            <Link to="/register">
              <Button 
                variant={isActive("/register") ? "default" : "ghost"}
                size="sm"
                className="flex items-center space-x-1"
              >
                <UserPlus size={16} />
                <span>Register</span>
              </Button>
            </Link>
            
            <Link to="/login">
              <Button 
                variant={isActive("/login") ? "default" : "ghost"}
                size="sm"
                className="flex items-center space-x-1"
              >
                <LogIn size={16} />
                <span>Login</span>
              </Button>
            </Link>
            
            <Link to="/prediction">
              <Button 
                variant={isActive("/prediction") ? "default" : "ghost"}
                size="sm"
                className="flex items-center space-x-1"
              >
                <Upload size={16} />
                <span>Analysis</span>
              </Button>
            </Link>
            
            <Link to="/logout">
              <Button 
                variant={isActive("/logout") ? "outline" : "ghost"}
                size="sm"
                className="flex items-center space-x-1"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;