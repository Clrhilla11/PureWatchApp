
import { Star, Users, Book } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features = () => {
  const features = [
    {
      icon: Star,
      title: "Exceptional Experience",
      description: "Carefully crafted user interface that makes complex tasks feel effortless and enjoyable.",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      icon: Users,
      title: "Built for Teams",
      description: "Seamless collaboration tools that bring your team together and boost collective productivity.",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      icon: Book,
      title: "Learn as You Go",
      description: "Smart guidance and tutorials that help you master new features without overwhelming you.",
      gradient: "from-green-400 to-blue-500"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Our App?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We've reimagined what productivity software should be - powerful yet simple, 
            feature-rich yet intuitive.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/70 backdrop-blur-sm"
              >
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
