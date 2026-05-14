// =========================
// LOADER
// =========================
window.addEventListener("load", () => {

  const loader =
    document.querySelector(".loader");

  if(loader){
    loader.classList.add("hide");

setTimeout(()=>{
  loader.style.display = "none";
},1400);
  }

});

// =========================
// SCROLL
// =========================
function goToClubs(){

  document
    .getElementById("clubs")
    ?.scrollIntoView({
      behavior:"smooth"
    });

}

function scrollToTop(){

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}

// =========================
// REVEAL
// =========================
const reveals =
  document.querySelectorAll(".reveal");

function revealElements(){

  reveals.forEach(el=>{

    if(
      el.getBoundingClientRect().top <
      window.innerHeight - 50
    ){
      el.classList.add("active");
    }

  });

}

window.addEventListener(
  "scroll",
  revealElements
);

window.addEventListener(
  "load",
  revealElements
);


// CLUB DATA

const data = {

  photo:{
  
  logo:
  "slogan pallette.jpg",
  teamImage:"photobooth1.jpg",
teamText:
"",

  cta:
"Khám phá thế giới sáng tạo cùng Palette ✨",

  title:
  "CLB Nhiếp Ảnh và Báo Chí",

  desc:
  "What is the PALETTE of your life? ✨",

  logo:
  "slogan pallette.jpg",

  fanpage:"https://www.facebook.com/clbnabcmdc",

  members:[
  {

    name:"Thầy Lê Dũ Bằng",

    role:"Cố vấn CLB",

    image:"cv.jpg",

    bio:'Thầy là giáo viên dạy Văn và là giáo viên cố vấn cho cả câu lạc bộ'
  }

],

  divisions:[

    {

      title:"📷 Ban Nhiếp Ảnh",

      image:"nhiếp.jpg",

      desc:`
• Chụp ảnh cho sự kiện trường.
• Chụp bộ ảnh CLB.
• Lên ý tưởng project.
• Hỗ trợ quay phim.
      `

    },

    {

      title:"🎨 Ban Thiết Kế Đồ Họa",

      image:"đồ họa.jpg",

      desc:`
• Design hình ảnh.
• Edit ảnh fanpage.
• Hỗ trợ edit video.
• Lên ý tưởng truyền thông.
      `

    },

    {

      title:"📰 Ban Báo Chí",

      image:"báo.jpg",

      desc:`
• Viết caption fanpage.
• Viết kịch bản.
• Lên ý tưởng project.
      `

    }

  ],

  events:[

    {

      title:"Palette in Wonderland",

      image:"Palette in wonderland.jpg",

      desc:"Photobooth",

      link:"https://www.facebook.com/share/p/1CmenmsFQR/"
    },

    {

      title:"Giỗ Tổ Hùng Vương",

      image:"hv.jpg",

      desc:"",

      link:"https://www.facebook.com/share/p/1EBspLaad2/"
    },

{

      title:"HỘI TRẠI TRUYỀN THỐNG 9/1 LẦN THỨ XVIII(2026): CHẠM-KHẮC TUỔI TRẺ ",

      image:"trại.jpg",

      desc:"",

      link:"https://www.facebook.com/story.php?story_fbid=1310931807735623&id=100064564486967&rdid=QS2GM7VyuaYozAlm#"
    },

    {

      title:"Tiếng hát học sinh Mạc Đĩnh Chi",

      image:"hát.png",

      desc:"",

      link:"https://www.facebook.com/share/p/1BoMvbXDwC/"
},

{

      title:"Tết",

      image:"Tết.jpg",

      desc:"",

      link:"https://www.facebook.com/share/p/1CPDQQRCTq/"
},
    
    {

      title:"Giỗ Tổ Hùng Vương",

      image:"hv1.jpg",

      desc:"Vẫn là Giỗ Tổ Hùng Vương",

      link:"https://www.facebook.com/share/p/1EBspLaad2/"
    }

  ]

},

math:{

  cta:
"CLB Fibonacci là nơi mà các bạn có thể thỏa sức tìm hiểu về toán học, ngoài ra các bạn còn có thể tham gia các hoạt động ngoại khóa thú vị và vui nhộn sau những giờ học căng thẳng trên trường.",

  title:
  "Toán club",

  fanpage:"https://www.facebook.com/clbtoanhocmdc",

  desc:
  "CLB Fibonacci là nơi mà các bạn có thể thỏa sức tìm hiểu về toán học, ngoài ra các bạn còn có thể tham gia các hoạt động ngoại khóa thú vị và vui nhộn sau những giờ học căng thẳng trên trường.",

  logo:
  "Fibo.png",
  teamImage:"chụp chung.jpg",

teamText:
"Ban quản lý Fibonacci (gen 9)",

  members:[

  {

    name:"Thầy Đoàn Minh Tâm",

    role:"Cố vấn CLB",

    image:"DMT1.jpg",

    bio: `"Hãy yêu Toán theo cách riêng của bạn"Xin chào các bạn học sinh tài năng của Mạc gia. Thầy là Đoàn Minh Tâm – cố vấn CLB Toán Học Fibonacci. Với kim chỉ nam của CLB là tạo nên một không gian nơi chúng ta sẵn sàng kết nối, học hỏi, vui vẻ cùng nhau - thầy mong rằng qua các sự kiện sôi nổi và gần gũi sẽ không chỉ giúp các bạn rèn dũa đa dạng kỹ năng bổ ích , mà còn giúp nuôi dưỡng tình yêu với Toán học. Hy vọng trong năm học mới, CLB của chúng ta sẽ tiếp tục vươn xa, ngày càng gắn kết và phát triển hơn nữa nhenn! 🌟
`
},

{

    name:"Bạn Nguyễn Minh Hiếu",

    role:"Chủ nhiệm câu lạc bộ",

    image:"CNfibo.jpg",

    bio:`“Khó quá thì cứ ghi tên anh vào, vì anh là lời giải cho mọi bài toán của em.”❤️‍🔥Xin chào mọi người và mình là Nguyễn Minh Hiếu - chủ nhiệm câu lạc bộ FIBONACCI 25-26. Mình vẫn đang từng hoàn thiện bản thân mình, nhưng với tất cả những kinh nghiệm và kỹ năng mình đã học được trong quãng thời gian đồng hành cùng FIBONACCI, mình sẽ cố hết sức để mang đến cho các bạn một môi trường học tập và vui chơi lành mạnh. Mình tin chắc rằng được đồng hành cùng mọi người trong 1000 ngày tại “Mạc gia” là trở thành dấu ấn đẹp nhất trong tuổi thanh xuân của mình.🤟`
  },

  {

    name:"Bạn Khưu Hoàng Gia Bảo",

    role:"Trưởng ban logistic (Hậu cần) & Phó chủ nhiệm clb",

    image:"phofibo.jpg",

    bio:`“Toán không hẳn chỉ là những con số hay hình học - mà nó chính là logic, là những viên gạch xây nên vạn vật”Hú hú tất cả mọi người, những con người đầy tài năng và tâm huyết dưới cùng 1 ngôi nhà Mạc. Mình là Khưu Hoàng Gia Bảo aka Khưu Bảo - hiện là phó chủ nhiệm của CLB Toán học FIBONACCI năm học 2025 - 2026. Đối với mình, bốn bể là nhà - tất cả đều là anh em, nên khi đến với FIBO, mình mong rằng tất cả chúng ta sẽ có những kỉ niệm thật khó quên trong những ngày tháng tiếp theo nhé 🔥`
  },

  {

    name:"Bạn Lâm Kim Mẫn",

    role:"Trưởng ban Design & Phó chủ nhiệm clb",

    image:"phó fibo.jpg",

    bio:`"Warning: Highly contagious energy. May cause a sudden urge to finish your design and solve a few equations."😉Xin chào tất cả mọi ngườiii, Mình là Kim Mẫn đến từ 11A18 😈. Mình rất vinh hạnh khi có thể đảm nhiệm vai trò phó chủ nhiệm và đồng thời là trưởng ban Design của CLB FIBONACCI năm học 2025-2026.Ban Design của Fibonacci chắc chắn là nơi đặc biệt nhất mà mình từng đến, nơi lần đầu tiên mình thấy được sự sáng tạo trong tư duy toán học. May mắn khi có thể đồng hành với F1BO mình đã có rất nhiều cơ hội để trau dồi học hỏi và phát huy, bản thân mình sẽ nỗ lực lan tỏa những thông điệp ý nghĩa của F1BO nhiều hơn nữa. Mong rằng chúng ta sẽ có những kỉ niệm thật đẹp cùng nhau trên hành trình đáng nhớ tại Mạc gia nhé. Cảm ơn tất cả mọi người.❤️‍🔥💫`
  },

  {

    name:"Bạn Thái Thiện Nhân",

    role:"Phó chủ nhiệm clb",

    image:"thuần phó fibo.jpg",

    bio:`“Humans traverse the path of fate... seeking knowledge, craving revelation, striving to exist...”Xin chào mọi người, mình, Thái Thiện Nhân đến từ lớp 11A7 và cũng là Phó Chủ Nhiệm của CLB. Sau quãng thời gian 1 năm gắn bó với CLB, mình đã học được rất nhiều kỹ năng và cũng như là có những kinh nghiệm đáng nhớ.Mong rằng trong 1000 ngày sắp tới chúng ta sẽ cùng nhau học tập, giao lưu và có thật nhiều kỉ niệm cùng với đại gia đình F1B0 nha!`
  },

  {

    name:"Bạn Hồ Hoàng Vĩ",

    role:"Leader Media",

    image:"lead media.jpg",

    bio:`“Math thì kiếm mấy anh kia, Mát thì kiếm anh này”
👨‍🍳Yo, xin chào tất cả mọi người, shout out đến tất cả anh chị em đang học tại nhà Mạc🤟. Mình là Hồ Hoàng Vĩ của 11A18 A.K.A Trưởng ban Truyền Thông - MêDia🎤. Bản thân mình thực sự không có năng khiếu với việc truyền thông nhưng cũng do hữu duyên mà mình đã vào được Fibonacci để rồi cuối cùng sự yêu quý dành cho CLB cũng chính là lý do để mình trở leader của Media😴. Rồi thì không lòng vòng nữa mình mong là trong năm nay mình cũng như các bạn ban lãnh đạo sẽ cống hiến hết mình, mang đến một FIBO thật bùng nổ và khó phai với tất cả mọi người, Cheers🔥`
  },

  {

    name:"Bạn Nguyễn Kim Hoàng",

    role:"Leader Academic",

    image:"lead aca.jpg",

    bio:`“Mỗi con số là một bước tiến, mỗi công thức là một cánh cửa mở ra.”
Ayo Kim Hoàng tới rồi nè 🔥
Wow hello mọi người, mình là Nguyễn Kim Hoàng đến từ lớp 11A18 và là thủ lĩnh của vương quốc Academic trong nhiệm kỳ này✨
Sau 1 năm đồng hành, phiêu lưu cùng những người bạn vào thế giới toán học đầy nhiệm màu của vùng đất 
F1B0 đã khiến mình càng yêu nơi này hơn, đồng thời mình cũng đã khám phá được vô vàn điều mới mẻ 
và thú vị🥳. Vì vậy, mình mong rằng các bạn sẽ có thật nhiều kỉ niệm đẹp tại vùng đất F1B0 này nhaaa 💖.
Mình luôn sẵn sàng chào đón các tân binh nhà Mạc khi đến với CLB Fibonacci với 
“năng lượng tích cực như cách anh đổ xăng, nó phải gọi là đầy bình” 🎸🤸`
  },

  {

    name:"Bạn Bùi Phương Hiền",

    role:"Leader Human Resources",

    image:"lead human.jpg",

    bio:`“Không là cao thủ toán, nhưng luôn sẵn sàng nhập cuộc chơi.”
Mình là Bùi Phương Hiền, lead HR – Game Master ẩn mặt, người luôn biết bạn có online trong CLB hay không.
Hy vọng CLB Toán - Fibonacci của chúng ta sẽ luôn full slot, đánh boss nào cũng win!” 👾`
  },

  {

    name:"Bạn Dương Hoàng Minh Thư",

    role:"Phó Chủ Nhiệm ban Design",

    image:"phó lead design.jpg",

    bio:`“Khai căn khó khăn, bình phương trí tuệ, lập phương nỗ lực”
Xin chào tất cả mọi người mình là Dương Hoàng Minh Thư đến từ 11A22. 
Sau 1 năm làm việc và gắn bó thì mình đã may mắn được chọn để đảm nhiệm vị trí Phó trưởng ban Thiết kế của Fibonacci 2526. Mong rằng nhiệm kỳ này sẽ có thật nhiều kỷ niệm đáng nhớ với tất cả thành viên Mạc gia, và luôn trong tư thế sẵn sàng để đón nhận nhiều điều mới nho!! 😘😘`
  },

  {

    name:"Bạn Lê Nguyễn Minh Triết",

    role:"Phó Leader Logistic",

    image:"phó lead logistic.jpg",

    bio:`"Không gì là không thể nếu bạn không ngừng thử sức, tìm tòi và học hỏi”
Hé lô mọi người mình là Lê Nguyễn Minh Triết - phó lead ban logistic🤯🙆‍♂️. 
Sau 1 năm được gắn bó với F1B0 thì mình đã học được nhiều kiến thức mới và cũng được làm quen thêm rất nhiều người bạn có cùng đam mê toán học😈. Hy vọng rằng nhiệm kỳ này mình sẽ làm việc thật tốt cũng như học được thêm thứ mới mẻ nữa.`
  },

   {

    name:"Bạn Phan Thúy Lâm",

    role:"Phó ban Human Resources",

    image:"phó lead human.jpg",

    bio:`""Because the one true ending that splendid future waits for us"
Xin chào mọi người ♪⁠ヽ⁠(⁠･⁠ˇ⁠∀⁠ˇ⁠･⁠ゞ⁠) Mình là Phan Thúy Lâm - phó ban HR, thật sự quãng thời gian tại ngôi nhà FIBO mình đã học được rất nhiều bài học mới mẻ, theo đó là những trải nghiệm vô cùng thú vị. Mong rằng chúng ta cũng sẽ có quãng thời gian đồng hành cùng nhau thật tuyệt vời, song là những khoảnh khắc tràn đầy tiếng cười tại FIBO nhennn ><`
  },
],

  divisions:[

    {

      title:"📚 BAN HỌC TẬP (ACADEMIC)",

      

      desc:`
Có thể xem Ban Học Tập chính là nơi khởi nguồn cho những ý tưởng sáng tạo giúp vận hành các hoạt động học tập. 
Các thành viên ở nơi đây luôn nỗ lực tạo ra những trò chơi vô cùng thú vị và bổ ích
 nhằm giúp Toán học không còn khô khan mà trở nên sinh động, dễ hiểu hơn. 
 Và tất nhiên, không thể thiếu việc hỗ trợ ôn tập trong mỗi mùa thi căng thẳng. 
 Nhờ có Ban Học Tập, Toán học đã trở nên gần gũi, thú vị và tràn đầy cảm hứng! 🌟
      `

    },

    {

      title:"📦 BAN HẬU CẦN (LOGISTICS)",



      desc:`
Ban Hậu Cần là những người thợ tận tụy âm thầm vun đắp từng chi tiết,
chuẩn bị tỉ mỉ bằng cả tâm huyết và sự bền bỉ không ngừng nghỉ. 
Họ biến những ý tưởng và giấc mơ thành hiện thực, tạo nền móng vững chắc 
để hành trình của Fibonacci luôn vững vàng, sẵn sàng vượt mọi thử thách phía trước. 🚀
`
    },

    {

      title:"📰 BAN TRUYỀN THÔNG (MEDIA)",


      desc:`
Những thành viên của Ban Truyền Thông chính là các “nhà văn” tài ba,
là bộ mặt đại diện đưa hình ảnh của những nhà thám hiểm đến gần hơn với các học sinh nhà Mạc.
Họ là những người nắm bắt thông tin một cách nhanh chóng và thu hút mọi người
thông qua những bài viết sáng tạo không ngừng. 
Mỗi sự kiện, mỗi hoạt động của Fibo đều được Ban Truyền Thông chăm chút từng câu chữ 
để lan tỏa thật rộng rãi, truyền tải trọn vẹn tinh thần của CLB. ✍️✨
      `

    },

    {

      title:"🤝 BAN NHÂN SỰ (HUMAN RESOURCES)",

      desc:`
Ban Nhân Sự là lực lượng đặc biệt 
nơi các thành viên đóng vai trò kết nối 
toàn bộ nhà thám hiểm F1B0 – họ là người điều phối nhân lực và giữ cho mọi hoạt động diễn ra trơn tru, 
nhịp nhàng. Đặc biệt lắm nha, bởi các “nhân sự” ở nơi này chỉ được tuyển chọn vào cuối mỗi hành trình – khi những người thật sự phù hợp đã sẵn sàng bước vào vị trí quản lí thành viên một cách thầm lặng nhưng không thể thiếu! 🌿
      `

    },
  {

      title:"🎨 BAN THIẾT KẾ (DESIGN)",

      desc:`
Những thành viên Ban Thiết Kế là các nghệ nhân tài hoa 
với đôi mắt tinh tường như các nhà khảo cổ, khai phá vẻ đẹp và sáng tạo không giới hạn trong từng thiết kế.
Họ điều khiển bảng màu tạo nên những bức tranh tuyệt mỹ, 
đưa ý tưởng vượt ra khỏi khuôn mẫu thường thấy, tạo nên những tác phẩm độc đáo đầy cảm xúc. 
Mỗi ấn phẩm là một bảo vật riêng biệt, ghi dấu ấn sâu đậm trong hành trình phát triển của F1B0. 🌈✨
      `

    }  
  ],

  events:[

  
    {

      title:"Happy pi day",

      image:"pi.jpg",

      desc:"",

      link:"https://www.facebook.com/share/p/1DkydiSEGD/"
    },

    {

      title:"Cuộc thi xây cầu trọng lực",

      image:"cầu1.jpg",

      desc:"",

      link:"https://www.facebook.com/share/p/1HbhEaSr4n/"
    },

    {

      title:"Tết đến rồi",

      image:"tết fibo.jpg",

      desc:"",

      link:"https://www.facebook.com/share/p/1cGnuZBPi8/"
    },
    
    {

      title:"3x3 SPEED CUBING IV ",

      image:"cube.jpg",

      desc:`Để tiếp nối truyền thống hằng năm, Fibonacci chúng mình sẽ tổ chức một cuộc tranh hùng đầy kỳ thú để các nhà thám hiểm đến thách thức và cùng tranh tài⚔️.
💥 "3X3 SPEED CUBING" - nơi mà những cú xoay định mệnh và những tiếng tích tắc của đồng hồ sẽ thử thách giới hạn về tốc độ và trí tuệ của bạn.
`,

      link:"https://www.facebook.com/story.php?story_fbid=1145670181007117&id=100066924373265&rdid=TgmIaDbzfxdgMBRI#"

    },

{

      title:"Fibonnaci Day ",

      image:"fibo day.jpg",

      desc:"🎉 Như một truyền thống quen thuộc hằng năm, CLB chúng mình và các bạn lại cùng nhau chào đón Ngày FIBONACCI (23/11) – dịp để tôn vinh những con số kỳ diệu và nhà toán học vĩ đại Leonardo Fibonacci.🛎️",

      link:"https://www.facebook.com/share/p/1E3ztMMTHj/"
    },
{

      title:"1 vài fact về nhà toán học Fibonnaci ",

      image:"fibo fact.jpg",

      desc:"",

      link:"https://www.facebook.com/share/p/1E3ztMMTHj/"
    },


  ]

},
};

