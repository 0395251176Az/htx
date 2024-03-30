"use client";
import { useParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiTimeLine } from "react-icons/ri";

const data = [
  {
    id: 1,
    title: "Bao nhiêu loài đã tuyệt chủng do biến đổi khí hậu",
    date: "January 23 2022",
    description: [
      "Thế giới đã và đang chứng kiến sự đa dạng tuyệt vời của các loài động thực vật. Đứng trước những dự đoán về hậu quả của Biến đổi khí hậu, việc bảo vệ sự đa dạng sinh học này thực sự là một nhiệm vụ cấp bách. Tuy nhiên đối với một số loài, sự nhận ra vấn đề của chúng ta đã quá chậm trễ. Hiệp hội Bảo tồn Thiên nhiên Quốc tế (IUCN) ước tính có 882 loài thực vật và động vật đã tuyệt chủng, và con số này chắc chắn chưa dừng lại.",
    ],
    img: "/assets/section/Picture1.png",
    data: [
      {
        id: 1,
        title: "Số lượng loài đã tuyệt chủng",
        description: [
          "Loài động vật có vú đầu tiên chính thức tuyệt chủng vào năm 2019 là Bramble Cay melomys - một loài động vật có vú trong họ Chuột, bộ Gặm nhấm. Những sinh vật nhỏ này chỉ sống trên một hòn đảo nhỏ gần bờ biển Papua New Guinea, nơi mà do mực nước biển tăng cao đã lấn vào 97% môi trường sống của chúng. Tình trạng này không dừng lại ở loài Chuột trên mà hiện đang đe dọa nhiều môi trường sống của rất nhiều loài sinh vật khác, trong đó có cả con người.",
          "Sự tuyệt chủng của Bramble Cay melomys là một tin tức đáng buồn và mang tính cảnh báo loài người. Tuy nhiên, ngành khoa học nghiên cứu các loài động thực vật cũng gặp khó khăn trong việc theo dõi và xác định chính xác số lượng loài. Sự tuyệt chủng được ước tính xảy ra ở những loài chưa được xác nhận hoặc đặt tên chính thức (nhưng sau này được xác định thông qua bảo tàng và hồ sơ khoa học). Cho đến nay, các nhà khoa học đã xác định được ~1,9 - 2,16 triệu loài động vật và 450.000 loài thực vật, và vẫn có hàng triệu loài khác chưa được xác định và đặt tên.",
          "Ngoài ra, có một danh sách dài các loài được phân loại là 'tuyệt chủng trong tự nhiên' (EW). Tuyệt chủng trong tự nhiên (Extinct in the Wild, EW) hoặc tuyệt chủng ngoài thiên nhiên, tuyệt chủng trong môi trường hoang dã là một trạng thái bảo tồn của sinh vật được quy định trong Sách đỏ IUCN. Một loài hoặc dưới loài bị coi là tuyệt chủng trong tự nhiên khi không ghi nhận được cá thể nào qua các cuộc khảo sát kỹ lưỡng ở sinh cảnh đã biết và hoặc sinh cảnh dự đoán, vào những thời gian thích hợp (theo ngày, mùa năm) xuyên suốt vùng phân bố lịch sử của loài. Các khảo sát nên vượt khung thời gian thích hợp cho vòng sống và dạng sống của đơn vị phân loại đó. Các cá thể của loài này có thể chỉ còn được tìm thấy với số lượng rất ít trong sinh cảnh nhân tạo và phụ thuộc hoàn toàn vào chăm sóc của con người (còn tồn tại rất ít trong môi trường nuôi nhốt).",
          "Hiện có 77 loài động vật được phân loại là EW, bao gồm bạch dương szaferi của Ba Lan, côca echinodendron của Cuba, đại kích mayurnathanii ở Ấn Độ,...",
        ],
      },
      {
        id: 2,
        title: "Biến đổi Khí hậu và nguyên nhân tuyệt chủng",
        description: [
          "Ở trong lịch sử, tuyệt chủng là một điều tự nhiên trong quá trình tiến hóa. Mọi thứ sẽ đến, sinh tồn và cuối cùng là mất đi. Tuy nhiên, hiện nay, quá trình tuyệt chủng diễn ra nhanh gấp 100 lần so với mức độ tự nhiên bởi có bàn tay của con người.",
          "Các yếu tố chính gây mất đa dạng sinh học đã được nhấn mạnh là đánh bắt cá quá mức, ô nhiễm môi trường nặng nề và biến đổi khí hậu. Với vấn đề nhất nằm ở sự phá hủy của môi trường sống tự nhiên.",
        ],
      },
      {
        id: 3,
        title: "Đánh bắt cá quá mức",
        description: [
          "Khi quá nhiều cá bị bắt khiến các quần thể cá không phục hồi kịp. Và do số lượng cá không kịp sinh sôi lại, nhiều loài động vật biển khác đã bị ảnh hưởng. Trong đó có thể kể đến rùa và cá heo vì chúng đã mất dần lượng thức ăn (đứt gãy chuỗi thức ăn tự nhiên). Ước tính rằng 33% nguồn cá đang bị khai thác quá mức và khó có khả năng phục hồi, đồng thời đã có mất mát 50% mảng san hô sống từ năm 1870.",
        ],
      },
      {
        id: 4,
        title: "Biến đổi Khí hậu",
        description: [
          "Tất cả thực vật và động vật đều có một phạm vi nhiệt độ mà chúng phù hợp và phát triển tốt nhất. Một trong những cách chính mà biến đổi khí hậu gây ra tuyệt chủng là sự nóng lên toàn cầu, khiến cho những loài này không thể sống trong môi trường tự nhiên của chúng. Chúng bị buộc phải thích ứng hoặc di chuyển khỏi nơi đó, sau đó phải đối mặt với áp lực lớn về môi trường, thức ăn để sống sót. Ngoài ra, các nhà khoa học đã xác định những nguyên nhân gián tiếp (từ việc biến đổi khí hậu) gây tuyệt chủng cho ở nhiều loài: Ảnh hưởng tiêu cực của hành vi tránh nhiệt, tìm môi trường mới, sự mất mát các loài thụ phấn và Ảnh hưởng tích cực của biến đổi khí hậu đối với các loại ký sinh, sinh vật gây bệnh và đối thủ cạnh tranh.",
        ],
      },
      {
        id: 5,
        title: "Mất môi trường sống",
        description: [
          "Ô nhiễm, đánh bắt cá quá mức và biến đổi khí hậu đều đóng góp vào mất môi trường sống, đã được xác định là nguyên nhân LỚN NHẤT đằng sau sự giảm tốc độ đa dạng sinh học và tăng tốc độ tuyệt chủng. 75% môi trường đất đai trên trái đất đã bị biến đổi mạnh do hành động của con người. Hiện nay, 9% số loài trên thế giới không có môi trường sống đủ để tồn tại lâu dài. Một trong những ví dụ rõ ràng về phá hủy môi trường sống là sự tàn phá rừng đang xảy ra trên khắp thế giới, đặc biệt là rừng nhiệt đới Amazon.",
        ],
      },

      {
        id: 6,
        title: "Đối mặt và giải quyết vấn đề này như thế nào?",
        description: [
          "Những giải pháp dựa trên việc gìn giữ thiên nhiên là một cách tuyệt vời để đối phó với mất môi trường sống vì những giải pháp đó bao gồm việc nuôi dưỡng, bảo vệ toàn diện thiên nhiên để chống lại khí thải nhà kính và ảnh hưởng của chúng. Chúng ta cần bảo tồn và phát triển lại hệ sinh thái và môi trường sống, từ đó giải quyết vấn đề CO2 một cách hiệu quả hơn và giúp bảo vệ đa dạng sinh học của hành tinh.",
        ],
      },
      {
        id: 7,
        title: "Mối đe dọa đối với chúng ta",
        description: [
          "Mọi thứ trong thế giới tự nhiên đều liên kết với nhau, điều này có nghĩa là sự tuyệt chủng của một loài có tác động trực tiếp đến loài khác. Ngoài ra, theo như chương trình của BBC 'Sự thật về Tuyệt chủng', những nhà sinh thái học tin rằng nếu chúng ta tiếp tục theo con đường này, đại dịch Covid vừa rồi sẽ không chỉ là một sự kiện duy nhất.. Điều này là do sự phá hủy môi trường sống đã làm cho các vi sinh vật, vi khuẩn độc hại có môi trường phát triển mạnh mẽ. Trong thực tế, nhiều nhà khoa học và sinh thái học đồng thuận rằng chúng ta càng làm ảnh hưởng đến sự sống của các loài khác trên Trái Đất, thì chúng ta cũng đang đẩy bản thân mình tới chỗ diệt vong.",
        ],
      },
      {
        id: 8,
        title: "Bao nhiêu loài đang đối mặt với nguy cơ tuyệt chủng?",
        description: [
          "Hiện nay, Danh sách Đỏ của IUCN ghi chú có 882 loài đã tuyệt chủng, trong đó có 77 loài tuyệt chủng trong tự nhiên (EW).",
          "Những con số này có vẻ không được nhiều người quá quan tâm bởi so với những loài đang sống sót thì nó quá nhỏ bé. Bên cạnh đó, mọi người thường chỉ quan tâm đến csc loài vật hiện hữu xung quanh và cho rằng sự biến mất của các loài ở nơi khá là không liên quan, không mấy quan trọng. Tuy nhiên, trong thực tế, hàng nghìn hàng triệu loài động vật vẫn ở trong một môi trường sống là Trái Đất là loài nào cũng quan trọng đối với một hệ sinh thái khép kín.",
          "'Cách chúng ta lựa chọn loài nào sống sót và loài nào tuyệt chủng là cực kỳ thiển cận và thiếu sót; sự thiên lệch của chúng ta về việc bảo vệ những loài gần gũi xung quanh làm cho những sinh linh thực sự giữ cho hành tinh của chúng ta phát triển không được quan tâm đúng mức' - theo National Geographic.",
          "Một lần nữa, các giải pháp dựa vào thiên nhiên, mang lại cách tiếp cận toàn diện để bảo vệ hệ sinh thái, có thể là chìa khóa để ngăn chặn nhiều sự tuyệt chủng. Khi tất cả cây cỏ và động vật được đánh giá cao vì vai trò của chúng trong một môi trường sống, chúng có khả năng sống sót và phát triển. Điều quan trọng là phải biết rằng chúng ta có ảnh hưởng đến tương lai của hành tinh và sự sống trên đó để ngăn chặn kịp thời tình trạng tuyệt chủng.",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "Sức mạnh chữa lành của thiên nhiên",
    date: "January 23 2022",
    description: [
      "Rừng không đường mòn, cây xanh um tùm, cảnh đẹp thanh bình và bản hòa nhạc của các loài chim là kho báu tự nhiên mà ai cần phải trải nghiệm ít nhất một lần trong đời. Bởi thiên nhiên là con đường trong trẻo nhất dẫn đến bình an nội tâm, nó là nguồn năng lượng mạnh mẽ vô bờ và làm thuần khiết lại trái tim của con người. Một người hẳn là may mắn biết bao khi có cơ hội được hít thở trong môi trường không ô nhiễm, khi lồng ngực ta được tắm trong không khí trong lành và mũi ngập tràn hương thơm của mọi loài hoa.",
      "Dành thời gian ở giữa thiên nhiên sẽ giúp tâm trí có chốn nghỉ ngơi, đem lại cái nhìn tươi mới cho những mục tiêu phía trước. Bên cạnh đó, thiên nhiên còn giúp chúng ta làm lắng dịu lại tâm trí vốn hay lao xao, nhảy nhót. Điều này thực sự đã được nghiên cứu đối với nhóm trẻ em tăng động. Sau một thời gian tiếp xúc với thiên nhiên, những đứa trẻ đã có sự cải thiện rõ rệt về sự tập trung, ngoài ra các phần não liên quan đến sự đồng cảm và tình yêu cũng được “thắp sáng”.",
    ],
    img: "/assets/section/Picture2.png",
    data: [
      {
        id: 1,
        title: "Thiên nhiên đem lại sức mạnh nội tâm",
        description: [
          "Việc ở trong thiên nhiên giúp chúng ta kết nối với linh hồn của mình ở một cấp độ sâu sắc hơn. Năm giác quan của chúng ta hoạt động đầy đủ, và linh hồn của chúng ta phát triển một mối liên kết mạnh mẽ với thế giới tự nhiên. Hương thơm thuần khiết của cây cỏ và hoa lá mang đến cho chúng ta đến vẻ đẹp trong trẻo và sáng bừng. Chúng ta sẽ chạm thật sâu tới nội tâm nếu biết cách hòa điệu với nhịp điệu của thiên nhiên. Chúng ta có niềm vui từ sự chánh niệm, và biết cách thưởng thức những khoảnh khắc nhỏ trong cuộc sống.",
        ],
      },
      {
        id: 2,
        title: "Thiên nhiên đem lại sức mạnh nội tâm",
        description: [
          "Việc ở trong thiên nhiên giúp chúng ta kết nối với linh hồn của mình ở một cấp độ sâu sắc hơn. Năm giác quan của chúng ta hoạt động đầy đủ, và linh hồn của chúng ta phát triển một mối liên kết mạnh mẽ với thế giới tự nhiên. Hương thơm thuần khiết của cây cỏ và hoa lá mang đến cho chúng ta đến vẻ đẹp trong trẻo và sáng bừng. Chúng ta sẽ chạm thật sâu tới nội tâm nếu biết cách hòa điệu với nhịp điệu của thiên nhiên. Chúng ta có niềm vui từ sự chánh niệm, và biết cách thưởng thức những khoảnh khắc nhỏ trong cuộc sống.",
        ],
      },
      {
        id: 3,
        title: "Sự bình yên cho cơ thể",
        description: [
          "Khi ta tiếp xúc với thiên nhiên, ta được chữa lành tinh thần và cảm thấy dễ chịu. Thân thể và tâm hồn chưa bao giờ tách rời nhau, nên ta có thể cảm nhận được sự khỏe mạnh chảy trôi từ trong thể trí cho tới từng cơ bắp. Thiên nhiên giúp điều hòa huyết áp, ổn định nhịp tim và ngưng việc sản xuất các hormone căng thẳng. Một nghiên cứu cho thấy cảnh quan thiên nhiên giúp bệnh nhân chịu đau tốt hơn, vượt qua các cảm xúc tiêu cực và giảm thời gian nằm viện.",
          "Thiên nhiên có ảnh hưởng kỳ diệu đối với sức khỏe của chúng ta: nó giảm viêm nhiễm và ngăn chặn nhiều bệnh tật bằng cách kích thích hệ miễn dịch.",
          "Chúng ta cần dành thời gian để khai thác sự bình yên vĩnh cửu cho tâm trí, cơ thể và linh hồn trong thế kỷ 21 - Thời đại đô thị hóa này. Sự làm mới năng lượng bằng thiên nhiên sẽ trang bị cho chúng ta khoảng thời gian làm việc hiệu quả với tâm trạng hạnh phúc và cơ thể khỏe mạnh.",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Bao nhiêu loài đã tuyệt chủng do biến đổi khí hậu",
    date: "January 23 2022",
    description: [
      "Thế giới đã và đang chứng kiến sự đa dạng tuyệt vời của các loài động thực vật. Đứng trước những dự đoán về hậu quả của Biến đổi khí hậu, việc bảo vệ sự đa dạng sinh học này thực sự là một nhiệm vụ cấp bách. Tuy nhiên đối với một số loài, sự nhận ra vấn đề của chúng ta đã quá chậm trễ. Hiệp hội Bảo tồn Thiên nhiên Quốc tế (IUCN) ước tính có 882 loài thực vật và động vật đã tuyệt chủng, và con số này chắc chắn chưa dừng lại.",
    ],
    img: "/assets/section/Picture1.png",
    data: [
      {
        id: 1,
        title: "Số lượng loài đã tuyệt chủng",
        description: [
          "Loài động vật có vú đầu tiên chính thức tuyệt chủng vào năm 2019 là Bramble Cay melomys - một loài động vật có vú trong họ Chuột, bộ Gặm nhấm. Những sinh vật nhỏ này chỉ sống trên một hòn đảo nhỏ gần bờ biển Papua New Guinea, nơi mà do mực nước biển tăng cao đã lấn vào 97% môi trường sống của chúng. Tình trạng này không dừng lại ở loài Chuột trên mà hiện đang đe dọa nhiều môi trường sống của rất nhiều loài sinh vật khác, trong đó có cả con người.",
          "Sự tuyệt chủng của Bramble Cay melomys là một tin tức đáng buồn và mang tính cảnh báo loài người. Tuy nhiên, ngành khoa học nghiên cứu các loài động thực vật cũng gặp khó khăn trong việc theo dõi và xác định chính xác số lượng loài. Sự tuyệt chủng được ước tính xảy ra ở những loài chưa được xác nhận hoặc đặt tên chính thức (nhưng sau này được xác định thông qua bảo tàng và hồ sơ khoa học). Cho đến nay, các nhà khoa học đã xác định được ~1,9 - 2,16 triệu loài động vật và 450.000 loài thực vật, và vẫn có hàng triệu loài khác chưa được xác định và đặt tên.",
          "Ngoài ra, có một danh sách dài các loài được phân loại là 'tuyệt chủng trong tự nhiên' (EW). Tuyệt chủng trong tự nhiên (Extinct in the Wild, EW) hoặc tuyệt chủng ngoài thiên nhiên, tuyệt chủng trong môi trường hoang dã là một trạng thái bảo tồn của sinh vật được quy định trong Sách đỏ IUCN. Một loài hoặc dưới loài bị coi là tuyệt chủng trong tự nhiên khi không ghi nhận được cá thể nào qua các cuộc khảo sát kỹ lưỡng ở sinh cảnh đã biết và hoặc sinh cảnh dự đoán, vào những thời gian thích hợp (theo ngày, mùa năm) xuyên suốt vùng phân bố lịch sử của loài. Các khảo sát nên vượt khung thời gian thích hợp cho vòng sống và dạng sống của đơn vị phân loại đó. Các cá thể của loài này có thể chỉ còn được tìm thấy với số lượng rất ít trong sinh cảnh nhân tạo và phụ thuộc hoàn toàn vào chăm sóc của con người (còn tồn tại rất ít trong môi trường nuôi nhốt).",
          "Hiện có 77 loài động vật được phân loại là EW, bao gồm bạch dương szaferi của Ba Lan, côca echinodendron của Cuba, đại kích mayurnathanii ở Ấn Độ,...",
        ],
      },
      {
        id: 2,
        title: "Biến đổi Khí hậu và nguyên nhân tuyệt chủng",
        description: [
          "Ở trong lịch sử, tuyệt chủng là một điều tự nhiên trong quá trình tiến hóa. Mọi thứ sẽ đến, sinh tồn và cuối cùng là mất đi. Tuy nhiên, hiện nay, quá trình tuyệt chủng diễn ra nhanh gấp 100 lần so với mức độ tự nhiên bởi có bàn tay của con người.",
          "Các yếu tố chính gây mất đa dạng sinh học đã được nhấn mạnh là đánh bắt cá quá mức, ô nhiễm môi trường nặng nề và biến đổi khí hậu. Với vấn đề nhất nằm ở sự phá hủy của môi trường sống tự nhiên.",
        ],
      },
      {
        id: 3,
        title: "Đánh bắt cá quá mức",
        description: [
          "Khi quá nhiều cá bị bắt khiến các quần thể cá không phục hồi kịp. Và do số lượng cá không kịp sinh sôi lại, nhiều loài động vật biển khác đã bị ảnh hưởng. Trong đó có thể kể đến rùa và cá heo vì chúng đã mất dần lượng thức ăn (đứt gãy chuỗi thức ăn tự nhiên). Ước tính rằng 33% nguồn cá đang bị khai thác quá mức và khó có khả năng phục hồi, đồng thời đã có mất mát 50% mảng san hô sống từ năm 1870.",
        ],
      },
      {
        id: 4,
        title: "Biến đổi Khí hậu",
        description: [
          "Tất cả thực vật và động vật đều có một phạm vi nhiệt độ mà chúng phù hợp và phát triển tốt nhất. Một trong những cách chính mà biến đổi khí hậu gây ra tuyệt chủng là sự nóng lên toàn cầu, khiến cho những loài này không thể sống trong môi trường tự nhiên của chúng. Chúng bị buộc phải thích ứng hoặc di chuyển khỏi nơi đó, sau đó phải đối mặt với áp lực lớn về môi trường, thức ăn để sống sót. Ngoài ra, các nhà khoa học đã xác định những nguyên nhân gián tiếp (từ việc biến đổi khí hậu) gây tuyệt chủng cho ở nhiều loài: Ảnh hưởng tiêu cực của hành vi tránh nhiệt, tìm môi trường mới, sự mất mát các loài thụ phấn và Ảnh hưởng tích cực của biến đổi khí hậu đối với các loại ký sinh, sinh vật gây bệnh và đối thủ cạnh tranh.",
        ],
      },
      {
        id: 5,
        title: "Mất môi trường sống",
        description: [
          "Ô nhiễm, đánh bắt cá quá mức và biến đổi khí hậu đều đóng góp vào mất môi trường sống, đã được xác định là nguyên nhân LỚN NHẤT đằng sau sự giảm tốc độ đa dạng sinh học và tăng tốc độ tuyệt chủng. 75% môi trường đất đai trên trái đất đã bị biến đổi mạnh do hành động của con người. Hiện nay, 9% số loài trên thế giới không có môi trường sống đủ để tồn tại lâu dài. Một trong những ví dụ rõ ràng về phá hủy môi trường sống là sự tàn phá rừng đang xảy ra trên khắp thế giới, đặc biệt là rừng nhiệt đới Amazon.",
        ],
      },

      {
        id: 6,
        title: "Đối mặt và giải quyết vấn đề này như thế nào?",
        description: [
          "Những giải pháp dựa trên việc gìn giữ thiên nhiên là một cách tuyệt vời để đối phó với mất môi trường sống vì những giải pháp đó bao gồm việc nuôi dưỡng, bảo vệ toàn diện thiên nhiên để chống lại khí thải nhà kính và ảnh hưởng của chúng. Chúng ta cần bảo tồn và phát triển lại hệ sinh thái và môi trường sống, từ đó giải quyết vấn đề CO2 một cách hiệu quả hơn và giúp bảo vệ đa dạng sinh học của hành tinh.",
        ],
      },
      {
        id: 7,
        title: "Mối đe dọa đối với chúng ta",
        description: [
          "Mọi thứ trong thế giới tự nhiên đều liên kết với nhau, điều này có nghĩa là sự tuyệt chủng của một loài có tác động trực tiếp đến loài khác. Ngoài ra, theo như chương trình của BBC 'Sự thật về Tuyệt chủng', những nhà sinh thái học tin rằng nếu chúng ta tiếp tục theo con đường này, đại dịch Covid vừa rồi sẽ không chỉ là một sự kiện duy nhất.. Điều này là do sự phá hủy môi trường sống đã làm cho các vi sinh vật, vi khuẩn độc hại có môi trường phát triển mạnh mẽ. Trong thực tế, nhiều nhà khoa học và sinh thái học đồng thuận rằng chúng ta càng làm ảnh hưởng đến sự sống của các loài khác trên Trái Đất, thì chúng ta cũng đang đẩy bản thân mình tới chỗ diệt vong.",
        ],
      },
      {
        id: 8,
        title: "Bao nhiêu loài đang đối mặt với nguy cơ tuyệt chủng?",
        description: [
          "Hiện nay, Danh sách Đỏ của IUCN ghi chú có 882 loài đã tuyệt chủng, trong đó có 77 loài tuyệt chủng trong tự nhiên (EW).",
          "Những con số này có vẻ không được nhiều người quá quan tâm bởi so với những loài đang sống sót thì nó quá nhỏ bé. Bên cạnh đó, mọi người thường chỉ quan tâm đến csc loài vật hiện hữu xung quanh và cho rằng sự biến mất của các loài ở nơi khá là không liên quan, không mấy quan trọng. Tuy nhiên, trong thực tế, hàng nghìn hàng triệu loài động vật vẫn ở trong một môi trường sống là Trái Đất là loài nào cũng quan trọng đối với một hệ sinh thái khép kín.",
          "'Cách chúng ta lựa chọn loài nào sống sót và loài nào tuyệt chủng là cực kỳ thiển cận và thiếu sót; sự thiên lệch của chúng ta về việc bảo vệ những loài gần gũi xung quanh làm cho những sinh linh thực sự giữ cho hành tinh của chúng ta phát triển không được quan tâm đúng mức' - theo National Geographic.",
          "Một lần nữa, các giải pháp dựa vào thiên nhiên, mang lại cách tiếp cận toàn diện để bảo vệ hệ sinh thái, có thể là chìa khóa để ngăn chặn nhiều sự tuyệt chủng. Khi tất cả cây cỏ và động vật được đánh giá cao vì vai trò của chúng trong một môi trường sống, chúng có khả năng sống sót và phát triển. Điều quan trọng là phải biết rằng chúng ta có ảnh hưởng đến tương lai của hành tinh và sự sống trên đó để ngăn chặn kịp thời tình trạng tuyệt chủng.",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Sức mạnh chữa lành của thiên nhiên",
    date: "January 23 2022",
    description: [
      "Rừng không đường mòn, cây xanh um tùm, cảnh đẹp thanh bình và bản hòa nhạc của các loài chim là kho báu tự nhiên mà ai cần phải trải nghiệm ít nhất một lần trong đời. Bởi thiên nhiên là con đường trong trẻo nhất dẫn đến bình an nội tâm, nó là nguồn năng lượng mạnh mẽ vô bờ và làm thuần khiết lại trái tim của con người. Một người hẳn là may mắn biết bao khi có cơ hội được hít thở trong môi trường không ô nhiễm, khi lồng ngực ta được tắm trong không khí trong lành và mũi ngập tràn hương thơm của mọi loài hoa.",
      "Dành thời gian ở giữa thiên nhiên sẽ giúp tâm trí có chốn nghỉ ngơi, đem lại cái nhìn tươi mới cho những mục tiêu phía trước. Bên cạnh đó, thiên nhiên còn giúp chúng ta làm lắng dịu lại tâm trí vốn hay lao xao, nhảy nhót. Điều này thực sự đã được nghiên cứu đối với nhóm trẻ em tăng động. Sau một thời gian tiếp xúc với thiên nhiên, những đứa trẻ đã có sự cải thiện rõ rệt về sự tập trung, ngoài ra các phần não liên quan đến sự đồng cảm và tình yêu cũng được “thắp sáng”.",
    ],
    img: "/assets/section/Picture2.png",
    data: [
      {
        id: 1,
        title: "Thiên nhiên đem lại sức mạnh nội tâm",
        description: [
          "Việc ở trong thiên nhiên giúp chúng ta kết nối với linh hồn của mình ở một cấp độ sâu sắc hơn. Năm giác quan của chúng ta hoạt động đầy đủ, và linh hồn của chúng ta phát triển một mối liên kết mạnh mẽ với thế giới tự nhiên. Hương thơm thuần khiết của cây cỏ và hoa lá mang đến cho chúng ta đến vẻ đẹp trong trẻo và sáng bừng. Chúng ta sẽ chạm thật sâu tới nội tâm nếu biết cách hòa điệu với nhịp điệu của thiên nhiên. Chúng ta có niềm vui từ sự chánh niệm, và biết cách thưởng thức những khoảnh khắc nhỏ trong cuộc sống.",
        ],
      },
      {
        id: 2,
        title: "Thiên nhiên đem lại sức mạnh nội tâm",
        description: [
          "Việc ở trong thiên nhiên giúp chúng ta kết nối với linh hồn của mình ở một cấp độ sâu sắc hơn. Năm giác quan của chúng ta hoạt động đầy đủ, và linh hồn của chúng ta phát triển một mối liên kết mạnh mẽ với thế giới tự nhiên. Hương thơm thuần khiết của cây cỏ và hoa lá mang đến cho chúng ta đến vẻ đẹp trong trẻo và sáng bừng. Chúng ta sẽ chạm thật sâu tới nội tâm nếu biết cách hòa điệu với nhịp điệu của thiên nhiên. Chúng ta có niềm vui từ sự chánh niệm, và biết cách thưởng thức những khoảnh khắc nhỏ trong cuộc sống.",
        ],
      },
      {
        id: 3,
        title: "Sự bình yên cho cơ thể",
        description: [
          "Khi ta tiếp xúc với thiên nhiên, ta được chữa lành tinh thần và cảm thấy dễ chịu. Thân thể và tâm hồn chưa bao giờ tách rời nhau, nên ta có thể cảm nhận được sự khỏe mạnh chảy trôi từ trong thể trí cho tới từng cơ bắp. Thiên nhiên giúp điều hòa huyết áp, ổn định nhịp tim và ngưng việc sản xuất các hormone căng thẳng. Một nghiên cứu cho thấy cảnh quan thiên nhiên giúp bệnh nhân chịu đau tốt hơn, vượt qua các cảm xúc tiêu cực và giảm thời gian nằm viện.",
          "Thiên nhiên có ảnh hưởng kỳ diệu đối với sức khỏe của chúng ta: nó giảm viêm nhiễm và ngăn chặn nhiều bệnh tật bằng cách kích thích hệ miễn dịch.",
          "Chúng ta cần dành thời gian để khai thác sự bình yên vĩnh cửu cho tâm trí, cơ thể và linh hồn trong thế kỷ 21 - Thời đại đô thị hóa này. Sự làm mới năng lượng bằng thiên nhiên sẽ trang bị cho chúng ta khoảng thời gian làm việc hiệu quả với tâm trạng hạnh phúc và cơ thể khỏe mạnh.",
        ],
      },
    ],
  },
];
const pageBlog = ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const postData = data.find((item) => item.id === parseInt(id));
  if (!postData) {
    throw new Error(`Không tìm thấy dữ liệu cho id ${id}`);
  }
  return (
    <div className="h-full max-w-full">
      <div
        key={postData.id}
        className="mb-14 max-w-2xl rounded-md p-4 odd:bg-gray-50 odd:dark:bg-primary-foreground"
      >
        <div className="relative h-full">
          <Image
            src={postData.img}
            alt=""
            width={500}
            height={200}
            className="h-[400px] w-full rounded-sm object-fill transition hover:scale-105 hover:bg-indigo-500 hover:shadow-sm hover:shadow-slate-300"
          />
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <h2 className="font-medium opacity-70">Environment</h2>
          <Link
            href={"/blog"}
            className="text-xl font-bold hover:text-blue-600"
          >
            <CardTitle>{postData.title}</CardTitle>
          </Link>
          <div className=" flex flex-row items-center">
            <h4 className="flex flex-row items-center gap-3 text-lg">
              <RiTimeLine />
              <div>
                <p>
                  {new Date().getDate()}/{new Date().getMonth()}/
                  {new Date().getFullYear()}
                </p>
              </div>
            </h4>
          </div>
        </div>
        <CardHeader>
          {postData.description.map((data, index) => (
            <CardContent key={index}>
              <CardDescription>{data}</CardDescription>
            </CardContent>
          ))}
        </CardHeader>
        <div>
          <CardHeader>
            <ul className="list-decimal text-justify">
              <div>
                {postData.data.map((data) => (
                  <li key={data.id}>
                    <h1>{data.title}</h1>
                    {data.description.map((data, index) => (
                      <CardContent key={index}>
                        <div>
                          <p>{data}</p>
                        </div>
                      </CardContent>
                    ))}
                  </li>
                ))}
              </div>
            </ul>
          </CardHeader>
        </div>
      </div>
    </div>
  );
};

export default pageBlog;
