
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Here you would typically send the email to your backend
    setEmail('');
    alert('Thanks for signing up! We\'ll be in touch soon.');
  };

  return (
    <div className="min-h-screen bg-hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-indigo-600/20"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Transform Your
            <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent block">
              Digital Experience
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed animate-fade-in-delayed">
            The most intuitive app that simplifies your workflow, boosts productivity, 
            and brings joy to your daily tasks. Join thousands of happy users already transforming their lives.
          </p>
          
          <div className="max-w-md mx-auto animate-fade-in-delayed">
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-12 bg-white/20 backdrop-blur-sm border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 transition-all duration-300"
              />
              <Button 
                type="submit" 
                size="lg"
                className="h-12 px-8 bg-white text-purple-600 hover:bg-white/90 font-semibold transition-all duration-300 hover:scale-105"
              >
                Get Early Access
              </Button>
            </form>
            <p className="text-white/70 text-sm mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/70 w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