// CLUB PAGE

const club =
new URLSearchParams(
  location.search
).get("club");

if(club && data[club]){

  const d = data[club];

  const fanBtn =
document.getElementById(
  "fanpage-link"
);

if(fanBtn && d.fanpage){

  fanBtn.href = d.fanpage;

}

  const teamBanner =
document.getElementById(
  "team-banner"
);

if(teamBanner){

  teamBanner.innerHTML = `

  <div class="team-banner">

    <img src="${d.teamImage}">

    <div class="team-overlay">

      <h3>
        ${d.teamText}
      </h3>

    </div>

  </div>

  `;

}

// DIVISIONS

const divisionContainer =
document.getElementById(
  "division-container"
);

if(divisionContainer){

  divisionContainer.innerHTML =

  d.divisions.map((div,index)=>`

    <section class="
      division
      ${index % 2 ? "reverse" : ""}
    ">

      <div class="division-image">

        <img src="${div.image}">

      </div>

      <div class="division-content">

        <h2>${div.title}</h2>

        <p>${div.desc}</p>

      </div>

    </section>

  `).join("");

}

// EVENT SLIDER

const eventSlider =
document.getElementById(
  "event-slider"
);

if(eventSlider){

  eventSlider.innerHTML =

  d.events.map(event=>`

<div class="event-card">

  <img src="${event.image}">

  <div class="event-info">

    <h3>${event.title}</h3>

    <p>${event.desc}</p>

    <a
      href="${event.link}"
      target="_blank"

      class="event-link"
    >

      Xem bài viết →

    </a>

  </div>

</div>

`).join("");
}

  // TITLE
  document.getElementById(
    "club-title"
  ).innerText = d.title;

  // DESC
  document.getElementById(
    "club-desc"
  ).innerText = d.desc;

  // LOGO
  document.getElementById(
    "club-logo"
  ).src = d.logo;

// MEMBERS
const memberBox =
document.getElementById("members");

if(memberBox && d.members){

  memberBox.innerHTML =

d.members.map(m=>`

<div class="member-card"
onclick='openMember(${JSON.stringify(m)})'>

  <img src="${m.image}">

  <h3>${m.name}</h3>

  <p>${m.role}</p>

</div>

`).join("");

}

  // REGISTER BTN
  const registerBtn =
  document.getElementById(
    "club-register-btn"
  );

 
  if(registerBtn){

  registerBtn.addEventListener(
    "click",
    ()=>{

      location.href =
      `register.html?club=${club}`;

    }
  );

}
  };


