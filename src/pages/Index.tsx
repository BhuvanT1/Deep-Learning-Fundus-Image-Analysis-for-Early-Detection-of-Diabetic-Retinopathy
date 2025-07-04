import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Eye, Upload, UserPlus, LogIn, Shield, Zap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/10 to-accent/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary rounded-full p-4">
                <Eye className="h-12 w-12 text-primary-foreground" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              RetinaAI
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Advanced Deep Learning Fundus Image Analysis for Early Detection of Diabetic Retinopathy
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/prediction">
                <Button size="lg" className="w-full sm:w-auto">
                  <Upload className="mr-2 h-5 w-5" />
                  Start Analysis
                </Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <UserPlus className="mr-2 h-5 w-5" />
                  Create Account
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Advanced AI-Powered Detection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our cutting-edge deep learning algorithms analyze fundus images to detect diabetic retinopathy 
              with high accuracy, enabling early intervention and better patient outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Zap className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle>Fast Analysis</CardTitle>
                <CardDescription>
                  Get results in seconds with our optimized AI models
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our advanced algorithms process fundus images rapidly, providing 
                  quick screening results for efficient patient care.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle>High Accuracy</CardTitle>
                <CardDescription>
                  Clinically validated with 95%+ accuracy rates
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Trained on thousands of fundus images, our AI delivers 
                  reliable diagnostic support for healthcare professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center">
                  <div className="bg-primary/10 rounded-full p-3">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <CardTitle>Easy to Use</CardTitle>
                <CardDescription>
                  Simple interface designed for healthcare professionals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Upload, analyze, and get comprehensive reports with 
                  actionable recommendations in just a few clicks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary/5 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Start Detecting Diabetic Retinopathy Today
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join healthcare professionals worldwide using RetinaAI for early detection and better patient outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/login">
              <Button size="lg" className="w-full sm:w-auto">
                <LogIn className="mr-2 h-5 w-5" />
                Sign In
              </Button>
            </Link>
            <Link to="/prediction">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Eye className="mr-2 h-5 w-5" />
                Try Demo
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
