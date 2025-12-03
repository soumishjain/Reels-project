const reels = [
  {
    username: "travel_with_arya",
    likeCount: 12900,
    isLiked: false,
    commentCount: 340,
    caption: "Sunset vibes at Goa 🌅✨",
    video: "video1.mp4",
    userProfile: "https://i.pinimg.com/736x/7e/7b/84/7e7b84419fe2388ccb3bfaf486dcfa27.jpg",
    shareCount: 520,
    isFollowed: true
  },
  {
    username: "fit_muscle",
    likeCount: 19200,
    isLiked: false,
    commentCount: 890,
    caption: "Morning workout done 💪",
    video: "video3.mp4",
    userProfile: "https://i.pinimg.com/1200x/5d/15/a7/5d15a7c514ec9c2153432a36d75c4695.jpg",
    shareCount: 770,
    isFollowed: true
  },
  {
    username: "foodielife",
    likeCount: 7200,
    isLiked: false,
    commentCount: 430,
    caption: "Best street momos in Delhi 😍🔥",
    video: "video4.mp4",
    userProfile: "https://i.pinimg.com/736x/57/5f/d5/575fd5b99bda01a4fd8ede8e54bca0f7.jpg",
    shareCount: 145,
    isFollowed: false
  },
  {
    username: "art.by.kia",
    likeCount: 4500,
    isLiked: true,
    commentCount: 120,
    caption: "New watercolor portrait 🎨💙",
    video: "video5.mp4",
    userProfile: "https://i.pinimg.com/1200x/d0/f2/8a/d0f28aee82378ee8648ae96bbab1ad0e.jpg",
    shareCount: 99,
    isFollowed: true
  },
  {
    username: "coding_hub",
    likeCount: 3800,
    isLiked: false,
    commentCount: 164,
    caption: "JavaScript tip of the day 👨‍💻✨",
    video: "video6.mp4",
    userProfile: "https://i.pinimg.com/736x/e0/e1/00/e0e10015f0242575536f1a347923c7b9.jpg",
    shareCount: 230,
    isFollowed: false
  },
  {
    username: "carlover_official",
    likeCount: 22000,
    isLiked: true,
    commentCount: 910,
    caption: "Mustang GT exhaust sound 😍🔥",
    video: "video7.mp4",
    userProfile: "https://i.pinimg.com/736x/40/73/58/407358951b0ce44892f217b481933dee.jpg",
    shareCount: 1020,
    isFollowed: false
  },
  {
    username: "daily_quotes",
    likeCount: 3100,
    isLiked: false,
    commentCount: 80,
    caption: "Be stronger than your excuses 💯",
    video: "video8.mp4",
    userProfile: "https://i.pinimg.com/1200x/4f/0e/23/4f0e235e42cc775ada0613bbac50ae3b.jpg",
    shareCount: 145,
    isFollowed: true
  },
  {
    username: "pet_world",
    likeCount: 17000,
    isLiked: false,
    commentCount: 540,
    caption: "Golden retriever being adorable 🐶💛",
    video: "video9.mp4",
    userProfile: "https://i.pinimg.com/736x/ab/a9/fc/aba9fc773e02c9e545eb436a438f0cda.jpg",
    shareCount: 690,
    isFollowed: false
  },
  {
    username: "dance_with_sana",
    likeCount: 20500,
    isLiked: true,
    commentCount: 760,
    caption: "Trend alert! 🔥🕺 #dancechallenge",
    video: "video10.mp4",
    userProfile: "https://i.pinimg.com/736x/69/d1/a5/69d1a5610235a8fa03df888863fcb100.jpg",
    shareCount: 880,
    isFollowed: true
  }
];

let sum = ''
reels.forEach(function(elem){
    sum += `<div class="reels">
                    <video class="mainimg" autoplay loop muted src="${elem.video}"></video>
                    <div class="bottom">
                        <div class="profile">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button>${elem.isFollowed?'Following':'Follow'}</button>
                        </div>
                        <div class="caption">
                            ${elem.caption}
                        </div>
                    </div>
                    <div class="right">
                        <div class="like icon">
                            <div class="like-icon">${elem.isLiked?'<i id="love" class="ri-heart-fill"></i>':'<i class="ri-heart-line"></i>'}</div>
                            <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment icon">
                            <div class="comment-icon"><i class="ri-chat-3-line"></i></div>
                            <h6>${elem.commentCount}</h6>
                        </div>
                    <div class="share icon">
                            <div class="share-icon"><i class="ri-share-forward-line"></i></div>
                            <h6>${elem.shareCount}</h6>
                        </div>
                    <div class="menu icon">
                            <div class="menu-icon"><i class="ri-more-2-fill"></i></div>
                        </div>
                </div>
                    </div>`
})
let allreels = document.querySelector('.all-reels')
allreels.innerHTML = sum