// =========================
// FORM
// =========================
const form =
  document.getElementById("form");

if(form){

  form.addEventListener(
    "submit",
    e=>{

      e.preventDefault();

      const name =
        document
        .getElementById("name")
        .value;

      const cls =
        document
        .getElementById("class")
        .value;

      const message =
        document
        .getElementById("message");

      const checked =
        document.querySelectorAll(
          "input[type='checkbox']:checked"
        );

      // VALIDATE
      if(!name || !cls){

        message.innerText =
          "⚠️ Nhập thiếu thông tin rồi ạ:)";

        return;

      }

      if(checked.length===0){

        message.innerText =
          "⚠️ Chưa chọn câu lạc bộ:)";

        return;

      }

      // CLUBS
      let clubs = [];

      checked.forEach(c=>{

        if(c.value==="photo"){
          clubs.push("📸 Nhiếp ảnh");
        }

        if(c.value==="math"){
          clubs.push("🧮 Toán học");
        }

      });

      // MODAL
      const modal =
        document.getElementById(
          "successModal"
        );

      const result =
        document.getElementById(
          "clubResult"
        );

      result.innerHTML = `
        <div>
          Bạn đã đăng ký:
        </div>

        <div class="club-list">
          ${
            clubs.map(c=>
              `<div class="club-item">
                ${c}
              </div>`
            ).join("")
          }
        </div>
      `;

      modal.classList.add("show");

      // CONFETTI
      launchConfetti();

      // REDIRECT
      setTimeout(()=>{

        location.href =
          "index.html";

      },4000);

    }
  );

}

