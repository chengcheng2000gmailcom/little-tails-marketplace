
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Privacy = () => {
  return (
    <div className="bg-cream-light min-h-screen">
      <Navbar />
      
      <div className="section-container py-16 md:py-24">
        <h1 className="heading-xl mb-8">私隱政策</h1>
        <p className="text-foreground/70 mb-6">最後更新日期：{new Date().toLocaleDateString('zh-HK')}</p>
        
        <div className="prose prose-lg max-w-none">
          <p>歡迎來到小尾巴星球 Little Tails Planet™ 的私隱政策。</p>

          <h2 className="heading-md mt-8 mb-4">1. 我們收集什麼資料</h2>
          <p>當您使用我們的網站和服務時，我們可能會收集以下資料：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>個人識別資料（姓名、電郵地址、電話號碼、送貨地址等）</li>
            <li>訂單資料和交易記錄</li>
            <li>裝置資料和瀏覽數據</li>
            <li>您填寫的偏好和調查回應</li>
            <li>與您的寵物相關的資料（如寵物類型、品種、年齡等）</li>
          </ul>

          <h2 className="heading-md mt-8 mb-4">2. 我們如何使用您的資料</h2>
          <p>我們使用收集的資料用於：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>處理和送遞您的訂單</li>
            <li>改善我們的產品和服務</li>
            <li>提供客戶支援</li>
            <li>發送營銷訊息（如您已選擇接收）</li>
            <li>遵守法律義務</li>
            <li>防止欺詐行為</li>
          </ul>

          <h2 className="heading-md mt-8 mb-4">3. Cookie 使用政策</h2>
          <p>我們的網站使用 cookie 和類似技術來增強您的瀏覽體驗、分析網站流量並了解我們的受眾。您可以通過瀏覽器設置來控制 cookie。</p>

          <h2 className="heading-md mt-8 mb-4">4. 資料共享和披露</h2>
          <p>我們可能與以下類型的第三方共享您的資料：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>配送和物流合作夥伴</li>
            <li>支付處理商</li>
            <li>我們信任的服務提供商</li>
            <li>當法律要求時，我們可能向執法部門提供資料</li>
          </ul>
          <p>我們不會出售您的個人資料給第三方。</p>

          <h2 className="heading-md mt-8 mb-4">5. 資料安全</h2>
          <p>我們實施多層次的安全措施來保護您的個人資料，包括加密、防火牆和安全協議。</p>

          <h2 className="heading-md mt-8 mb-4">6. 您的權利</h2>
          <p>根據適用的資料保護法，您可能擁有以下權利：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>存取您的個人資料</li>
            <li>更正不準確的資料</li>
            <li>要求刪除您的資料</li>
            <li>限制或反對處理</li>
            <li>資料可攜權</li>
          </ul>

          <h2 className="heading-md mt-8 mb-4">7. 兒童私隱</h2>
          <p>我們的網站和服務不面向13歲以下兒童。如果我們得知已收集兒童的個人資料，我們將採取步驟刪除該資料。</p>

          <h2 className="heading-md mt-8 mb-4">8. 政策更新</h2>
          <p>我們可能會不時更新此私隱政策。任何重大變更都會在網站上公布，並可能通過電郵通知您。</p>

          <h2 className="heading-md mt-8 mb-4">9. 聯絡我們</h2>
          <p>如果您對我們的私隱政策有任何疑問或顧慮，請通過以下方式聯絡我們：</p>
          <p>電郵：hi@littletailsplanet.com</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Privacy;
