import { Heart, Award, Leaf, ShieldCheck } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-brand" />,
      title: "用心製作",
      description: "每一批產品都像為自己家人製作一樣，充滿愛心和細節。"
    },
    {
      icon: <Award className="w-8 h-8 text-brand" />,
      title: "優質食材",
      description: "我們只選用最優質的食材，確保營養和美味兼備。"
    },
    {
      icon: <Leaf className="w-8 h-8 text-brand" />,
      title: "可持續來源",
      description: "我們的食材均來自負責任的來源，以減少環境影響並支持道德採購。"
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand" />,
      title: "營養師認證",
      description: "由貓咪營養專家調配，滿足您愛貓在各個生命階段的營養需求。"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-cream">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="badge badge-primary mb-4">為何選擇我們</span>
          <h2 className="heading-lg mb-6">為非凡的貓咪提供卓越的營養</h2>
          <p className="text-foreground/80">
            我們相信您的貓咪值得最好的。我們的優質貓糧以無與倫比的品質和關愛製作。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm opacity-0 animate-fade-up"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-brand-light">
                {benefit.icon}
              </div>
              <h3 className="heading-sm mb-3">{benefit.title}</h3>
              <p className="text-foreground/70">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center opacity-0 animate-fade-up" style={{ animationDelay: '600ms' }}>
          <div className="inline-block bg-white px-8 py-6 rounded-xl shadow-sm">
            <p className="font-display text-xl italic text-foreground/80 max-w-2xl">
              "小尾巴星球 Little Tails Planet ™ 徹底改變了我那挑食的貓咪。現在牠會在餐碗旁等待用餐時間！"
            </p>
            <div className="mt-4">
              <span className="font-semibold">— 莎拉和小鬍子</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