// =========================
// CONFETTI
// =========================
function launchConfetti(){

  const colors = [
    "#4ade80",
    "#38bdf8",
    "#facc15",
    "#fb7185",
    "#a78bfa"
  ];

  for(let i=0;i<50;i++){

    const c =
      document.createElement("div");

    c.className = "confetti";

    c.style.left =
      Math.random()*100 + "vw";

    c.style.top =
      Math.random()*100 + "vh";

    c.style.background =
      colors[
        Math.floor(
          Math.random()*colors.length
        )
      ];

    const angle =
      Math.random() * 2 * Math.PI;

    const distance =
      Math.random()*300 + 100;

    c.style.setProperty(
      "--x",
      Math.cos(angle)*distance+"px"
    );

    c.style.setProperty(
      "--y",
      Math.sin(angle)*distance+"px"
    );

    c.style.animationDuration =
      Math.random()*1.5 + 1.5 + "s";

    document.body.appendChild(c);

    setTimeout(()=>{
      c.remove();
    },4500);

  }

}

// =========================
// EFFECT TOGGLE
// =========================
let effects = true;

function toggleEasterEgg(){
  effects = !effects;
}

// =========================
// STAR
// =========================
setInterval(()=>{

  if(!effects) return;

  const star =
    document.createElement("div");

  star.className = "star";

  star.innerText = "⭐";

  star.style.left =
    Math.random()*100 + "vw";

  star.style.animationDuration =
    Math.random()*3 + 2 + "s";

  document.body.appendChild(star);

  setTimeout(()=>{
    star.remove();
  },4000);

},1500);

