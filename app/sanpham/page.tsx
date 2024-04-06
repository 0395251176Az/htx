import React from "react";

const data = [
  {
    id: 1,
    body1:
      "Bưởi da xanh Phước Bình, một niềm tự hào của Thôn Gia É, xã Phước Bình, huyện Bác Ái, tỉnh Ninh Thuận, không chỉ là biểu tượng của vùng đất nắng gió mà còn là hương vị độc đáo, khó quên trong lòng những người đã thưởng thức. Được mệnh danh là vàng xanh của Ninh Thuận, loại bưởi này sở hữu vẻ ngoài hấp dẫn với lớp vỏ mịn màng, màu xanh đặc trưng và kích thước ấn tượng. ",
    body2:
      "Đặc biệt, với hương vị ngọt ngào, pha chút chua nhẹ, cùng với độ giòn sần sật của từng tép, bưởi da xanh Phước Bình đã trở thành một lựa chọn không thể thiếu trong dịp lễ Tết và các sự kiện quan trọng. Không chỉ là một sản phẩm nông nghiệp chất lượng cao, bưởi da xanh Phước Bình còn mang trong mình câu chuyện của sự kiên trì, bền bỉ và tinh thần ",
    img: "/buoi.jpg",
    video: "",
  },
  {
    id: 2,
    body1:
      "lao động sáng tạo của người dân Thôn Gia É. Họ đã và đang không ngừng nỗ lực để duy trì và phát triển loại quả đặc sản này, không chỉ phục vụ cho nhu cầu trong nước mà còn hướng tới thị trường quốc tế.",
    body2:
      "Với tiềm năng xuất khẩu lớn, bưởi da xanh Phước Bình không chỉ là một sản phẩm nông nghiệp mà còn là cơ hội để quảng bá hình ảnh và văn hóa của tỉnh Ninh Thuận tới bạn bè quốc tế. Mỗi quả bưởi không chỉ chứa đựng hương vị thơm ngon mà còn là thông điệp về một Ninh Thuận màu mỡ, tươi đẹp, giàu bản sắc văn hóa.",
    img: "/buoi1.jpg",
  },

  {
    id: 3,
    body1:
      "Nằm giữa những cánh đồng Ninh Thuận, Rượu chuối mồ côi Gia E là tinh hoa của Thôn Gia É, nơi sự kiên nhẫn và sáng tạo được ướp nên từng giọt rượu. Từ những quả chuối được chọn lọc cẩn thận, loại rượu này phản ánh hương vị độc đáo của vùng đất nắng gió. ",
    body2:
      "Mỗi chai rượu không chỉ đem đến trải nghiệm thưởng thức đậm đà mà còn là món quà ý nghĩa, biểu tượng cho lòng mến khách của người dân địa phương. Rượu chuối mồ côi Gia E - niềm tự hào của Ninh Thuận, đóng góp cho bản sắc văn hóa và ẩm thực Việt.",
    img: "/chuoi1.jpg",
    video: "",
  },
  {
    id: 4,
    body1:
      "Thôn Gia É, xã Phước Bình, huyện Bác Ái, tỉnh Ninh Thuận, không chỉ nổi tiếng với những sản phẩm nông nghiệp chất lượng cao mà còn là nơi khai sinh ra những bảo bối dược liệu quý giá. Trong số đó, dược liệu nổi bật được thu hái và chế biến bởi bàn tay tận tụy của người dân nơi đây,",
    body2:
      "đặc biệt hữu ích trong việc hỗ trợ sức khỏe và điều trị nhiều loại bệnh. Thôn Gia É tự hào giới thiệu những sản phẩm dược liệu tự nhiên, phản ánh truyền thống lâu đời và kiến thức dân gian phong phú, một phần tinh túy của Ninh Thuận gửi đến mọi người. Thôn Gia É, nằm trên mảnh đất Phước Bình, tỉnh Ninh Thuận, đã từ lâu được biết đến với những vườn sầu riêng xanh mát, trái đều đặn và thơm lừng. Sầu riêng ở đây, nhờ vào khí hậu nhiệt đới và đất đai màu mỡ, mang hương vị đậm đà và ngọt ngào, làm say lòng biết bao người thưởng thức. ",
    img: "/duoc1.jpg",
    video: "",
  },
  {
    id: 5,
    body1:
      "Đến với Thôn Gia É, du khách không chỉ được khám phá vẻ đẹp của những vườn sầu riêng rợp bóng mà còn có cơ hội thưởng thức trái sầu riêng tại chỗ, trải nghiệm một phần tinh túy của đặc sản Ninh Thuận.",
    body2:
      "Trong hình ảnh là những củ khoai môn tươi ngon vừa được thu hoạch, một hình ảnh thường thấy ở những vùng nông thôn màu mỡ. Khoai môn, còn được biết đến với cái tên taro, là một phần không thể thiếu trong nền ẩm thực đa dạng của nhiều quốc gia.",
    img: "/sau.jpg",
    video: "",
  },
  {
    id: 6,
    body1:
      "Bên cạnh giá trị dinh dưỡng cao, khoai môn còn là nguồn cung cấp năng lượng dồi dào và là thành phần chính trong nhiều món ăn truyền thống. Khoai môn có thể chế biến thành nhiều món khác nhau, từ các món hầm, súp cho đến các món bánh ngọt và thậm chí là món ăn vặt khi được chiên giòn.",
    body2:
      "Thanh bùi, mềm mại, khoai môn không chỉ là thực phẩm giàu chất xơ mà còn là nguyên liệu tạo nên hương vị của tình yêu và sự ấm áp trong mỗi bữa cơm gia đình. Trên những dòng nước yên bình, khoảnh khắc ngừng lại để nhường chỗ cho sự bình yên tuyệt đối. ",
    img: "/mon.jpg",
    video: "",
  },
  {
    id: 7,
    body1:
      " Khám phá vẻ đẹp hiếm có này từ một góc nhìn mới mẻ, trên một chiếc kayak lướt nhẹ trên mặt hồ phản chiếu bầu trời xanh thẳm. Đây là cơ hội để trải nghiệm sự hùng vĩ của thiên nhiên, để thấy mình nhỏ bé giữa vũ trụ rộng lớn, và để cảm nhận trọn vẹn mọi nhịp đập của cuộc sống.",
    body2:
      "Vẻ đẹp yên bình nhưng đầy mê hoặc của nơi này chắc chắn sẽ là điểm dừng chân lý tưởng cho mọi du khách, mang đến những giây phút thư giãn không thể quên.",
    img: "/lich.jpg",
    video: "",
  },
];

const aboutPage = () => {
  return (
    <div className=" bg-gradient-to-t from-green-200">
      <div className="container max-w-screen-xl xl:p-10 xl:px-20">
        <div className="title flex flex-col items-center ">
          <h1 className="text-2xl text-[hsl(143,54%,64%)]">
            Sản Phẩm đặc Trưng Của Green Fram
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
