import React from "react";

const data = [
  {
    id: 1,
    body1:
      "Green Farm Ninh Thuận, một tổ chức từ thiện với tâm huyết và sự nỗ lực không ngừng nhằm cải thiện cuộc sống cộng đồng, đã thực hiện nhiều dự án có ý nghĩa trên khắp vùng đất nắng gió này.",
    body2:
      "Từ việc hỗ trợ giáo dục cho trẻ em nghèo đến các chương trình bảo vệ môi trường, Green Farm Ninh Thuận đã để lại dấu ấn sâu đậm trong lòng người dân địa phương cũng như các nhà hảo tâm trong và ngoài tỉnh. Chương trình 'Sách và Tri Thức': Green Farm Ninh Thuận đã thành lập thư viện miễn phí cho các em học sinh tại nhiều trường học, cung cấp sách giáo khoa, sách tham khảo và tài liệu giáo dục, giúp mở rộng kiến thức và nuôi dưỡng tình yêu học hỏi.",
    img: "/thien1.jpg",
    video: "",
  },
  {
    id: 2,
    body1:
      "Dự án Xanh Hóa Trường Học: Tổ chức đã phát động dự án trồng cây xanh tại các khuôn viên trường học, tạo không gian xanh mát, thân thiện với môi trường, đồng thời giáo dục học sinh về tầm quan trọng của việc bảo vệ thiên nhiên.",
    body2:
      "Chương trình Nước Sạch cho Ngày Mai: Nhận thức rõ về vấn đề nước sạch ở các vùng nông thôn, Green Farm Ninh Thuận đã đầu tư xây dựng hệ thống cung cấp nước sạch, giúp cải thiện sức khỏe cộng đồng.",
    img: "/thien2.jpg",
  },

  {
    id: 3,
    body1:
      "Sự kiện Hành Trình Kết Nối Yêu Thương: Đây là sự kiện thường niên, nơi mà những tấm lòng hảo tâm có thể chung sức đóng góp và tặng quà cho trẻ em và người già cơ nhỡ, mang đến niềm vui và sự ấm áp trong cuộc sống.",
    body2:
      "Chương trình Bảo Vệ Môi Trường: Hành động không ngừng nghỉ nhằm giảm thiểu rác thải nhựa, tái chế và sử dụng lại nguồn tài nguyên, Green Farm Ninh Thuận đã góp phần vào việc tạo lập một môi trường sống xanh và sạch hơn. Tại Green Farm Ninh Thuận, mỗi hành trình từ thiện không chỉ là việc phân phát quà hay triển khai dự án, mà còn là quá trình gieo rắc những giá trị tốt đẹp và truyền cảm hứng cho cộng đồng.",
    img: "/thien3.jpg",
    video: "",
  },
  {
    id: 4,
    body1:
      "Những nỗ lực không mệt mỏi của họ đã giúp tạo nên một sự thay đổi tích cực trong nhận thức và hành động của người dân địa phương, từ việc tiết kiệm nguồn nước, bảo vệ môi trường đến việc thúc đẩy giáo dục cho thế hệ trẻ. Hành trình từ thiện của Green Farm Ninh Thuận không chỉ thể hiện qua các dự án mà còn qua tình nguyện viên - những người đã không tiếc thời gian và công sức để thực hiện các mục tiêu cao cả. Cùng với sự hỗ trợ của cộng đồng và sự quan tâm từ mọi người, ",
    body2:
      "Green Farm Ninh Thuận tiếp tục mở rộng và phát triển các hoạt động từ thiện, hướng đến một tương lai tươi sáng cho mọi người dân Ninh Thuận. ",
    img: "/thien4.jpg",
    video: "",
  },
];

const aboutPage = () => {
  return (
    <div className=" bg-gradient-to-t from-green-200">
      <div className="container max-w-screen-xl xl:p-10 xl:px-20">
        <div className="title flex flex-col items-center ">
          <h1 className="text-2xl text-[hsl(143,54%,64%)]">
            Hành Trình Thiện Nguyện Của Green Fram
          </h1>
        </div>
        {data.map((data) => (
          <div
            className="mt-10 grid items-center justify-center gap-10 sm:grid-cols-2 xl:grid-cols-5"
            key={data.id}
          >
            {data.id % 2 !== 0 ? (
              <div className="col-span-3 items-center">
                <div className="flex items-center  rounded-lg">
                  {data.video && (
                    <video
                      autoPlay
                      loop
                      muted
                      className="h-full w-full rounded-3xl bg-transparent"
                    >
                      <source src={data.video} type="video/mp4" />
                    </video>
                  )}
                  {data.img && (
                    <img
                      src={data.img}
                      className="h-full w-full rounded-3xl bg-transparent"
                    />
                  )}
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
                  {data.video && (
                    <video
                      autoPlay
                      loop
                      muted
                      className="h-full w-full rounded-3xl bg-transparent"
                    >
                      <source src={data.video} type="video/mp4" />
                    </video>
                  )}
                  {data.img && (
                    <img
                      src={data.img}
                      className="h-full w-full rounded-3xl bg-transparent"
                    />
                  )}
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