// =========================
// SHOOTING STAR
// =========================
const SHOOTING_DENSITY = 4;

setInterval(()=>{

  if(!effects) return;

  for(let i=0;i<SHOOTING_DENSITY;i++){

    const s =
      document.createElement("div");

    s.className =
      "shooting-star";

    s.style.left =
      Math.random()*
      window.innerWidth + "px";

    s.style.top =
      Math.random()*
      (window.innerHeight*0.5)
      + "px";

    const size =
      Math.random()*2 + 2;

    s.style.width =
      size + "px";

    s.style.height =
      size + "px";

    const duration =
      Math.random()*0.8 + 0.8;

    s.style.animationDuration =
      duration + "s";

    document.body.appendChild(s);

    setTimeout(()=>{
      s.remove();
    },duration*1000);

  }

},1500);

// =========================
// CHIBI
// =========================
setInterval(()=>{

  if(!effects) return;

  const c =
    document.createElement("img");

  c.src =
  "https://media.tenor.com/2roX3uxz_68AAAAM/anime-wave.gif";

  c.style.position = "fixed";

  c.style.bottom = "10px";

  c.style.right = "10px";

  c.style.width = "80px";

  c.style.opacity = "0";

  c.style.transition = "0.5s";

  c.style.pointerEvents = "none";

  document.body.appendChild(c);

  setTimeout(()=>{
    c.style.opacity = "1";
  },50);

  setTimeout(()=>{
    c.remove();
  },4000);

},10000);

