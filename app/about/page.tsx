import React from "react";

const data = [
  {
    id: 1,
    body1:
      "Được thành lập vào ngày 27 tháng 10 năm 2023, HTX Nông nghiệp – du lịch Greenfarm Phước Bình tập trung xây dựng và phát triển ở hai lĩnh vực: nông nghiệp và du lịch cộng đồng. Với đội ngũ sáng lập HTX trẻ, năng động, đầy nhiệt huyết và đam mê với ngành nông nghiệp và du lịch cộng đồng",
    body2:
      "Greenfarm hướng tới phát triển bền vững, gia tăng giá trị nông sản, giúp người dân nâng cao đời sống vật chất và tinh thần, xóa đói giảm nghèo, đồng thời góp phần phát triển kinh tế xã hội tại địa phương.",
    img: "",
    video: "./HTX.mp4",
  },
  {
    id: 2,
    body1:
      "Nhận thấy xã Phước Bình, huyện Bác Ái, tỉnh Ninh Thuận được thiên nhiên ưu đãi về khí hậu, thổ nhưỡng rất phù hợp để phát triển DU LỊCH CỘNG ĐỒNG",
    body2:
      "Kết hợp phát triển nông sản đặc thù: bưởi, sầu riêng, chuối sứ, chuối cô đơn,….với Cộng đồng hơn 95% người đồng bào với những nét bản sắc văn hóa dân tộc rất độc đáo.",
    img: "",
    video: "./1.mp4",
  },

  {
    id: 3,
    body1:
      "Trong thời gian tới, tranh thủ các chính sách hỗ trợ của Nhà nước về phát triển kinh tế tập thể, HTX nông nghiệp du lịch",
    body2:
      "Greenfarm Phước Bình tiếp tục phát triển các sản phẩm thế mạnh của HTX, mở rộng diện tích vùng sản xuất tập trung theo tiêu chuẩn sản phẩm xanh – sạch – hữu cơ, đồng thời nâng cao năng lực sơ chế, bảo quản nông sản của HTX đáp ứng nhu cầu thị trường trong và ngoài nước.",
    img: "",
    video: "./2.mp4",
  },
  {
    id: 4,
    body1:
      "Bên cạnh đó, nắm bắt kịp thời nhu cầu và định hướng phát triển chuỗi du lịch nông nghiệp, du lịch cộng đồng, du lịch thiện nguyện; HTX đã xây dựng kế hoạch và đưa ra những giải pháp cụ thể nhằm khai thác hoạt động dịch vụ du lịch trải nghiệm, du lịch nông thôn,",
    body2:
      "Từng bước xây dựng và hướng tới hoàn thiện mô hình HTX “Liên kết sản xuất nông nghiệp theo chuỗi giá trị bền vững kết hợp với khai thác dịch vụ du lịch cộng đồng”, giúp thành viên HTX nâng cao thu nhập, góp phần phát triển kinh tế - xã hội địa phương và xây dựng nông thôn mới.",
    img: "",
    video: "./3.mp4",
  },
  {
    id: 5,
    body1:
      "Tập thể Greenfarm chúng tôi tin rằng, với những lợi thế sẵn có, HTX sẽ cùng với bà con ở Phước Bình xây dựng và phát triển một nền nông nghiệp – du lịch bền vững  - vươn xa hơn trong thời gian tới.",
    body2:
      "'Đối với tôi, Phước Bình có nhiều thế mạnh: cảnh quan, sản phẩm văn hoá bản địa, đặc biệt là Vườn quốc gia Phước Bình có nhiều cảnh quan núi rừng hùng vĩ, và… nhiều, nhiều thứ lắm. Tôi thực sự mong muốn HTX sẽ giúp bà con có thêm thu nhập, đẩy mạnh phát triển bền vững và cải thiện kinh tế. Ngoài ra, tôi mong muốn HTX này cũng để lại ấn tượng gì đó cho mọi người nữa. Chính vì thế, làm gì cũng phải làm tới, tới là tới nơi tới chốn, phải hoàn thiện để chào đón tương lai rộng mở'. ",
    img: "",
    video: "./4.mp4",
  },
  {
    id: 6,
    body1:
      "Tôi trân trọng tri ân sự ủng hộ của cộng đồng, sự đồng lòng, tin tưởng của đối tác, sự hỗ trợ tích cực của các cơ quan ban ngành từ Trung ương đến địa phương, đặc biệt là sự đoàn kết và đóng góp của đội ngũ lãnh đạo và những thành viên trong HTX Greenfarm Phước Bình.",
    body2:
      "Những tình cảm ấy chính là sức mạnh, là nguồn động lực to lớn giúp Greenfarm Phước Bình vững tin, phát triển bền vững trước những thử thách trong quá trình thực hiện mục tiêu, sứ mệnh đã đặt ra.",
    img: "",
    video: "./5.mp4",
  },
  {
    id: 7,
    body1:
      "Trong thời gian tới, tranh thủ các chính sách hỗ trợ của Nhà nước về phát triển kinh tế tập thể, HTX nông nghiệp du lịch",
    body2:
      "Greenfarm Phước Bình tiếp tục phát triển các sản phẩm thế mạnh của HTX, mở rộng diện tích vùng sản xuất tập trung theo tiêu chuẩn sản phẩm xanh – sạch – hữu cơ, đồng thời nâng cao năng lực sơ chế, bảo quản nông sản của HTX đáp ứng nhu cầu thị trường trong và ngoài nước.",
    img: "",
    video: "./6.mp4",
  },
];

const aboutPage = () => {
  return (
    <div className=" bg-gradient-to-t from-green-200">
      <div className="container max-w-screen-xl p-10 px-20">
        <div className="title flex flex-col items-center ">
          <h1 className="text-2xl">VỀ CHÚNG TÔI</h1>
        </div>
        {data.map((data) => (
          <div
            className="mt-10 grid items-center justify-center gap-10 sm:grid-cols-2 xl:grid-cols-5"
            key={data.id}
          >
            {data.id % 2 !== 0 ? (
              <div className="col-span-3 items-center">
                <div className="flex items-center  rounded-lg">
                  <video
                    autoPlay
                    loop
                    muted
                    className="h-full w-full rounded-3xl bg-transparent"
                  >
                    <source src={data.video} type="video/mp4" />
                  </video>
                </div>
              </div>
            ) : (
              <div className="col-span-3 xl:col-span-2 ">
                <div className="body flex items-center justify-center rounded-lg border-[2px] p-4 text-justify font-medium">
                  <h1>
                    {data.body1}
                    <hr className="p-2" />
                    {data.body2}
                  </h1>
                </div>
              </div>
            )}

            {data.id % 2 !== 0 ? (
              <div className="col-span-3  xl:col-span-2">
                <div className="body flex items-center justify-center rounded-lg border-[2px] p-4 text-justify font-medium">
                  <h1>
                    {data.body1}
                    <hr className="p-2" />
                    {data.body2}
                  </h1>
                </div>
              </div>
            ) : (
              <div className="col-span-3 items-center">
                <div className="flex items-center  rounded-lg">
                  <video
                    autoPlay
                    loop
                    muted
                    className="h-full w-full rounded-3xl bg-transparent"
                  >
                    <source src={data.video} type="video/mp4" />
                  </video>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default aboutPage;
