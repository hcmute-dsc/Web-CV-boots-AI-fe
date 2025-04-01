import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faListUl,
  faEye,
  faCheckCircle,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import TipCard from "../components/TipCard";
import ComparisonBox from "../components/ComparisonBox";
import QuoteTip from "../components/QuoteTip";

const CVTips = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12 md:mb-16 transition-transform duration-500 hover:scale-105 will-change-transform">
          <h1 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800">
            Mẹo viết CV hiệu quả
          </h1>
          <p className="text-lg text-gray-600 mx-auto whitespace-nowrap">
            Những mẹo và lời khuyên hữu ích giúp bạn tạo một CV ấn tượng, thu
            hút nhà tuyển dụng.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-12">
          <TipCard
            icon={faCheckCircle}
            title="Tùy chỉnh CV cho từng vị trí ứng tuyển"
            iconBgColor="bg-blue-100"
          >
            <p className="mb-4 text-sm md:text-base">
              Đừng sử dụng một CV cho tất cả các vị trí bạn ứng tuyển. Hãy điều
              chỉnh CV của bạn để phù hợp với từng vị trí cụ thể bằng cách:
            </p>

            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm md:text-base">
              <li className="transition-transform duration-200 hover:translate-x-1 hover:text-primary will-change-transform">
                Tìm hiểu và sử dụng các từ khóa liên quan đến vị trí
              </li>
              <li className="transition-transform duration-200 hover:translate-x-1 hover:text-primary will-change-transform">
                Nhấn mạnh những kỹ năng và kinh nghiệm phù hợp nhất
              </li>
              <li className="transition-transform duration-200 hover:translate-x-1 hover:text-primary will-change-transform">
                Điều chỉnh phần mục tiêu nghề nghiệp cho phù hợp
              </li>
            </ul>

            <QuoteTip>
              <p className="text-sm md:text-base">
                Các nhà tuyển dụng chỉ dành khoảng 6-7 giây để xem xét một CV.
                Đảm bảo CV của bạn thu hút sự chú ý ngay lập tức.
              </p>
            </QuoteTip>
          </TipCard>

          <TipCard
            icon={faChartLine}
            title="Sử dụng số liệu và thành tựu cụ thể"
            iconBgColor="bg-indigo-100"
          >
            <p className="mb-4 text-sm md:text-base">
              Thay vì chỉ liệt kê các nhiệm vụ, hãy nhấn mạnh thành tựu của bạn
              bằng số liệu và kết quả cụ thể:
            </p>

            <ComparisonBox
              badExample="Phụ trách các chiến dịch marketing qua email"
              goodExample="Tăng tỷ lệ mở email lên 45% và tăng doanh thu từ email marketing 30% trong 6 tháng"
            />
            <p className="mb-4 text-sm md:text-base">
              Sử dụng các động từ mạnh mẽ ( như "đạt được","cải
              thiện","tăng","giảm") và kết hợp với các con số cụ thể sẽ làm nổi
              bật giá trị bạn mang lại cho công ty trước đây
            </p>
          </TipCard>

          <TipCard
            icon={faListUl}
            title="Sắp xếp thông tin hợp lý"
            iconBgColor="bg-purple-100"
          >
            <p className="mb-4 text-sm md:text-base">
              Cách bạn sắp xếp thông tin trong CV rất quan trọng. Dưới đây là
              một số nguyên tắc cần đặc biệt chú ý:
            </p>

            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm md:text-base">
              <li className="transition-transform duration-200 hover:translate-x-1 hover:text-primary will-change-transform">
                Đặt thông tin quan trọng nhất lên đầu – nhà tuyển dụng thường
                chỉ chú ý đến các phần đầu tiên của CV
              </li>
              <li className="transition-transform duration-200 hover:translate-x-1 hover:text-primary will-change-transform">
                Sử dụng cách trình bày theo thứ tự thời gian ngược (bắt đầu từ
                kinh nghiệm gần nhất)
              </li>
              <li className="transition-transform duration-200 hover:translate-x-1 hover:text-primary will-change-transform">
                Đảm bảo bố cục rõ ràng, dễ đọc với các phần (font chữ, cỡ chữ,
                khoảng cách, v.v.)
              </li>
            </ul>

            <QuoteTip type="warning">
              <p className="text-sm md:text-base">
                <span className="font-semibold"> Mẹo:</span> Nếu bạn là sinh
                viên mới tốt nghiệp, hãy đặt phần học vấn lên trên kinh nghiệm
                làm việc. Ngược lại, nếu bạn đã có kinh nghiệm, hãy đặt phần
                kinh nghiệm làm việc trước.
              </p>
            </QuoteTip>
          </TipCard>

          <TipCard
            icon={faEye}
            title="Tập trung vào tính dễ đọc"
            iconBgColor="bg-green-100"
          >
            <p className="mb-4 text-sm md:text-base">
              CV của bạn phải dễ đọc và dễ quét. Điều này có nghĩa là:
            </p>

            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm md:text-base">
              <li className="transition-transform duration-200 hover:translate-x-1 hover:text-primary will-change-transform">
                Sử dụng font chữ đơn giản, chuyên nghiệp (Arial, Calibri, Times
                New Roman)
              </li>
              <li className="transition-transform duration-200 hover:translate-x-1 hover:text-primary will-change-transform">
                Sử dụng cỡ chữ từ 10-12pt cho nội dung chính
              </li>
              <li className="transition-transform duration-200 hover:translate-x-1 hover:text-primary will-change-transform">
                Sử dụng khoảng trắng để làm CV trở nên gọn gàng
              </li>
              <li className="transition-transform duration-200 hover:translate-x-1 hover:text-primary will-change-transform">
                Sử dụng bullet points thay vì đoạn văn dài
              </li>
              <li className="transition-transform duration-200 hover:translate-x-1 hover:text-primary will-change-transform">
                Giữ CV trong khoảng 1-2 trang (trừ khi bạn ở vị trí cấp cao hoặc
                lĩnh vực học thuật)
              </li>
            </ul>

            <QuoteTip>
              <p className="text-sm md:text-base">
                <span className="font-semibold">Ghi nhớ:</span> CV của bạn phải
                trong trạng thái ngắn gọn từ cái nhìn đầu tiên. Thiết kế đơn
                giản, sạch sẽ thường là lựa thiết kế phù hợp.
              </p>
            </QuoteTip>
          </TipCard>

          <TipCard
            icon={faCheckCircle}
            title="Kiểm tra kỹ lưỡng"
            iconBgColor="bg-red-100"
          >
            <p className="mb-4 text-sm md:text-base">
              Lỗi chính tả và ngữ pháp có thể khiến bạn bị loại ngay lập tức.
              Hãy đảm bảo CV của bạn không có lỗi:
            </p>

            <ul className="list-disc pl-6 mb-4 space-y-2 text-sm md:text-base">
              <li className="transition-transform duration-200 hover:translate-x-1 hover:text-primary will-change-transform">
                Kiểm tra chính tả và ngữ pháp nhiều lần
              </li>
              <li className="transition-transform duration-200 hover:translate-x-1 hover:text-primary will-change-transform">
                Nhờ người khác đọc lại CV của bạn
              </li>
              <li className="transition-transform duration-200 hover:translate-x-1 hover:text-primary will-change-transform">
                Đọc CV phát hiện các lỗi khó nhận biết
              </li>
              <li className="transition-transform duration-200 hover:translate-x-1 hover:text-primary will-change-transform">
                Kiểm tra tính chính xác trong định dạng (khoảng cách, font chữ)
              </li>
            </ul>

            <QuoteTip type="error">
              <FontAwesomeIcon
                icon={faExclamationTriangle}
                style={{ marginRight: "8px" }}
              />
              Theo một nghiên cứu, 77% nhà tuyển dụng loại bỏ CV có lỗi chính tả
              hoặc ngữ pháp.
            </QuoteTip>
          </TipCard>
        </div>
      </main>
    </div>
  );
};

export default CVTips;