// =========================
// CLUB TRANSITION
// =========================
function openClub(club){

  const overlay =
  document.getElementById(
    "warpTransition"
  );

  const logo =
  document.getElementById(
    "warpLogo"
  );

  const title =
  document.getElementById(
    "warpTitle"
  );

  // lấy data đúng
  const d = data[club];

  logo.src = d.logo;

  title.innerText = d.title;

  overlay.classList.add("show");

  // warp stars
  for(let i=0;i<40;i++){

    const s =
    document.createElement("div");

    s.className =
    "parallax-star";

    s.style.left =
    Math.random()*100+"vw";

    s.style.top =
    Math.random()*100+"vh";

    s.style.animationDuration =
    Math.random()*0.8+0.6+"s";

    document.body.appendChild(s);

    setTimeout(()=>{
      s.remove();
    },1200);

  }

  // shrink
  setTimeout(()=>{

    overlay.classList.add(
      "shrink"
    );

  },3500);

  // redirect
  setTimeout(()=>{

    location.href =
    `club.html?club=${club}`;

  },3800);

}

// AUTO SELECT CLUB
const selectedClub =
new URLSearchParams(
  location.search
).get("club");

if(selectedClub){

  const checkbox =
  document.querySelector(
    `input[value="${selectedClub}"]`
  );

  if(checkbox){

    checkbox.checked = true;
    checkbox.dispatchEvent(
  new Event("change")
);
  }

}

