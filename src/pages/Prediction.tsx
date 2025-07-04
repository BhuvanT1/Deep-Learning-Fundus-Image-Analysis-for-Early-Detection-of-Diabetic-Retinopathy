import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Eye, AlertCircle, CheckCircle, FileImage, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Prediction = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [results, setResults] = useState<{
    diagnosis: string;
    confidence: number;
    riskLevel: 'low' | 'moderate' | 'high';
    recommendations: string[];
  } | null>(null);
  const { toast } = useToast();
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      toast({
        title: "Authentication Required",
        description: "Please login to access the analysis feature.",
        variant: "destructive",
      });
      navigate('/login');
    }
  }, [user, loading, navigate, toast]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-2" />
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      setResults(null);
    } else {
      toast({
        title: "Invalid File",
        description: "Please select a valid image file (JPG, PNG, etc.)",
        variant: "destructive",
      });
    }
  };

  const handleAnalysis = async () => {
    if (!selectedFile) return;
    
    setIsAnalyzing(true);
    
    // Simulate AI analysis
    setTimeout(() => {
      const mockResults = {
        diagnosis: "Moderate Non-Proliferative Diabetic Retinopathy",
        confidence: 87.5,
        riskLevel: 'moderate' as const,
        recommendations: [
          "Schedule follow-up examination within 6 months",
          "Continue diabetes management and glucose monitoring",
          "Consider ophthalmologist referral for detailed evaluation",
          "Monitor for vision changes and report immediately"
        ]
      };
      
      setResults(mockResults);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis Complete",
        description: "Fundus image analysis has been completed successfully.",
      });
    }, 3000);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-success';
      case 'moderate': return 'text-warning';
      case 'high': return 'text-destructive';
      default: return 'text-foreground';
    }
  };

  const getRiskIcon = (risk: string) => {
    switch (risk) {
      case 'low': return <CheckCircle className="h-5 w-5 text-success" />;
      case 'moderate': return <AlertCircle className="h-5 w-5 text-warning" />;
      case 'high': return <AlertCircle className="h-5 w-5 text-destructive" />;
      default: return <AlertCircle className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-primary rounded-full p-3">
              <Eye className="h-8 w-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Diabetic Retinopathy Analysis
          </h1>
          <p className="text-muted-foreground">
            Upload a fundus image for AI-powered diabetic retinopathy detection
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Upload Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Upload className="h-5 w-5" />
                <span>Upload Fundus Image</span>
              </CardTitle>
              <CardDescription>
                Select a high-quality fundus photograph for analysis
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <FileImage className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Click to select fundus image
                    </p>
                  </label>
                </div>
                
                {selectedFile && (
                  <div className="bg-secondary rounded-lg p-3">
                    <p className="text-sm font-medium">Selected file:</p>
                    <p className="text-sm text-muted-foreground truncate">
                      {selectedFile.name}
                    </p>
                  </div>
                )}

                <Button 
                  onClick={handleAnalysis}
                  disabled={!selectedFile || isAnalyzing}
                  className="w-full"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Eye className="mr-2 h-4 w-4" />
                      Start Analysis
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertCircle className="h-5 w-5" />
                <span>Analysis Results</span>
              </CardTitle>
              <CardDescription>
                AI-powered diagnostic results and recommendations
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!results && !isAnalyzing && (
                <div className="text-center py-8">
                  <Eye className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
                  <p className="text-muted-foreground">
                    Upload an image to see analysis results
                  </p>
                </div>
              )}

              {isAnalyzing && (
                <div className="text-center py-8">
                  <Loader2 className="h-12 w-12 mx-auto animate-spin text-primary mb-2" />
                  <p className="text-foreground font-medium">Analyzing fundus image...</p>
                  <p className="text-sm text-muted-foreground">
                    This may take a few moments
                  </p>
                </div>
              )}

              {results && (
                <div className="space-y-4">
                  <Alert>
                    <div className="flex items-center space-x-2">
                      {getRiskIcon(results.riskLevel)}
                      <div>
                        <AlertDescription className="font-medium">
                          {results.diagnosis}
                        </AlertDescription>
                        <p className="text-sm text-muted-foreground">
                          Confidence: {results.confidence}%
                        </p>
                      </div>
                    </div>
                  </Alert>

                  <div className="bg-secondary rounded-lg p-4">
                    <h4 className="font-medium mb-2 flex items-center space-x-2">
                      <span>Risk Level:</span>
                      <span className={`capitalize ${getRiskColor(results.riskLevel)}`}>
                        {results.riskLevel}
                      </span>
                    </h4>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Recommendations:</h4>
                    <ul className="space-y-1">
                      {results.recommendations.map((rec, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start space-x-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      <strong>Important:</strong> This AI analysis is for screening purposes only. 
                      Please consult with a qualified ophthalmologist for definitive diagnosis and treatment.
                    </AlertDescription>
                  </Alert>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Prediction;