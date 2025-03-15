
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Terms = () => {
  return (
    <div className="bg-cream-light min-h-screen">
      <Navbar />
      
      <div className="section-container py-16 md:py-24">
        <h1 className="heading-xl mb-8">服務條款</h1>
        <p className="text-foreground/70 mb-6">最後更新日期：{new Date().toLocaleDateString('zh-HK')}</p>
        
        <div className="prose prose-lg max-w-none">
          <p>歡迎來到小尾巴星球 Little Tails Planet™。請仔細閱讀以下條款和條件，這將規範您對我們網站的使用和從我們購買產品。</p>

          <h2 className="heading-md mt-8 mb-4">1. 接受條款</h2>
          <p>使用我們的網站和服務，表示您同意受這些條款的約束。如果您不同意這些條款，請勿使用我們的網站或服務。</p>

          <h2 className="heading-md mt-8 mb-4">2. 產品資料和定價</h2>
          <p>我們努力確保我們網站上的所有產品資料和價格都是準確的。但是，我們不保證資料完全無誤，並保留更正錯誤和更改價格的權利。</p>
          <p>所有價格均以港幣（HKD）列出，並不包括運費和適用稅費，這些將在結帳時單獨計算。</p>

          <h2 className="heading-md mt-8 mb-4">3. 訂單和付款</h2>
          <p>當您下訂單時，這代表您提出購買產品的要約。訂單只有在我們接受後才會成立，我們將通過電郵確認。</p>
          <p>我們接受多種付款方式，包括主要信用卡和其他電子支付方式。所有交易均通過安全支付閘道處理。</p>

          <h2 className="heading-md mt-8 mb-4">4. 配送和退貨政策</h2>
          <p>我們致力於在指定的時間框架內配送訂單，但不對因我們無法控制的情況而導致的延誤負責。</p>
          <p>如果您對產品不滿意，可以根據我們的退貨政策退回未開封的產品。某些產品可能因其性質不符合退貨資格。</p>

          <h2 className="heading-md mt-8 mb-4">5. 產品品質和安全</h2>
          <p>我們致力於提供高品質、安全的寵物食品和產品。我們的產品符合適用的安全標準和規定。然而，使用我們產品的風險由您自行承擔。</p>
          <p>如發現任何產品問題或有安全疑慮，請立即聯絡我們。</p>

          <h2 className="heading-md mt-8 mb-4">6. 知識產權</h2>
          <p>我們網站上的所有內容，包括文本、圖像、標誌和軟件，均受版權和其他知識產權法律保護，歸小尾巴星球 Little Tails Planet™或其許可方所有。</p>
          <p>未經我們明確許可，您不得複製、分發、修改我們的內容或創建衍生作品。</p>

          <h2 className="heading-md mt-8 mb-4">7. 用戶行為</h2>
          <p>在使用我們的網站時，您同意：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>不進行任何非法或未經授權的活動</li>
            <li>不破壞網站功能或上傳惡意程式</li>
            <li>不冒充他人或實體</li>
            <li>不收集其他用戶的資料</li>
          </ul>

          <h2 className="heading-md mt-8 mb-4">8. 免責聲明</h2>
          <p>我們的網站和產品按「現狀」提供，不作任何明示或暗示的保證。在法律允許的範圍內，我們不對使用我們網站或產品可能導致的任何損失或損害負責。</p>

          <h2 className="heading-md mt-8 mb-4">9. 條款變更</h2>
          <p>我們保留隨時修改這些條款的權利。修改後的條款將在網站上發布時生效。繼續使用我們的網站將視為接受修改後的條款。</p>

          <h2 className="heading-md mt-8 mb-4">10. 聯絡我們</h2>
          <p>如果您對我們的服務條款有任何疑問或顧慮，請通過以下方式聯絡我們：</p>
          <p>電郵：hi@littletailsplanet.com</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Terms;