// =========================
// EVENT SLIDER SCROLL
// =========================

const slider =
document.getElementById(
  "event-slider"
);

const next =
document.querySelector(".next");

const prev =
document.querySelector(".prev");

if(slider && next && prev){

  next.onclick = ()=>{

    slider.scrollBy({
      left: 380,
      behavior: "smooth"
    });

  };

  prev.onclick = ()=>{

    slider.scrollBy({
      left: -380,
      behavior: "smooth"
    });

  };

}

const bottomBtn =
document.getElementById(
  "bottom-register-btn"
);

if(bottomBtn){

  bottomBtn.onclick = ()=>{

    location.href =
    `register.html?club=${club}`;

  };

}

document.querySelectorAll(
  ".checkbox-card input"
).forEach(input => {

  input.addEventListener(
    "change",
    () => {

      input.parentElement.classList.toggle(
        "checked",
        input.checked
      );

    }
  );

});

function openMember(m){

  const popup =
  document.getElementById("popup");

  popup.classList.add("show");

  document.getElementById(
    "popup-img"
  ).src = m.image;

  document.getElementById(
    "popup-title"
  ).innerText = m.name;

  document.getElementById(
    "popup-role"
  ).innerText = m.role;

  document.getElementById(
    "popup-desc"
  ).innerText = m.bio;

}

function closePopup(){

  document
  .getElementById("popup")
  .classList.remove("show");

}

function openEvent(e){

  const popup =
  document.getElementById("popup");

  popup.classList.add("show");

  document.getElementById(
    "popup-img"
  ).src = e.image;

  document.getElementById(
    "popup-title"
  ).innerText = e.title;

  document.getElementById(
    "popup-role"
  ).innerText = "Sự kiện nổi bật";

  document.getElementById(
    "popup-desc"
  ).innerText = e.fullDesc;

}

// CTA
const cta =
document.getElementById("club-cta");

if(cta){

  cta.innerText = d.cta;

}